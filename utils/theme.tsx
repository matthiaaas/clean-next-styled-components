const fonts = {
  title: '"Inter", sans-serif',
  text: '"Inter", sans-serif'
}

export const defaultTheme = {
  foreground: "",
  higherContrast: "",
  highContrast: "",
  moderateContrast: "",
  mediumContrast: "",
  lowContrast: "",
  lowerContrast: "",
  background: "",

  accentContrast: "",
  accent: "",

  fonts
}

export type TTheme = typeof defaultTheme
