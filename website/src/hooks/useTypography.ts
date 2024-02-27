import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const useTypography = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  
  return {
    headlineVariant: isSmallScreen ? "h4" : "h3" as any,
    straplineVariant: isSmallScreen ? "h6" : "h5" as any,
  }
}

export default useTypography