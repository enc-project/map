import React, { FC, useState } from 'react'
import bluebird from 'bluebird'
import Box from '@mui/material/Box'
import Window from '../widgets/Window'
import TypewriterText from '../articles/TypewriterText'
import Reveal from '../widgets/Reveal'
import { easings } from '@react-spring/web'

const AllPartiesWindow: FC<{
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
            text="Please carry on, nothing to see here..."
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
        }}
      >
        {
          showImage && (
            <Reveal
              opacity
              duration={ 600 }
              easing={ easings.easeOutQuad }
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
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
                  boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.5)',
                }}
              />
            </Reveal>
          )
        }
        
      </Box>
      
    </Window>
  )
}

export default AllPartiesWindow
