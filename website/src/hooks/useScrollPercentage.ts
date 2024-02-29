import { useState, useEffect, useRef } from 'react'

interface ScrollPercentageHook {
  (ref: React.RefObject<HTMLDivElement>): number
}

const useScrollPercentage: ScrollPercentageHook = (ref) => {
  const [percentageScrolled, setPercentageScrolled] = useState<number>(0)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { boundingClientRect, rootBounds } = entry
        if (!rootBounds) return // Exit if rootBounds is null
          
        if (entry.isIntersecting) {
          let visiblePart: number
          let percentage: number

          if (boundingClientRect.top >= 0) {
            visiblePart = Math.min(boundingClientRect.bottom, rootBounds.bottom) - boundingClientRect.top
            percentage = (visiblePart / boundingClientRect.height) * 100
          } else if (boundingClientRect.bottom > 0) {
            visiblePart = boundingClientRect.bottom - Math.max(boundingClientRect.top, rootBounds.top)
            percentage = (visiblePart / boundingClientRect.height) * 100
          } else {
            percentage = -1 // Div is not visible
          }
          setPercentageScrolled(percentage)
        } else {
          setPercentageScrolled(-1) // Div is not visible
        }
      })
    }

    if (ref.current) {
      observerRef.current = new IntersectionObserver(observerCallback, {
        root: null, // observing with respect to viewport
        rootMargin: '0px',
        threshold: 0
      })
      observerRef.current.observe(ref.current)
    }

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [ref]) // Only re-run the effect if ref changes

  return percentageScrolled
}

export default useScrollPercentage
