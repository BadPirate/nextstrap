import { DefaultSession } from 'next-auth'
import { useSession, signOut } from 'next-auth/react'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { User } from '@prisma/client'
import logger from '../utils/logger'

type SessionUser = DefaultSession['user']
type UserContextType = {
  sessionUser?: SessionUser | null // undefined is loading, null is not authenticated
  user?: User | null // undefined is loading, null is not authenticated
}

const UserContext = createContext<UserContextType>({
  sessionUser: undefined,
  user: undefined,
})

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [sessionUserContext, setSessionUserContext] = useState<UserContextType>({
    sessionUser: undefined,
    user: undefined,
  })
  const sessionContext = useSession()

  const { user } = sessionUserContext

  useEffect(() => {
    const { status, data: session } = sessionContext
    logger.debug('Session', { status })
    if (status === 'loading') {
      if (user) signOut()
      setSessionUserContext({ sessionUser: undefined, user: undefined })
      return
    }
    if (!session) {
      if (user) signOut()
      setSessionUserContext({ sessionUser: null, user: null })
      return
    }
    setSessionUserContext({ sessionUser: session.user, user: undefined })
  }, [sessionContext, user])

  const { sessionUser } = sessionUserContext

  useEffect(() => {
    if (!sessionUser) return
    let cancelled = false
    fetch('/api/user')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch user')
        return res.json()
      })
      .then((prismaUser) => {
        logger.debug('User', { prismaUser })
        if (cancelled) return
        setSessionUserContext((ctx) => ({ ...ctx, user: prismaUser }))
      })
      .catch(() => {
        if (cancelled) return
        setSessionUserContext((ctx) => ({ ...ctx, user: undefined, sessionLoading: false }))
      })
    return () => {
      cancelled = true
    }
  }, [sessionUser])

  return <UserContext.Provider value={sessionUserContext}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export default UserProvider
