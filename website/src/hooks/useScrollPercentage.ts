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

    const startScrollPosition = elementOffsetTop - yOffset
    const endScrollPosition = startScrollPosition + maxScrollableDistance

    // Check if the div is completely out of view: above or below the viewport.
    if (scrollPosition < startScrollPosition) {
        // If the scroll is above the start of the element, the div has not yet started to pass the top of the viewport.
        setPercentageScrolled(0)
    } else if (scrollPosition > endScrollPosition) {
        // If the scroll is below the end of the element (considering the viewport height), the div has completely passed the bottom of the viewport.
        setPercentageScrolled(100)
    } else {
        // The div is now starting to pass the top of the viewport or has started to be hidden by the bottom.
        // Adjust the scroll percentage to account for the viewport height.
        const effectiveScrollDistance = scrollPosition - startScrollPosition
        const percentage = (effectiveScrollDistance / maxScrollableDistance) * 100
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
