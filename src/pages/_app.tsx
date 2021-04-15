import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import { CustomThemeProvider } from '../hooks/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CustomThemeProvider>
  )
}

export default MyApp
