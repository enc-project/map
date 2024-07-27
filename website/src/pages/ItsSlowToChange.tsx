import React, { FC, useMemo, useRef, useEffect, useState } from 'react'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'
import useScrollPercentage from '../hooks/useScrollPercentage'
import { getArticle } from '../data'
import { getProject, types } from '@theatre/core'
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import testAnimation from '../../assets/lottie/test.json'

if (process.env.NODE_ENV === 'development') {
  import('@theatre/studio').then((studio) => {
    // studio.default.initialize()
    
    // Add custom styles to adjust Theatre.js controls
    const style = document.createElement('style')
    style.textContent = `
      .theatre-studio-root {
        top: 80px !important; /* Adjust this value to match your AppBar height */
        z-index: 1300 !important; /* Set z-index lower than AppBar but higher than other content */
      }
      .theatre-studio-root .theatre-studio-ui-panel-container {
        max-height: calc(100vh - 80px) !important; /* Adjust the 64px to match your AppBar height */
      }
    `
    document.head.appendChild(style)
  })
}

const paragraphs = [
  "Elections have become personality contests. We are voting for people, not solutions.",
  "We are forced to reduce our complex political views into a single colour; voting red, green OR blue and then hoping that people do what they said they would do.",
  "When we vote for our local MP in a general election, it feels like we are voting for a person to make all the decisions for us.",
  "In reality, because of the party whip, the actual person you voted for would be in 'rebellion' if they did not vote how the party wanted them to.",
  "This leaves the leaders of political parties in a powerful position, the decision making comes from the top and all MP's are supposed to 'get in line'.",
  "If we could perhaps pay to have a game of tennis with the leader of a party, we could have a dis-proportionate influence on the actual decisions made."
]

const animationContainerHeight = 8000 // Keep the container height

const animationBoxHeight = animationContainerHeight * 0.1 // Adjust the box height

const Chunk: FC = () => (
  <>
    {paragraphs.map((text, index) => (
      <Paragraph key={index}>{text}</Paragraph>
    ))}
  </>
)

const AnimationContainer: FC<{
  id: string;
  animationData: any;
  containerHeight: number;
}> = ({ id, animationData, containerHeight }) => {
  const animationContainerRef = useRef<HTMLDivElement>(null)
  const animationContentRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const [scale, setScale] = useState<number>(1)
  const scrollPercentage = useScrollPercentage(id, animationContainerRef, animationContentRef, containerHeight * 0.1)
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const theatreProject = useMemo(() => getProject(`ScrollAnimation_${id}`), [id])
  const theatreSheet = useMemo(() => theatreProject.sheet('CircleAnimation'), [theatreProject])
  const circleObj = useMemo(() => theatreSheet.object('Circle', {
    x: types.number(0, { range: [0, 100] }),
    y: types.number(0, { range: [0, 100] }),
    scale: types.number(1, { range: [0.5, 2] }),
  }, { reconfigure: true }), [theatreSheet])

  const totalFrames = useMemo(() => animationData.op, [animationData])

  useEffect(() => {
    console.log(`Scroll percentage: ${scrollPercentage.toFixed(3)}%`)
    theatreSheet.sequence.position = scrollPercentage / 100

    circleObj.initialValue = { 
      x: scrollPercentage,
      scale: 1 + (scrollPercentage / 100) // Scale from 1 to 2 (100% bigger)
    }

    if (lottieRef.current) {
      lottieRef.current.setSpeed(0) // Set speed to 0 to prevent auto-play
      if (lottieRef.current.getDuration) {
        const duration = lottieRef.current.getDuration()
        if (duration) {
          const frame = Math.floor((scrollPercentage / 100) * (totalFrames - 1))
          console.log(`Current frame: ${frame}, Total frames: ${totalFrames}`)
          lottieRef.current.goToAndStop(frame, true)
        }
      }
    }
  }, [theatreSheet, scrollPercentage, circleObj, totalFrames])

  useEffect(() => {
    if (animationContainerRef.current) {
      setContainerWidth(animationContainerRef.current.offsetWidth)
    }
  }, [scrollPercentage])

  useEffect(() => {
    circleObj.onValuesChange((values) => {
      if (animationContentRef.current && animationContainerRef.current) {
        const containerWidth = animationContainerRef.current.offsetWidth
        const newLeft = (values.x / 100) * containerWidth
        animationContentRef.current.style.left = `${Math.min(newLeft, containerWidth - 50)}px` // Ensure the ball stays within bounds
        setScale(values.scale) // Update scale state
      }
    })
  }, [circleObj, animationContainerRef])

  const animationContainerStyles: SxProps = {
    height: `${containerHeight}px`, // Use the full container height
    position: 'relative',
  }

  const animationBoxStyles: SxProps = {
    position: 'sticky',
    top: '100px', // Stick to the top of the viewport
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: `${animationBoxHeight}px`, // Adjusted box height
    backgroundColor: 'lightgray',
    zIndex: 1000,
  }

  const animationCircleStyles: SxProps = {
    position: 'absolute',
    top: '25px', // Center the ball vertically within the smaller box
    left: '0',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'red',
    transition: 'left 0.4s ease-in-out, transform 0.4s ease-in-out', // Reduced transition duration for smoother animation
    transform: `scale(${scale})` // Apply scale transformation from state
  }

  return (
    <Box id={`animation-container-${id}`} ref={animationContainerRef} sx={animationContainerStyles}>
      <Box id={`animation-box-${id}`} sx={animationBoxStyles}>
        <Box id={`animation-circle-${id}`} ref={animationContentRef} sx={animationCircleStyles} />
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          style={{ 
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            top: 0, 
            left: 0 
          }}
        />
      </Box>
    </Box>
  )
}

export default () => {
  const article = useMemo(() => getArticle('red-green-or-blue'), [])

  return (
    <Box>
      <ArticleHeader article={article} />

      <Chunk />
      <Chunk />
      <Chunk />

      <AnimationContainer id="animation1" animationData={testAnimation} containerHeight={8000} />

      <Chunk />
      <Chunk />
      <Chunk />

      <AnimationContainer id="animation2" animationData={testAnimation} containerHeight={6000} />

      <Chunk />
      <Chunk />
      <Chunk />
    </Box>
  )
}