import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'

import ExternalLink from './ExternalLink'

import {
  getResponsiveSxAmount,
  getResponsiveFontSize,
} from '../../styles'

const Quote: FC<{
  author: string,
  url: string,
  sx?: SxProps,
  padding?: number,
}> = ({
  author,
  url,
  sx = {},
  padding = 2,
  children,
}) => {
  return (
    <Box
      sx={ sx }
    >
      <Box
        sx={{
          borderLeft: '5px solid #6666aa',
          paddingLeft: 2,
          p: getResponsiveSxAmount(padding),
          ml: 0,
          mr: 0,
          mt: getResponsiveSxAmount(4),
          mb: getResponsiveSxAmount(2),
          fontStyle: 'italic',
          backgroundColor: '#f4f4ff'
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: getResponsiveFontSize(24),
            color: '#333',
          }}
        >
          {children}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: 'right',
        }}
      >
        <ExternalLink href={ url } underlined>
          <Typography variant="caption">
            { author }
          </Typography>
        </ExternalLink>
      </Box>
    </Box>
  )
}

export default Quote
