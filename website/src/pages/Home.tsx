import React, { FC, Fragment } from 'react'

import Box from '@mui/material/Box'
import TypewriterText from '../components/articles/TypewriterText'
import MultipleChoice from '../components/articles/MultipleChoice'

import {
  getResponsiveSxAmount,
} from '../styles'

const Home: FC = () => {
  return (
    <Box
      sx={{
        pt: getResponsiveSxAmount(6),
      }}
    >
      <TypewriterText
        variant="h1"
        text="Do you think politics is working?"
      />
      <MultipleChoice
        options={[
          'Yes',
          'No',
        ]}
        onChoose={(option) => {
          console.log(option)
        }}
      />
    </Box>
  )
}

export default Home