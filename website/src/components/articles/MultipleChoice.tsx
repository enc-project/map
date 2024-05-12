import React, { FC, useEffect, useState } from 'react'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { animated, useSpring, easings } from '@react-spring/web'

import Row from '../widgets/Row'
import Cell from '../widgets/Cell'

const AnimatedBox = animated(Box)

const MultipleChoice: FC<{
  options: string[],
  rowSx?: SxProps,
  cellSx?: SxProps,
  boxSx?: SxProps,
  onChoose: (option: string) => void,
}> = ({
  options,
  rowSx = {},
  cellSx = {},
  boxSx = {},
  onChoose,
}) => {

  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0%)' },
    to: { opacity: 1, transform: 'scale(100%)' },
    config: {
      duration: 1000,
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
        options.map((option, index) => (
          <Cell
            key={index}
            sx={cellSx}
          >
            <AnimatedBox
              style={props}
              sx={{
                border: '1px solid #000',
                borderRadius: '5px',
                padding: '10px',
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.main',
                },
                ...boxSx,
              }}
            >
              { option }
            </AnimatedBox>
          </Cell>
        ))
      }
    </Row>
  )
}

export default MultipleChoice
