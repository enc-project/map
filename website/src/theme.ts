import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { getResponsiveFontSize } from './styles'

const theme = responsiveFontSizes(createTheme({}))

const setTypographyVariant = (variantSize: string, fontWeight: string = '400') => {
  const size = parseFloat(variantSize)
  const responsiveFontSize = getResponsiveFontSize(size)
  return {
    fontSize: `${variantSize}rem`,
    fontWeight,
    [theme.breakpoints.up('xs')]: {
      fontSize: `${responsiveFontSize.xs}rem`,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: `${responsiveFontSize.sm}rem`,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: `${responsiveFontSize.md}rem`,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: `${responsiveFontSize.lg}rem`,
    },
  }
}

theme.typography.h1 = setTypographyVariant('3.4')
theme.typography.h2 = setTypographyVariant('3.0')
theme.typography.h3 = setTypographyVariant('2.4')
theme.typography.h4 = setTypographyVariant('2.0')
theme.typography.h5 = setTypographyVariant('1.8')
theme.typography.h6 = setTypographyVariant('1.6')

export default theme
