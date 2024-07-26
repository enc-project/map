import React, { FC, useMemo, useRef, useEffect, useState } from 'react'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'
import useScrollPercentage from '../hooks/useScrollPercentage'
import { getArticle } from '../data'
import { getProject, types } from '@theatre/core'

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

const animationContainerHeight = 4000 // Keep the container height

const animationBoxHeight = animationContainerHeight * 0.2 // Adjust the box height

const Chunk: FC = () => (
  <>
    {paragraphs.map((text, index) => (
      <Paragraph key={index}>{text}</Paragraph>
    ))}
  </>
)

const AnimationExample: FC = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null)
  const animationContentRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const [containerLeft, setContainerLeft] = useState<number | null>(null)
  const article = useMemo(() => getArticle('red-green-or-blue'), [])
  const scrollPercentage = useScrollPercentage(animationContainerRef, animationContentRef, animationBoxHeight)

  const theatreProject = useMemo(() => getProject('ScrollAnimation'), [])
  const theatreSheet = useMemo(() => theatreProject.sheet('CircleAnimation'), [theatreProject])
  const circleObj = useMemo(() => theatreSheet.object('Circle', {
    x: types.number(0, { range: [0, 100] }),
  }, { reconfigure: true }), [theatreSheet])

  useEffect(() => {
    circleObj.onValuesChange((values) => {
      if (animationContentRef.current && animationContainerRef.current) {
        const containerWidth = animationContainerRef.current.offsetWidth
        const newLeft = (values.x / 100) * containerWidth
        animationContentRef.current.style.left = `${Math.min(newLeft, containerWidth - 50)}px` // Ensure the ball stays within bounds
      }
    })
  }, [circleObj, animationContainerRef])

  useEffect(() => {
    console.log(`Scroll percentage: ${scrollPercentage.toFixed(2)}%`)
    theatreSheet.sequence.position = scrollPercentage / 100

    // Update the circle's x position based on scroll percentage
    circleObj.initialValue = { x: scrollPercentage } // Use initialValue to update the value
  }, [theatreSheet, scrollPercentage, circleObj])

  useEffect(() => {
    if (animationContainerRef.current) {
      setContainerWidth(animationContainerRef.current.offsetWidth)
      setContainerLeft(animationContainerRef.current.getBoundingClientRect().left)
    }
  }, [scrollPercentage])

  const animationContainerStyles: SxProps = {
    height: `${animationContainerHeight}px`, // Use the full container height
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
    transition: 'left 0.3s ease-in-out',
  }

  return (
    <Box>
      <ArticleHeader article={article} />

      <Chunk />
      <Chunk />
      <Chunk />

      <Box id="animation-container" ref={animationContainerRef} sx={animationContainerStyles}>
        <Box id="animation-box" sx={animationBoxStyles}>
          <Box id="animation-circle" ref={animationContentRef} sx={animationCircleStyles} />
        </Box>
      </Box>

      <Chunk />
      <Chunk />
      <Chunk />
    </Box>
  )
}

export default AnimationExample