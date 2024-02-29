import React, { FC, useMemo } from 'react'
import { Breakpoint } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'

import useIsLargeScreen from '../../hooks/useIsLargeScreen'

const Cell: FC<{
  flexGrow?: number,
  grow?: boolean,
  breakpoint?: Breakpoint,
  sx?: SxProps,
}> = ({
  flexGrow = 0,
  grow = false,
  breakpoint,
  sx = {},
  children,
}) => {
  const isLarge = useIsLargeScreen()

  const useFlexGrow = useMemo(() => {
    const useSx = sx as any
    if(useSx.flexGrow !== undefined) return useSx.flexGrow
    if(grow) return 1
    return flexGrow
  }, [
    flexGrow,
    grow,
    sx,
  ])

  // this is when the screen is small and the user has given a breakpoint
  if(breakpoint && !isLarge) {
    return (
      <Box
        sx={Object.assign({}, sx, {
          flexBasis: '100%',
        })}
      >
        { children }
      </Box>
    )
  }

  return (
    <Box
      sx={Object.assign({}, sx, {
        flexGrow: useFlexGrow,
      })}
    >
      { children }
    </Box>
  )
}

export default Cell
