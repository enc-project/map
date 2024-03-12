import React, { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

const SerifTypography: FC<TypographyProps> = ({
  children,
  variant,
  sx = {},
  ...props
}) => {
  return (
    <Typography
      variant={variant}
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
