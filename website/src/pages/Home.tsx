import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'

import TypewriterText from '../components/articles/TypewriterText'
import MultipleChoice from '../components/articles/MultipleChoice'
import AllPartiesWindow from '../components/content/AllPartiesWindow'
import NetflixWindow from '../components/content/NetflixWindow'

import {
  getResponsiveSxAmount,
} from '../styles'

import useSequence from '../hooks/useSequence'

const Home: FC = () => {

  const [ isItWorkingOption, setIsItWorkingOption ] = useState('')
  const [ showAllPartiesWindow, setShowAllPartiesWindow ] = useState(false)

  const [ doYouCareOption, setDoYouCareOption ] = useState('')
  const [ showNetflixWindow, setShowNetflixWindow ] = useState(false)

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
            text="Do you think UK politics is working?"
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
            selectedOption={isItWorkingOption}
            rowSx={{
              mt: getResponsiveSxAmount(4),
            }}
            cellSx={{
              mr: getResponsiveSxAmount(4),
            }}
            onChoose={(option) => {
              setIsItWorkingOption(option)
              if(option === 'No') {
                homeSequence.progress()
              } else {
                setShowAllPartiesWindow(true)
              }
            }}
          />
        )
      }

      {
        homeSequence.step >= 2 && (
          <TypewriterText
            variant="h1"
            text="Do you care?"
            sx={{mt: getResponsiveSxAmount(6)}}
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
            selectedOption={doYouCareOption}
            rowSx={{
              mt: getResponsiveSxAmount(4),
            }}
            cellSx={{
              mr: getResponsiveSxAmount(4),
            }}
            onChoose={(option) => {
              setDoYouCareOption(option)
              if(option === 'Yes') {
                homeSequence.progress()
              } else {
                setShowNetflixWindow(true)
              }
            }}
          />
        )
      }

      {
        showAllPartiesWindow && (
          <AllPartiesWindow
            onCancel={ () => setShowAllPartiesWindow(false) }
          />
        )
      }

      {
        showNetflixWindow && (
          <NetflixWindow
            onCancel={ () => setShowNetflixWindow(false) }
          />
        )
      }
    </Box>
  )
}

export default Home