import React, { FC } from 'react'
import { Link } from 'react-router5'
import Box from '@mui/material/Box'
import theme from '../../theme'

const InternalLink: any = (props: any) => {
  return (
    <Box sx={{
      '& a': {
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.primary.light,
        },
        '&:focus': {
          color: theme.palette.primary.main,
        },
        '&:active': {
          color: theme.palette.primary.light,
        },
        '&:visited': {
          color: theme.palette.primary.main,
        },
      }
    }}>
      <Link {...props} />
    </Box>
  )
}

export default InternalLink
