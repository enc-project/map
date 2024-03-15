import React, { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

const SerifTypography: FC<TypographyProps> = ({
  children,
  variant = 'body1',
  align,
  sx = {},
  ...props
}) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? '"Playfair Display", serif' : '"Source Sans Pro", sans-serif',
        fontOpticalSizing: 'auto',
        textAlign: align as 'left' | 'center' | 'right',
        ...sx,
      }}
      {...props}
    >
      { children }
    </Typography>
  )
}

export default SerifTypography
