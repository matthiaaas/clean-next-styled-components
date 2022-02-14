export const breakpoints = {
  xxl: 1632,
  xl: 1440,
  lg: 1164,
  md: 920,
  sm: 768,
  xs: 580
}

const buildMediaQueries = (
  pre = "max"
): { [bp in keyof typeof breakpoints]: string } =>
  Object.entries(breakpoints).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `@media screen and (${pre}-width: ${value}px)`
    }),
    {}
  ) as any

export const media = {
  ...buildMediaQueries("max"),
  min: buildMediaQueries("min")
}
