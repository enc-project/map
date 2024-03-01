import React, { FC, useMemo, useRef } from 'react'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'

import useScrollPercentage from '../hooks/useScrollPercentage'

import { getArticle } from '../data'

const Chunk: FC = () => {
  return (
    <>
      <Paragraph>
        Elections have become personality contests.  We are voting for people, not solutions.
      </Paragraph>
      <Paragraph>
        We are forced to reduce our complex political views into a single colour; voting red, green OR blue and then hoping that people do what they said they would do.
      </Paragraph>
      <Paragraph>
        When we vote for our local MP in a general election, it feels like we are voting for a person to make all the decisions for us.
      </Paragraph>
      <Paragraph>
        In reality, because of the party whip, the actual person you voted for would be in "rebellion" if they did not vote how the party wanted them to.
      </Paragraph>
      <Paragraph>
        This leaves the leaders of political parties in a powerful position, the decision making comes from the top and all MP's are supposed to "get in line".
      </Paragraph>
      <Paragraph>
        If we could perhaps pay to have <a href="https://www.bbc.co.uk/news/uk-politics-43448559" target="_blank">a game of tennis</a> with the leader of a party, we could have a dis-proportionate influence on the actual decisions made.
      </Paragraph>
      <Paragraph>
        Elections have become personality contests.  We are voting for people, not solutions.
      </Paragraph>
      <Paragraph>
        We are forced to reduce our complex political views into a single colour; voting red, green OR blue and then hoping that people do what they said they would do.
      </Paragraph>
      <Paragraph>
        When we vote for our local MP in a general election, it feels like we are voting for a person to make all the decisions for us.
      </Paragraph>
      <Paragraph>
        In reality, because of the party whip, the actual person you voted for would be in "rebellion" if they did not vote how the party wanted them to.
      </Paragraph>
      <Paragraph>
        This leaves the leaders of political parties in a powerful position, the decision making comes from the top and all MP's are supposed to "get in line".
      </Paragraph>
      <Paragraph>
        If we could perhaps pay to have <a href="https://www.bbc.co.uk/news/uk-politics-43448559" target="_blank">a game of tennis</a> with the leader of a party, we could have a dis-proportionate influence on the actual decisions made.
      </Paragraph>
      <Paragraph>
        Elections have become personality contests.  We are voting for people, not solutions.
      </Paragraph>
      <Paragraph>
        We are forced to reduce our complex political views into a single colour; voting red, green OR blue and then hoping that people do what they said they would do.
      </Paragraph>
      <Paragraph>
        When we vote for our local MP in a general election, it feels like we are voting for a person to make all the decisions for us.
      </Paragraph>
      <Paragraph>
        In reality, because of the party whip, the actual person you voted for would be in "rebellion" if they did not vote how the party wanted them to.
      </Paragraph>
      <Paragraph>
        This leaves the leaders of political parties in a powerful position, the decision making comes from the top and all MP's are supposed to "get in line".
      </Paragraph>
      <Paragraph>
        If we could perhaps pay to have <a href="https://www.bbc.co.uk/news/uk-politics-43448559" target="_blank">a game of tennis</a> with the leader of a party, we could have a dis-proportionate influence on the actual decisions made.
      </Paragraph>
      <Paragraph>
        Elections have become personality contests.  We are voting for people, not solutions.
      </Paragraph>
      <Paragraph>
        We are forced to reduce our complex political views into a single colour; voting red, green OR blue and then hoping that people do what they said they would do.
      </Paragraph>
      <Paragraph>
        When we vote for our local MP in a general election, it feels like we are voting for a person to make all the decisions for us.
      </Paragraph>
      <Paragraph>
        In reality, because of the party whip, the actual person you voted for would be in "rebellion" if they did not vote how the party wanted them to.
      </Paragraph>
      <Paragraph>
        This leaves the leaders of political parties in a powerful position, the decision making comes from the top and all MP's are supposed to "get in line".
      </Paragraph>
      <Paragraph>
        If we could perhaps pay to have <a href="https://www.bbc.co.uk/news/uk-politics-43448559" target="_blank">a game of tennis</a> with the leader of a party, we could have a dis-proportionate influence on the actual decisions made.
      </Paragraph>
    </>
  )
}

const RedGreenOrBlue: FC = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null)
  const animationContentRef = useRef<HTMLDivElement>(null)
  const article = useMemo(() => getArticle('red-green-or-blue'), [])
  const scrollPercentage = useScrollPercentage(animationContainerRef, animationContentRef, 64)
  const animationContentSX = useMemo<SxProps>(() => {
    if (!animationContainerRef.current) return {}
    if(scrollPercentage > 0 && scrollPercentage < 100) {
      return {
        position: 'fixed',
        top: '64px',
        left: animationContainerRef.current.offsetLeft,
        width: animationContainerRef.current.offsetWidth,
      }
    } else if(scrollPercentage >= 100) {
      return {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
      }
    } else {
      return {
        position: 'relative',
      }
    }
  }, [
    animationContainerRef.current,
    scrollPercentage,
  ])

  return (
    <Box>
      <ArticleHeader
        article={ article }
      />
      <Paragraph>
        Elections have become personality contests.  We are voting for people, not solutions.
      </Paragraph>
      <Paragraph>
        We are forced to reduce our complex political views into a single colour; voting red, green OR blue and then hoping that people do what they said they would do.
      </Paragraph>
      <Paragraph>
        When we vote for our local MP in a general election, it feels like we are voting for a person to make all the decisions for us.
      </Paragraph>
      <Paragraph>
        In reality, because of the party whip, the actual person you voted for would be in "rebellion" if they did not vote how the party wanted them to.
      </Paragraph>
      <Paragraph>
        This leaves the leaders of political parties in a powerful position, the decision making comes from the top and all MP's are supposed to "get in line".
      </Paragraph>
      <Paragraph>
        If we could perhaps pay to have <a href="https://www.bbc.co.uk/news/uk-politics-28158479" target="_blank">a game of tennis</a> with the leader of a party, we could have a dis-proportionate influence on the actual decisions made.
      </Paragraph>

      <Chunk />

      <Box
        ref={ animationContainerRef }
        sx={{
          height: '3000px',
          position: 'relative',
          border: '1px solid red',
        }}
      >
        <Box
          ref={ animationContentRef }
          sx={{
            backgroundColor: 'red',
            height: '100px',
            fontSize: '3em',
            ...animationContentSX
          }}
        >
          { Math.round(scrollPercentage) }%
        </Box>
        
      </Box>

      <Chunk />
      <Chunk />
      <Chunk />
      <Chunk />
      <Chunk />
      <Chunk />
      
      
    </Box>
  )
}

export default RedGreenOrBlue