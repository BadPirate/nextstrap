import {
  Account, CallbacksOptions, Profile, Session,
} from 'next-auth'
import { HasuraToken } from './HasuraToken'

const MAX_AGE = (24 * 60 * 60 * 30) // 30 days

const HasuraCallbacks = <Partial<CallbacksOptions<Profile, Account>>>{
  jwt: async ({ token, user }) => {
    if (user) {
      return {
        ...token,
        user,
      }
    }
    return token
  },
  redirect: async ({ url }) => `${url}`, // Whatever
  session: async ({ user: { email, name, id }, session: sessionIm }) => {
    const session = sessionIm
    if (!email || !id || !name) return session
    if (session.user) {
      session.user.id = id
    }
    return <Session>{
      hasura_token: HasuraToken(email, id, name, 'hasher', MAX_AGE),
      id,
      ...session,
    }
  },
}

export default HasuraCallbacks
