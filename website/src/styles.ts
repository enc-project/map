// get a responsive margin or padding amount
export const getResponsiveSxAmount = (amount: number) => {
  return {
    xs: Math.round(amount * .5),
    sm: Math.round(amount * .75),
    md: Math.round(amount * .9),
    lg: amount,
  }
}

export const getResponsiveFontSize = (size: number) => {
  return {
    xs: Math.round(size * .65),
    sm: Math.round(size * .8),
    md: Math.round(size * .9),
    lg: size,
  }
}