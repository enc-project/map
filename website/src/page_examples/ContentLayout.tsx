import React, { FC, Fragment } from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Quote from '../components/articles/Quote'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import ArticleRow from '../components/articles/ArticleRow'
import ExternalLink from '../components/articles/ExternalLink'

import { getResponsiveSxAmount } from '../styles'
import theme from '../theme'
import { ARTICLES } from '../data'

const ContentLayoutExample: FC = () => {
  return (
    <Box>
      <HeadlineStrapline
        headline="Trust in politics is eroding."
        strapline="Politicans say one thing and then do another."
        headlineVariant="h1"
        straplineVariant="h6"
      />
      <HeadlineStrapline
        headline={<>
          Our <ExternalLink color={theme.palette.primary.main} href="https://en.wikipedia.org/wiki/1708_British_general_election">political system</ExternalLink> was invented <ExternalLink color={theme.palette.primary.main} href="https://en.wikipedia.org/wiki/Electricity"><strong>before electricity.</strong></ExternalLink>
        </> }
        strapline="Now we have the Internet, blockchains and generative AI."
        headlineVariant="h3"
        straplineVariant="h6"
      />
      <HeadlineStrapline
        strapline={<>
          We <ExternalLink color={theme.palette.primary.main} href="https://en.wikipedia.org/wiki/I_know_that_I_know_nothing">don't presume</ExternalLink> to know the answers; at the same time:
        </> }
        straplineVariant="h5"
        mt={ 3 }
        mb={ 3 }
      />
      <Quote
        author="[source]"
        url="https://meta.wikimedia.org/wiki/Cunningham%27s_Law"
        sx={{
          mt: getResponsiveSxAmount(2),
          ml: getResponsiveSxAmount(4),
          mb: getResponsiveSxAmount(2),
        }}
      >
        The best way to get the right answer on the internet is not to ask a question; it's to post the wrong answer.
      </Quote>
      <HeadlineStrapline
        strapline="Here are some wrong answers to get the conversation started:"
        straplineVariant="h6"
        mt={ 1 }
        mb={ 6 }
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

export default ContentLayoutExample