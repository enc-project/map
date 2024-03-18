import React, { FC } from 'react'
import Box from '@mui/material/Box'

const ExternalLink: FC<{
  href: string,
  color?: string,
  underlined?: boolean,
}> = ({
  href,
  underlined = false,
  color,
  children,
}) => {
  return (
    <Box component="a" href={ href } target="_blank" sx={{
      textDecoration: underlined ? 'underline' : 'none',
      color: color ? color : 'inherit',
      '&:visited': {
        color: color ? color : 'inherit',
      },
      '&:hover': {
        color: color ? color : 'inherit',
      },
      '&:focus': {
        color: color ? color : 'inherit',
      },
      '&:active': {
        color: color ? color : 'inherit',
      },
    }}>
      { children }
    </Box>
  )
}

export default ExternalLink
