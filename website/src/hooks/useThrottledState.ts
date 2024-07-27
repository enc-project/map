import { useState, useRef, useEffect } from 'react'

function useThrottledState<T>(
  initialValue: T,
  delay = 50,
  // add optional function that accepts (T, T) and returns boolean
  // to determine if the new value should be set immediately
  shouldUpdateImmediately = (oldValue: T, newValue: T) => false,
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue)
  const lastUpdated = useRef<number>(Date.now())
  const pendingValue = useRef<T | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const setThrottledValue = (newValue: T): void => {
    if (shouldUpdateImmediately(value, newValue)) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        lastUpdated.current = Date.now()
        timeoutRef.current = null
      }
      setValue(newValue)
      return
    }
    const now = Date.now()
    const timeSinceLastUpdate = now - lastUpdated.current
    
    // Clear any existing timeout to reset with the new latest value
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (timeSinceLastUpdate >= delay) {
      setValue(newValue)
      lastUpdated.current = now
    } else {
      pendingValue.current = newValue
      // Set a timeout to update the value after the remaining delay
      timeoutRef.current = setTimeout(() => {
        setValue(pendingValue.current as T)
        lastUpdated.current = Date.now()
        timeoutRef.current = null
      }, delay - timeSinceLastUpdate)
    }
  }

  // Ensure to clean up timeout if the component is unmounted or delay changes
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [delay])

  return [value, setThrottledValue]
}

export default useThrottledState