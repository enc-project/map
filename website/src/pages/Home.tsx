import React, { FC } from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Quote from '../components/articles/Quote'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import ArticleRow from '../components/articles/ArticleRow'
import ExternalLink from '../components/articles/ExternalLink'

import { getResponsiveSxAmount } from '../styles'

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
      <ArticleRow
        title="red, green OR blue?"
        description="We have to vote for a single party that collapses our entire political viewpoint into a single colour.  Perhaps we could use technology to vote for panels for experts across lots of topics instead?"
        image="/img/article-headers/red-green-blue.png"
      />
      <Divider />
      <ArticleRow
        title="It's sooo slow..."
        description="We only get to vote on a party once every 5 years.  Amazon deploys new code every 11.7 seconds.  Perhaps we could use technology to vote on things more often?"
        image="/img/article-headers/election-cycles.jpg"
      />
      <Divider />
      <ArticleRow
        title="Media manipulation"
        description="Billionaire funded media companies use algorithms to manipulate us into clicking on things.  Perhaps we could use technology to make it easier to see the truth?"
        image="/img/article-headers/media-manipulation.jpg"
      />
      <Divider />
      <ArticleRow
        title="Perspectives matter"
        description="Debates are becoming increasingly polorised and social media echo chambers do not help.  Perhaps we could use technology to see things from other people's perspectives?"
        image="/img/article-headers/perspective-generator.jpg"
      />
      <Divider />
      <ArticleRow
        title="Data Driven Decisions"
        description="Politicians make populist decisions to get re-elected, they sell these decisions using emotional rhetoric.  Perhaps we could use the scientific method to make decisions using data and tests?"
        image="/img/article-headers/data-driven-decisions.jpg"
      />
    </Box>
  )
}

export default Home