import React, { FC } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import SerifTypography from '../components/widgets/SerifTypography'

const nums: number[] = []

for (let i=0; i<1000; i++) {
  nums.push(i)
}

const Home: FC = () => {
  return (
    <Box>
      <SerifTypography variant="h3">
        This is a bold headline
      </SerifTypography>
      {
        nums.map(num => {
          return (
            <Typography gutterBottom key={ num }>
              {num} this is the home page
            </Typography>
          )
        })
      }
    </Box>
  )
}

export default Home