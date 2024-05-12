import React, { FC, useEffect, useState } from 'react'
import bluebird from 'bluebird'
import { TypographyProps } from '@mui/material/Typography'
import SerifTypography from '../widgets/SerifTypography'

const TypewriterText: FC<TypographyProps & {
  text: string,
  // how many milliseonds to wait before starting
  initialDelay?: number,
  // min number milliseconds to wait between each character
  minSpeed?: number,
  // max number milliseconds we add to minSpeed (between 0 and 100% will be added)
  randomSpeed?: number,
  onComplete?: () => void,
}> = ({
  text,
  initialDelay = 0,
  minSpeed = 15,
  randomSpeed = 45,
  onComplete = () => {},
  ...props
}) => {
  const [ currentText, setCurrentText ] = useState('')

  useEffect(() => {
    let active = true
    const runText = async () => {
      let currentIndex = 0
      setCurrentText('')
      await bluebird.delay(initialDelay)
      while(active) {
        currentIndex++
        const newText = text.slice(0, currentIndex)
        setCurrentText(newText)
        if(newText.length >= text.length) {
          onComplete()
          active = false
          break
        }
        await bluebird.delay(minSpeed + (Math.random() * randomSpeed))
      }
    }
    runText()
    return () => {
      active = false
    }
  }, [
    text,
  ])

  return (
    <SerifTypography {...props}>
      { currentText }
    </SerifTypography>
  )
}

export default TypewriterText
