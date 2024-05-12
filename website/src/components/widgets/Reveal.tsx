import React, { FC } from 'react'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { animated, useSpring, easings } from '@react-spring/web'

const AnimatedBox = animated(Box)

const Reveal: FC<{
  sx?: SxProps,
  opacity?: boolean,
  scale?: boolean,
  duration?: number,
  mass?: number,
  tension?: number,
  friction?: number,
  easing?: (t: number) => number,
}> = ({
  sx = {},
  opacity = false,
  scale = false,
  duration = 500,
  mass = 3,
  tension = 120,
  friction = 14,
  easing = easings.easeInOutBack,
  children,
}) => {

  const from = {
    opacity: 1,
    transform: 'scale(100%)'
  }

  const to = {
    opacity: 1,
    transform: 'scale(100%)'
  }

  if(opacity) {
    from.opacity = 0
  }

  if(scale) {
    from.transform = 'scale(0%)'
  }

  const props = useSpring({
    from,
    to,
    config: {
      duration,
      mass,
      tension,
      friction,
      easing,
    }
  })

  return (
    <AnimatedBox
      style={props}
      sx={sx}
    >
      { children }
    </AnimatedBox>
  )
}

export default Reveal
