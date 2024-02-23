import React, { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

const SerifTypography: FC<TypographyProps> = ({
  children,
  sx = {},
  ...props
}) => {
  return (
    <Typography
      sx={{
        fontFamily: '"Playfair Display", serif;',
        fontOpticalSizing: 'auto',
        ...sx,
      }}
      {...props}
    >
      { children }
    </Typography>
  )
}

export default SerifTypography
