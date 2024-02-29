import { useState, useEffect, useRef } from 'react'

import useThrottledState from './useThrottledState'

interface ScrollPercentageHook {
  (ref: React.RefObject<HTMLDivElement>): number
}

const useScrollPercentage: ScrollPercentageHook = (ref) => {
  const [percentageScrolled, setPercentageScrolled] = useThrottledState<number>(0)

  const handleScroll = () => {
    if (!ref.current) return

    const element = ref.current
    const viewportHeight = window.innerHeight
    const scrollPosition = window.scrollY
    const elementOffsetTop = element.offsetTop
    const elementHeight = element.offsetHeight

    // Determine the positions when the top of the div passes the top of the viewport and when the bottom of the div passes the bottom of the viewport.
    const startScrollPosition = elementOffsetTop
    const endScrollPosition = elementOffsetTop + elementHeight - viewportHeight

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
        const maxScrollableDistance = elementHeight - viewportHeight // Total scrollable distance within the element considering the viewport height.
        const percentage = (effectiveScrollDistance / maxScrollableDistance) * 100
        setPercentageScrolled(Math.min(Math.max(percentage, 0), 100))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Trigger initial check in case the element is already in view
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref]) // Only re-run the effect if ref changes

  return percentageScrolled
}

export default useScrollPercentage
