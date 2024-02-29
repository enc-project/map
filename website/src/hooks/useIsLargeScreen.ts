import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const useIsLargeScreen = (breakpoint?: any) => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.up(breakpoint || 'md'))
}

export default useIsLargeScreen