import React, { FC } from 'react'
import Box from '@mui/material/Box'

const ExternalLink: FC<{
  href: string,
  underlined?: boolean,
}> = ({
  href,
  underlined = false,
  children,
}) => {
  return (
    <Box component="a" href={ href } target="_blank" sx={{
      textDecoration: underlined ? 'underline' : 'none',
    }}>
      { children }
    </Box>
  )
}

export default ExternalLink
