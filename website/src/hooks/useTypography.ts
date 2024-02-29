import useIsLargeScreen from './useIsLargeScreen'

export const useTypography = () => {
  const isLargeScreen = useIsLargeScreen()
  
  return {
    headlineVariant: isLargeScreen ? "h3" : "h4" as any,
    straplineVariant: isLargeScreen ? "h5" : "h6" as any,
  }
}

export default useTypography