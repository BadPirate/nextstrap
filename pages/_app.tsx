/* eslint-disable no-unused-vars */
/* eslint-disable no-extend-native */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/bootstrap.min.css'
import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'

declare global {
  interface Array<T> {
    squish<NonNull, Nullable extends (NonNull | undefined | null)>(): NonNull[];
  }
}

if (!Array.prototype.squish) {
  Array.prototype.squish = function squish<NonNull, T extends(NonNull|undefined|null)>
  (this: T[]): NonNull[] {
    return this.flatMap((e) => (e ? [e] : [])) as NonNull[]
  }
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider>
    { session !== null ? <Component {...pageProps} /> : null }
  </SessionProvider>
)
export default App
