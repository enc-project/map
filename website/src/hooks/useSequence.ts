import { useState, useCallback } from 'react'

const useSequence = ({
  steps,
}: {
  steps: number,
}) => {
  const [ step, setStep ] = useState(0)

  const progress = useCallback(() => {
    console.log('--------------------------------------------')
    console.log('HERE')
    setStep(s => {
      const nextStep = s + 1
      return nextStep >= steps ? steps : nextStep
    })
  }, [
    setStep,
  ])

  return {
    step,
    setStep,
    progress,
  }
}

export default useSequence
