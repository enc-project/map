import { useEffect } from 'react'
import useThrottledState from './useThrottledState'

interface ScrollPercentageHook {
  (
    containerRef: React.RefObject<HTMLDivElement>,
    contentRef: React.RefObject<HTMLDivElement>,
    yOffset?: number,
  ): number
}

const useScrollPercentage: ScrollPercentageHook = (containerRef, contentRef, yOffset = 0) => {
  const [percentageScrolled, setPercentageScrolled] = useThrottledState<number>(0, 300, (oldValue: number, newValue: number) => {
    if(oldValue == 0 && newValue != 0) return true
    if(newValue == 100 && oldValue != 100) return true
    return false
  })

  const handleScroll = () => {
    if (!containerRef.current) return
    if (!contentRef.current) return

    const element = containerRef.current
    const scrollPosition = window.scrollY
    const elementOffsetTop = element.offsetTop
    const elementHeight = element.offsetHeight
    const contentHeight = contentRef.current.offsetHeight
    const maxScrollableDistance = elementHeight - contentHeight

    const startScrollPosition = elementOffsetTop
    const endScrollPosition = startScrollPosition + maxScrollableDistance - yOffset

    if (scrollPosition < startScrollPosition) {
        setPercentageScrolled(0)
    } else if (scrollPosition > endScrollPosition) {
        setPercentageScrolled(100)
    } else {
        const effectiveScrollDistance = scrollPosition - startScrollPosition
        const percentage = (effectiveScrollDistance / (maxScrollableDistance - yOffset)) * 100 // Adjust for yOffset here
        setPercentageScrolled(Math.min(Math.max(percentage, 0), 100))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [
    containerRef,
    contentRef,
  ])

  return percentageScrolled
}

export default useScrollPercentage