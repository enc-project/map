import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { getResponsiveFontSize } from './styles'

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: '#ffffff',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd'
    },
  },
}))

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
