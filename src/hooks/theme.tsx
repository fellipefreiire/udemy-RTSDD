import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../styles/theme'

interface IThemeContext {
  toggleTheme(): void
  theme: ITheme
}

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

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const useTheme = (): IThemeContext => useContext(ThemeContext)

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(themes.dark)

  useEffect(() => {
    const themeSaved = localStorage.getItem('@minha-carteira:theme')

    themeSaved ? setTheme(JSON.parse(themeSaved)) : setTheme(themes.dark)
  }, [])

  const toggleTheme = useCallback(() => {
    if (theme.title === 'dark') {
      setTheme(themes.light)
      localStorage.setItem(
        '@minha-carteira:theme',
        JSON.stringify(themes.light)
      )
      localStorage.setItem('@minha-carteira:toggle', JSON.stringify(false))
    } else if (theme.title === 'light') {
      setTheme(themes.dark)
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(themes.dark))
      localStorage.setItem('@minha-carteira:toggle', JSON.stringify(true))
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
