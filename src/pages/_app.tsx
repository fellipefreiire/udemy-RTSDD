import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import { CustomThemeProvider } from '../hooks/theme'
import { AuthProvider } from '../hooks/auth'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthProvider>
    </CustomThemeProvider>
  )
}

export default MyApp
