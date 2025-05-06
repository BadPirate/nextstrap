import { SessionProvider } from 'next-auth/react'
import '../styles/bootstrap.min.css'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import UserProvider from '../src/components/UserProvider'

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  </SessionProvider>
)

export default App
