import React, { FC } from 'react'

import Box from '@mui/material/Box'
import SerifTypography from '../components/widgets/SerifTypography'
import Quote from '../components/articles/Quote'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import ExternalLink from '../components/articles/ExternalLink'

import { getResponsiveSxAmount } from '../styles'

const Home: FC = () => {
  return (
    <Box>
      <HeadlineStrapline
        headline="Trust in politics is broken."
        strapline="Politicans say one thing and then do another."
      />
      <HeadlineStrapline
        headline={<>
          Our <ExternalLink href="https://en.wikipedia.org/wiki/1708_British_general_election">political system</ExternalLink> was invented <ExternalLink href="https://en.wikipedia.org/wiki/Electricity"><strong>before electricity.</strong></ExternalLink>
        </> }
        strapline="Now we have the Internet, blockchains and generative AI."
      />
      <HeadlineStrapline
        strapline={ <>We <strong>must</strong> change our approach.</> }
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
        strapline="We are not experts in politics, economics, or any of the other fields that we are discussing."
      />
      <HeadlineStrapline
        strapline="At the same time:"
      />
      <Quote
        author="Plato"
        url="https://en.wikipedia.org/wiki/I_know_that_I_know_nothing"
        sx={{
          ml: getResponsiveSxAmount(4),
          mb: getResponsiveSxAmount(3),
        }}
      >
        I know that I know nothing
      </Quote>
      
    </Box>
  )
}

export default Home