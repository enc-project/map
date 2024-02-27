import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'

import {
  getResponsiveSxAmount,
  getResponsiveFontSize,
} from '../../styles'

const NewspaperQuote: FC<{
  author: string,
  url: string,
  sx?: SxProps,
}> = ({
  author,
  url,
  sx = {},
  children,
}) => {
  return (
    <Box
      sx={ sx }
    >
      <Box
        sx={{
          borderLeft: '5px solid #999',
          paddingLeft: 2,
          p: getResponsiveSxAmount(3),
          ml: 0,
          mr: 0,
          mt: 2,
          mb: 0.5,
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
        <a href={ url } target="_blank">
          <Typography variant="caption">
            { author }
          </Typography>
        </a>
      </Box>
    </Box>
  )
}

export default NewspaperQuote
