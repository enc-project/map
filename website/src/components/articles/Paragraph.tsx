import React, { FC } from 'react'
import { SxProps } from '@mui/system'
import SerifTypography from '../widgets/SerifTypography'

import { getResponsiveSxAmount, getResponsiveFontSize } from '../../styles'

const Paragraph: FC<{
  mt?: number,
  mb?: number,
  sx?: SxProps,
}> = ({
  mt = 1,
  mb = 2,
  sx = {},
  children,
}) => {
  const useSx = {
    mt: getResponsiveSxAmount(mt),
    mb: getResponsiveSxAmount(mb),
    fontSize: getResponsiveFontSize(22),
    ...sx,
  }
  return (
    <SerifTypography variant="body1" gutterBottom sx={ useSx }>
      { children }
    </SerifTypography>
  )
}

export default Paragraph
