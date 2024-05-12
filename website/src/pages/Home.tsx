import React, { FC, useState, useEffect } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import TypewriterText from '../components/articles/TypewriterText'
import MultipleChoice from '../components/articles/MultipleChoice'
import AllPartiesWindow from '../components/content/AllPartiesWindow'
import NetflixWindow from '../components/content/NetflixWindow'
import ArticleMenu from '../components/content/ArticleMenu'
import Reveal from '../components/widgets/Reveal'

import {
  getResponsiveSxAmount,
} from '../styles'

import { ARTICLES } from '../data'

import useSequence from '../hooks/useSequence'

const Home: FC = () => {

  const [ isItWorkingOption, setIsItWorkingOption ] = useState('')
  const [ showAllPartiesWindow, setShowAllPartiesWindow ] = useState(false)

  const [ doYouCareOption, setDoYouCareOption ] = useState('')
  const [ showNetflixWindow, setShowNetflixWindow ] = useState(false)

  const homeSequence = useSequence({
    id: 'home',
    steps: 6,
    remember: true,
  })

  useEffect(() => {
    if(homeSequence.step > 1) {
      setIsItWorkingOption('No')
    }

    if(homeSequence.step > 3) {
      setDoYouCareOption('Yes')
    }
  }, [])

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
            enabled={homeSequence.step === 0}
            onComplete={ () => {
              if(homeSequence.step != 0) return
              homeSequence.progress()
            }}
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
            animated={ homeSequence.step === 1 }
            onChoose={async (option) => {
              setIsItWorkingOption(option)
              setDoYouCareOption('')
              if(option === 'No') {
                if(homeSequence.step <= 1) {
                  homeSequence.setStep(2)
                }
              } else {
                homeSequence.setStep(1)
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
            enabled={homeSequence.step === 2}
            sx={{mt: getResponsiveSxAmount(6)}}
            onComplete={ () => {
              if(homeSequence.step != 2) return
              homeSequence.progress() 
            }}
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
            animated={ homeSequence.step === 3 }
            onChoose={(option) => {
              setDoYouCareOption(option)
              if(option === 'Yes') {
                homeSequence.setStep(4)
              } else {
                setShowNetflixWindow(true)
              }
            }}
          />
        )
      }

      {
        homeSequence.step >= 4 && (
          <TypewriterText
            variant="h1"
            text="What do you think is broken?"
            enabled={homeSequence.step === 4}
            sx={{mt: getResponsiveSxAmount(6), mb: getResponsiveSxAmount(2)}}
            onComplete={ () => {
              if(homeSequence.step != 4) return
              homeSequence.progress() 
            }}
          />
        )
      }

      {
        homeSequence.step >= 5 && (
          <>
            <ArticleMenu
          
            />
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Box
              sx={{
                textAlign: 'right',
                cursor: 'pointer',
              }}
              onClick={ () => {
                setIsItWorkingOption('')
                setDoYouCareOption('')
                homeSequence.reset()
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
              >
                reset
              </Typography>
            </Box>
          </>
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