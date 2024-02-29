import React, { FC, useMemo, useRef } from 'react'

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
  const animationRef = useRef<HTMLDivElement>(null)
  const article = useMemo(() => getArticle('red-green-or-blue'), [])
  const scrollPercentage = useScrollPercentage(animationRef)
  console.log('--------------------------------------------')
  console.log(scrollPercentage)
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
        If we could perhaps pay to have <a href="https://www.bbc.co.uk/news/uk-politics-43448559" target="_blank">a game of tennis</a> with the leader of a party, we could have a dis-proportionate influence on the actual decisions made.
      </Paragraph>

      <Chunk />
      <Chunk />
      <Chunk />
      <Chunk />
      <Chunk />
      <Chunk />

      <Box
        ref={ animationRef }
        sx={{
          backgroundColor: 'red',
          height: '3000px',
        }}
      >
        Here is the content
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