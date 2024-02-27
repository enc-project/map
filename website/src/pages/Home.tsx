import React, { FC } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SerifTypography from '../components/widgets/SerifTypography'
import NewspaperQuote from '../components/widgets/NewspaperQuote'

const Home: FC = () => {
  return (
    <Box>
      <SerifTypography variant="h3" gutterBottom sx={{mt: 6, mb: 3}}>
        Trust in politics is broken.
      </SerifTypography>
      <SerifTypography variant="h6" gutterBottom sx={{mb: 6}}>
        Politicans say one thing and then do another.
      </SerifTypography>
      <SerifTypography variant="h3" gutterBottom sx={{mt: 6, mb: 3}}>
        Our political system was invented <strong>before electricity.</strong>
      </SerifTypography>
      <SerifTypography variant="h6" gutterBottom sx={{mb: 6}}>
        Now we have the Internet and generative AI.
      </SerifTypography>
      <SerifTypography variant="h5" gutterBottom sx={{mb: 6}}>
        We can do better than this; but we <strong>must</strong> challenge our thinking.
      </SerifTypography>
      <NewspaperQuote
        author="Plato"
        url="https://en.wikipedia.org/wiki/I_know_that_I_know_nothing"
        sx={{mb: 3}}
      >
        I know that I know nothing
      </NewspaperQuote>
      <SerifTypography variant="h5" gutterBottom>
        We are not experts in politics, economics, or any of the other fields that we are discussing.
      </SerifTypography>
      <SerifTypography variant="h5" gutterBottom sx={{mb: 6}}>
        At the same time:
      </SerifTypography>
      <NewspaperQuote
        author="Plato"
        url="https://en.wikipedia.org/wiki/I_know_that_I_know_nothing"
        sx={{mb: 3}}
      >
        I know that I know nothing
      </NewspaperQuote>
    </Box>
  )
}

export default Home