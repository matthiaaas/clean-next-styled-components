import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { defaultTheme } from "~/utils/theme"

import GlobalStyles from "~/components/GlobalStyles"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
