import React, { FC, Fragment } from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Quote from '../components/articles/Quote'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import ArticleRow from '../components/articles/ArticleRow'
import ExternalLink from '../components/articles/ExternalLink'

import { getResponsiveSxAmount } from '../styles'
import { ARTICLES } from '../data'

const Home: FC = () => {
  return (
    <Box>
      <HeadlineStrapline
        headline="Trust in politics is eroding."
        strapline="Politicans seem to say one thing but then do another."
      />
      <HeadlineStrapline
        headline={<>
          Our <ExternalLink href="https://en.wikipedia.org/wiki/1708_British_general_election">political system</ExternalLink> was invented <ExternalLink href="https://en.wikipedia.org/wiki/Electricity"><strong>before electricity.</strong></ExternalLink>
        </> }
        strapline="Now we have the Internet, blockchains and generative AI."
      />
      <HeadlineStrapline
        strapline="We can change this, if enough of us want to."
      />
      <Quote
        author="Plato"
        url="https://en.wikipedia.org/wiki/I_know_that_I_know_nothing"
        sx={{
          ml: getResponsiveSxAmount(4),
        }}
      >
        I know that I know nothing
      </Quote>
      <HeadlineStrapline
        strapline="We don't presume to tell you how to reform the political system."
        mt={ 3 }
        mb={ 3 }
      />
      <HeadlineStrapline
        strapline="At the same time:"
        mt={ 3 }
      />
      <Quote
        author="Cunningham"
        url="https://meta.wikimedia.org/wiki/Cunningham%27s_Law)"
        sx={{
          ml: getResponsiveSxAmount(4),
          mb: getResponsiveSxAmount(3),
        }}
      >
        To get the right answer on the Internet, first put the wrong answer
      </Quote>
      <HeadlineStrapline
        strapline="So, here are some wrong answers to get the conversation started."
        mt={ 3 }
        mb={ 3 }
      />
      <HeadlineStrapline
        strapline="If you have opinions, we implore you to tell your friends, your family, your colleagues."
        mt={ 3 }
        mb={ 3 }
      />
      <HeadlineStrapline
        strapline="We are running out of time."
        mt={ 3 }
      />
      <Divider />
      {
        ARTICLES.map((article, index) => (
          <Box key={ index }>
            <ArticleRow
              key={ index }
              article={ article }
            />
            {
              index < ARTICLES.length - 1 && (
                <Divider />
              )
            }
          </Box>
        ))
      }
    </Box>
  )
}

export default Home