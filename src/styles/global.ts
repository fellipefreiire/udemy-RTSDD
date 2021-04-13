import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  body {
    font: 400 16px Roboto, sans-serif;
    color: ${({ theme }) => theme.dark.colors.white}
  }
`
