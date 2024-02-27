import React, { FC } from 'react'

import Box from '@mui/material/Box'
import SerifTypography from '../components/widgets/SerifTypography'
import Quote from '../components/articles/Quote'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'

import { getResponsiveSxAmount } from '../styles'

const Home: FC = () => {
  return (
    <Box>
      <HeadlineStrapline
        headline="Trust in politics is broken."
        strapline="Politicans say one thing and then do another."
      />
      <HeadlineStrapline
        headline={ <>Our political system was invented <strong>before electricity.</strong></> }
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
          mt: getResponsiveSxAmount(2),
          mb: getResponsiveSxAmount(3),
        }}
      >
        I know that I know nothing
      </Quote>
      <SerifTypography variant="h5" gutterBottom>
        We are not experts in politics, economics, or any of the other fields that we are discussing.
      </SerifTypography>
      <SerifTypography variant="h5" gutterBottom sx={{mb: getResponsiveSxAmount(6)}}>
        At the same time:
      </SerifTypography>
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