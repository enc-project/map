import { useState, useCallback, useEffect } from 'react'
import bluebird from 'bluebird'
const useSequence = ({
  id,
  steps,
  remember = false,
}: {
  id: string,
  steps: number,
  remember?: boolean,
}) => {
  const [ step, setStep ] = useState(remember ? parseInt(localStorage.getItem(`sequence-${id}`) || '0') : 0)

  const progress = useCallback(() => {
    setStep(s => {
      const nextStep = s + 1
      return nextStep >= steps ? steps : nextStep
    })
  }, [
    setStep,
  ])

  const reset = useCallback(async () => {
    setStep(-1)
    await bluebird.delay(100)
    setStep(0)
  }, [
    setStep,
  ])

  useEffect(() => {
    if(remember) {
      localStorage.setItem(`sequence-${id}`, step.toString())
    }
  }, [
    step,
  ])

  return {
    step,
    setStep,
    progress,
    reset,
  }
}

export default useSequence
