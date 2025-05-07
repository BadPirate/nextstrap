import { DefaultSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import logger from '../utils/logger'

type User = DefaultSession['user']
type UserContextType = {
  user: User | null
  loading: boolean
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
})

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userContext, setUserContext] = useState<UserContextType>({
    user: null,
    loading: true,
  })
  const { status, data: session } = useSession()
  const user = session?.user

  useEffect(() => {
    logger.debug('UserProvider', { status, user })
    if (status === 'loading') {
      setUserContext({ user: null, loading: true })
    } else if (status === 'authenticated') {
      setUserContext({ user, loading: false })
    } else {
      setUserContext({ user: null, loading: false })
    }
  }, [user, status])

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export default UserProvider
