import { createContext, useContext } from 'react'

import dark from '../styles/themes/dark'

interface ITheme {
  title: string
  colors: {
    primary: string
    secondary: string
    tertiary: string

    white: string
    black: string
    gray: string

    success: string
    info: string
    warning: string
  }
}

export type ThemeContextType = {
  theme: ITheme
  setTheme: (Theme: ITheme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: dark,
  setTheme: theme => console.warn('no theme provider')
})
export const useTheme = () => useContext(ThemeContext)
