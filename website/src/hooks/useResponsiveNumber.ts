import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export interface IResponsiveNumberRatios {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

const defaultRatios: IResponsiveNumberRatios = {
  xs: 0.5,
  sm: 0.7,
  md: 0.8,
  lg: 1,
  xl: 1,
}

const useResponsiveNumber = (number: number, ratios = defaultRatios) => {
  const theme = useTheme()
  const xl = useMediaQuery(theme.breakpoints.up('xl'))
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const xs = useMediaQuery(theme.breakpoints.up('xs'))
  if (xl) return number * ratios.xl
  if (lg) return number * ratios.lg
  if (md) return number * ratios.md
  if (sm) return number * ratios.sm
  if (xs) return number * ratios.xs
  return number
}

export default useResponsiveNumber