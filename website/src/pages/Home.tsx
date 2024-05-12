import React, { FC, Fragment } from 'react'

import Box from '@mui/material/Box'
import TypewriterText from '../components/articles/TypewriterText'
import MultipleChoice from '../components/articles/MultipleChoice'

import {
  getResponsiveSxAmount,
} from '../styles'

import useSequence from '../hooks/useSequence'

const Home: FC = () => {
  const homeSequence = useSequence({
    steps: 4,
  })

  return (
    <Box
      sx={{
        pt: getResponsiveSxAmount(6),
      }}
    >
      {
        homeSequence.step >= 0 && (
          <TypewriterText
            variant="h1"
            text="Do you think politics is working?"
            onComplete={ () => homeSequence.progress() }
          />
        )
      }

      {
        homeSequence.step >= 1 && (
          <MultipleChoice
            options={[
              'Yes',
              'No',
            ]}
            rowSx={{
              mt: 4,
            }}
            cellSx={{
              mr: 4,
            }}
            onChoose={(option) => {
              console.log(option)
              homeSequence.progress()
            }}
          />
        )
      }

      {
        homeSequence.step >= 2 && (
          <TypewriterText
            variant="h1"
            text="Do you care?"
            sx={{mt: 6}}
            onComplete={ () => homeSequence.progress() }
          />
        )
      }

      {
        homeSequence.step >= 3 && (
          <MultipleChoice
            options={[
              'Yes',
              'No',
            ]}
            rowSx={{
              mt: 4,
            }}
            cellSx={{
              mr: 4,
            }}
            onChoose={(option) => {
              console.log(option)
              homeSequence.progress()
            }}
          />
        )
      }
    </Box>
  )
}

export default Home