import React, { FC, useEffect, useState } from 'react'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { animated, useSpring, easings } from '@react-spring/web'

import Row from '../widgets/Row'
import Cell from '../widgets/Cell'
import SerifTypography from '../widgets/SerifTypography'

import {
  getResponsiveFontSize,
} from '../../styles'

const AnimatedBox = animated(Box)

const MultipleChoice: FC<{
  options: string[],
  selectedOption?: string,
  rowSx?: SxProps,
  cellSx?: SxProps,
  boxSx?: SxProps,
  animated?: boolean,
  onChoose: (option: string) => void,
}> = ({
  options,
  selectedOption = '',
  rowSx = {},
  cellSx = {},
  boxSx = {},
  animated = true,
  onChoose,
}) => {

  const from = {
    opacity: 1,
    transform: 'scale(100%)',
  }

  const to = {
    opacity: 1,
    transform: 'scale(100%)',
  }

  if(animated) {
    from.opacity = 0
    from.transform = 'scale(0%)'
    to.opacity = 1
    to.transform = 'scale(100%)'
  }

  const props = useSpring({
    from,
    to,
    config: {
      duration: 500,
      mass: 3,
      tension: 120,
      friction: 14,
      easing: easings.easeInOutBack,
    }
  })

  return (
    <Row
      sx={rowSx}
    >
      {
        options.map((option, index) => {
          const isSelected = option == selectedOption
          return (
            <Cell
              key={index}
              sx={cellSx}
            >
              <AnimatedBox
                style={props}
                sx={{
                  border: '1px solid #000',
                  backgroundColor: isSelected ? 'secondary.main' : 'transparent',
                  color: isSelected ? '#fff' : '#000',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'secondary.main',
                    borderColor: 'secondary.main',
                    backgroundColor: 'transparent',
                  },
                  ...boxSx,
                }}
                onClick={ () => onChoose(option) }
              >
                <SerifTypography
                  sx={{
                    fontSize: getResponsiveFontSize(40),
                  }}
                >
                  { option }
                </SerifTypography>
              </AnimatedBox>
            </Cell>
          )
        })
      }
    </Row>
  )
}

export default MultipleChoice
