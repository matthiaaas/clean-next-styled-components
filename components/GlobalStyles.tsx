import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
  ${reset}

  html,
  body {
    font-family: ${({ theme }) => theme.fonts.text};

    background: ${({ theme }) => theme.background};
    
    -webkit-text-size-adjust: 100%;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    color: currentColor;
  }
  
  span {
    display: inline-block;
  }
`

export default GlobalStyles
