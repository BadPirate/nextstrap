/* eslint-disable react/jsx-props-no-spreading */
import '../styles/bootstrap.min.css'
import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider>
    { session !== null ? <Component {...pageProps} /> : null }
  </SessionProvider>
)
export default App
