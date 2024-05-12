import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Window from '../widgets/Window'
import TypewriterText from '../articles/TypewriterText'
import Reveal from '../widgets/Reveal'

const NetflixWindow: FC<{
  onCancel: () => void,
}> = ({
  onCancel,
}) => {
  const [ showImage, setShowImage ] = useState(false)
  return (
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
            text="Our apologies, please proceed to the correct website..."
            minSpeed={ 20 }
            randomSpeed={ 20 }
            onComplete={ () => {
              setShowImage(true)
            }}
          />
        </Box>
      )}
      size="xl"
      fullHeight
      onCancel={ onCancel }
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {
          showImage && (
            <Reveal
              opacity
              scale
              sx={{
                textAlign: 'center',
              }}
            >
              <Box
                component="a"
                href="https://www.netflix.com"
                target="_blank"
                sx={{
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/img/netflix-logo.png"
                  sx={{
                    width: '80%',
                  }}
                />
              </Box>
            </Reveal>
          )
        }
      </Box>
    </Window>
  )
}

export default NetflixWindow
