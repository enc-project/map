import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import TypewriterText from '../components/articles/TypewriterText'
import MultipleChoice from '../components/articles/MultipleChoice'
import Window from '../components/widgets/Window'

import {
  getResponsiveSxAmount,
} from '../styles'

import useSequence from '../hooks/useSequence'

const Home: FC = () => {

  const [ isItWorkingOption, setIsItWorkingOption ] = useState('')
  const [ showAllParties, setShowAllParties ] = useState(false)

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
                setShowAllParties(true)
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
            rowSx={{
              mt: getResponsiveSxAmount(4),
            }}
            cellSx={{
              mr: getResponsiveSxAmount(4),
            }}
            onChoose={(option) => {
              console.log(option)
              homeSequence.progress()
            }}
          />
        )
      }

      {
        showAllParties && (
          <Window
            open
            title={(
              <Box
                sx={{
                  pt: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TypewriterText
                  variant="h3"
                  text="Please continue, nothing to see here..."
                />
              </Box>
            )}
            size="xl"
            fullHeight
            onCancel={ () => setShowAllParties(false) }
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url('/img/all-parties.jpg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  width: '95%',
                  height: '95%',
                  border: '1px solid #000',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                }}
              >

              </Box>
            </Box>
            
          </Window>
        )
      }
    </Box>
  )
}

export default Home