import React, { FC } from 'react'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const nums: number[] = []

for (let i=0; i<1000; i++) {
  nums.push(i)
}

const Home: FC = () => {
  return (
    <Container maxWidth="sm">
      {
        nums.map(num => {
          return (
            <Typography gutterBottom key={ num }>
              {num} this is the home page
            </Typography>
          )
        })
      }
    </Container>
  )
}

export default Home