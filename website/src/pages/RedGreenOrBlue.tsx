import React, { FC } from 'react'

import Box from '@mui/material/Box'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'

const RedGreenOrBlue: FC = () => {
  return (
    <Box>
      <HeadlineStrapline
        headline="red, green OR blue?"
      />
    </Box>
  )
}

export default RedGreenOrBlue