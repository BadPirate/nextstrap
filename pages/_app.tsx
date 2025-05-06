import { SessionProvider } from 'next-auth/react'
import '../styles/bootstrap.min.css'
import '../styles/global.css'

import type { AppProps } from 'next/app'

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
)

export default App
