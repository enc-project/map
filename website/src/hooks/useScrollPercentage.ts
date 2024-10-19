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
  const [percentageScrolled, setPercentageScrolled] = useThrottledState<number>(0, 16, (oldValue: number, newValue: number) => {
    // Update immediately if the difference is significant
    return Math.abs(oldValue - newValue) > 0.1
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
        const percentage = (effectiveScrollDistance / (maxScrollableDistance - yOffset)) * 100
        // Increase precision to 3 decimal places
        setPercentageScrolled(Math.min(Math.max(Number(percentage.toFixed(3)), 0), 100))
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