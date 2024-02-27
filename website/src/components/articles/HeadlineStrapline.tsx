import React, { FC, ReactElement } from 'react'
import { SxProps } from '@mui/system'
import SerifTypography from '../widgets/SerifTypography'

import { getResponsiveSxAmount } from '../../styles'
import useTypography from '../../hooks/useTypography'

// what we put on an element if it's the only one
const singleSX: SxProps = {
  mt: getResponsiveSxAmount(6),
  mb: getResponsiveSxAmount(6)
}

// if we have both then we use top and bottom
const topSx: SxProps = {
  mt: getResponsiveSxAmount(6),
  mb: getResponsiveSxAmount(2),
}

const bottomSx: SxProps = {
  mb: getResponsiveSxAmount(6),
}

const HeadlineStrapline: FC<{
  headline?: ReactElement | string,
  strapline?: ReactElement | string,
}> = ({
  headline,
  strapline,
}) => {
  const {
    headlineVariant,
    straplineVariant,
  } = useTypography()

  const headlineSx = headline && strapline ? topSx : singleSX
  const straplineSx = headline && strapline ? bottomSx : singleSX

  return (
    <>
      {
        headline && (
          <SerifTypography variant={ headlineVariant } gutterBottom sx={ headlineSx }>
            { headline }
          </SerifTypography>
        )
      }
      {
        strapline && (
          <SerifTypography variant={ straplineVariant } gutterBottom sx={ straplineSx }>
            { strapline }
          </SerifTypography>
        )
      }
    </>
  )
}

export default HeadlineStrapline
