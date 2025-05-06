import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'
import React from 'react'
import type { Session } from 'next-auth'

interface Props {
  children: React.ReactNode
  session?: Session | null
}

const SessionProvider = ({ children, session }: Props) => <NextAuthSessionProvider session={session}>{children}</NextAuthSessionProvider>

export default SessionProvider
