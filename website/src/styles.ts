export const getResponsiveSxAmount = (amount: number) => ({
  xs: Math.round(amount * 0.5),
  sm: Math.round(amount * 0.75),
  md: Math.round(amount * 0.9),
  lg: amount,
})

export const getResponsiveFontSize = (size: number) => ({
  xs: size * 0.46,
  sm: size * 0.7,
  md: size * 0.8,
  lg: size,
})