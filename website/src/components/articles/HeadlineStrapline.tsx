import React, { FC, ReactElement, useMemo } from 'react'
import { SxProps } from '@mui/system'
import SerifTypography from '../widgets/SerifTypography'

import { getResponsiveSxAmount } from '../../styles'
import useTypography from '../../hooks/useTypography'

const HeadlineStrapline: FC<{
  headline?: ReactElement | string,
  strapline?: ReactElement | string,
  headlineVariant?: string,
  straplineVariant?: string,
  align?: 'left' | 'center' | 'right',
  mt?: number,
  mm?: number,
  mb?: number,
}> = ({
  headline,
  strapline,
  headlineVariant = 'h2',
  straplineVariant = 'h3',
  align = 'left',
  mt = 4,
  mm = 2,
  mb = 4,
}) => {

  const sx = useMemo(() => {
    // what we put on an element if it's the only one
    const single: SxProps = {
      mt: getResponsiveSxAmount(mt),
      mb: getResponsiveSxAmount(mb)
    }

    // if we have both then we use top and bottom
    const top: SxProps = {
      mt: getResponsiveSxAmount(mt),
      mb: getResponsiveSxAmount(mm),
    }
    const bottom: SxProps = {
      mb: getResponsiveSxAmount(mb),
    }

    return {
      single,
      top,
      bottom,
    }
  }, [
    mt,
    mm,
    mb,
  ])


  const headlineSx = headline && strapline ? sx.top : sx.single
  const straplineSx = headline && strapline ? sx.bottom : sx.single

  return (
    <>
      {
        headline && (
          <SerifTypography variant={headlineVariant as any} gutterBottom sx={ headlineSx } align={ align }>
            { headline }
          </SerifTypography>
        )
      }
      {
        strapline && (
          <SerifTypography variant={straplineVariant as any} gutterBottom sx={ straplineSx } align={ align }>
            { strapline }
          </SerifTypography>
        )
      }
    </>
  )
}

export default HeadlineStrapline
