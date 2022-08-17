import { Account } from 'next-auth'
import {
  Adapter, AdapterSession, AdapterUser, VerificationToken,
} from 'next-auth/adapters'
import normalizeEmail from 'normalize-email'
import ApolloServerClient from '../apollo/ApolloServerClient'
import {
  CreateVerificationTokenDocument, CreateVerificationTokenMutation, DeleteSessionDocument,
  DeleteSessionMutation, GetSessionAndUserDocument, GetSessionAndUserQuery,
  GetUserByAccountDocument, GetUserByAccountQuery, GetUserDocument, GetUserQuery,
  LinkAccountDocument, LinkAccountMutation, UpdateSessionDocument, UpdateSessionQuery,
  UserByEmailDocument, UserByEmailQuery, UseVerificationTokenDocument,
  UseVerificationTokenMutation, VerifyEmailByEmailMutation, VerifyEmailByEmailDocument,
  CreateSessionDocument, CreateSessionMutation, CreateUserDocument, CreateUserMutation,
} from '../apollo/types'
import { logDebug, logError } from '../logging'

const adapterClient = ApolloServerClient()

export const createVerificationToken = async (verificationToken: VerificationToken) => {
  const { identifier, token, expires } = verificationToken
  const email = normalizeEmail(identifier)
  return adapterClient.mutate<CreateVerificationTokenMutation>({
    mutation: CreateVerificationTokenDocument,
    variables: { email, token, expires },
  }).then((result) => {
    if (!result.data?.insert_tokens_one?.email) {
      throw Error('Unable to set verification token')
    }
    return <VerificationToken>verificationToken
  })
}

const updateUser = async (props: Partial<AdapterUser>) => {
  logDebug('updateUser', props)
  const { email: rawEmail, id } = props
  const email = rawEmail ? normalizeEmail(rawEmail) : ''
  return adapterClient.mutate<VerifyEmailByEmailMutation>({
    mutation: VerifyEmailByEmailDocument,
    variables: { email, id },
  }).then((result) => {
    if (!result.data?.update_users?.returning || result.data.update_users.returning.length < 1) {
      return null
    }
    const {
      emailVerified, id: resultId, name, email: resultEmail,
    } = result.data.update_users.returning[0]
    const fullUser = <AdapterUser>{
      email: resultEmail,
      emailVerified,
      id: `${resultId}`,
      name,
    }
    return fullUser
  }).catch((e) => {
    logError('-> updateUser', e)
    return null
  }).then((r) => {
    logDebug('-> updateUser', r)
    return r
  })
}

function HasuraAdapter() {
  return <Adapter>{
    getUserByEmail: async (rawEmail: string) => {
      logDebug('getUserByEmail', rawEmail)
      const email = normalizeEmail(rawEmail)
      return adapterClient.query<UserByEmailQuery>({
        query: UserByEmailDocument,
        variables: { email },
      }).then((result) => {
        if (!result.data.users || result.data.users.length < 1) {
          return null
        }
        const user = result.data.users[0]
        return <AdapterUser>{
          id: `${user.id}`,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
        }
      })
    },

    createVerificationToken,

    useVerificationToken: async (params: {
        identifier: string;
        token: string;
    }) => {
      const { identifier, token } = params
      const email = normalizeEmail(identifier)
      logDebug('useVerificationToken', { email, token })
      return adapterClient.mutate<UseVerificationTokenMutation>({
        mutation: UseVerificationTokenDocument,
        variables: { email, token },
      }).then((result) => {
        if (!result.data?.delete_tokens?.returning
          || result.data.delete_tokens.returning.length < 1) {
          return null
        }
        const { expires } = result.data.delete_tokens.returning[0]
        return {
          identifier,
          expires,
          token,
        }
      }).then((r) => {
        logDebug('-> useVerificationToken', r)
        return r
      }).catch((e) => {
        logError('-> useVerificationToken', e)
        return null
      })
    },

    getSessionAndUser: async (sessionToken: string) => adapterClient.query<GetSessionAndUserQuery>({
      query: GetSessionAndUserDocument,
      variables: { sessionToken },
    }).then((result) => {
      if (!result.data.sessions_by_pk) return null
      const {
        id: sessionId,
        expires,
        user: {
          id: userId,
          emailVerified,
          name,
          email,
        },
      } = result.data.sessions_by_pk
      const user = <AdapterUser>{
        id: `${userId}`,
        email,
        emailVerified,
        name,
      }
      const session = <AdapterSession>{
        id: `${sessionId}`,
        sessionToken,
        userId: `${user.id}`,
        expires: new Date(expires),
      }
      return { user, session }
    }),

    deleteSession: async (sessionToken: any) => adapterClient.mutate<DeleteSessionMutation>({
      mutation: DeleteSessionDocument,
      variables: { sessionToken },
    }).then((result) => {
      if (!result.data?.delete_sessions_by_pk) return null

      const { id, expires, userId } = result.data.delete_sessions_by_pk
      return <AdapterSession>{
        sessionToken,
        id: `${id}`,
        expires,
        userId: `${userId}`,
      }
    }),

    updateUser,

    createSession: async (params: {
        sessionToken: string;
        userId: string;
        expires: Date;
    }) => {
      logDebug('createSession', params)
      const { sessionToken, userId, expires } = params
      return adapterClient.mutate<CreateSessionMutation>({
        mutation: CreateSessionDocument,
        variables: {
          sessionToken,
          userId,
          expires,
        },
      }).then((result) => {
        if (!result.data?.insert_sessions_one?.id) return null
        return <AdapterSession>{
          sessionToken,
          userId,
          expires,
          id: `${result.data.insert_sessions_one.id}`,
        }
      }).then((r) => {
        logDebug('-> createSession', r)
        return r
      }).catch((e) => {
        logError('-> createSession', e)
      })
    },

    createUser: async (omitUser: Omit<AdapterUser, 'id'>) => adapterClient.mutate<CreateUserMutation>({
      mutation: CreateUserDocument,
      variables: omitUser,
    }).then((result) => {
      if (!result.data?.insert_users_one?.id) {
        throw Error('No user created')
      }
      const user = <AdapterUser>{
        ...omitUser,
        id: `${result.data.insert_users_one.id}`,
      }
      return user
    }),

    getUser: async (id: string) => adapterClient.query<GetUserQuery>({
      query: GetUserDocument,
      variables: { id },
    }).then((result) => {
      if (!result.data.users_by_pk) return null
      const { email, emailVerified, name } = result.data.users_by_pk
      return <AdapterUser>{
        email,
        emailVerified,
        name,
        id,
      }
    }),

    getUserByAccount:
     async (variables: Pick<Account, 'provider' | 'providerAccountId'>) => adapterClient.query<GetUserByAccountQuery>({
       query: GetUserByAccountDocument,
       variables,
     }).then((result) => {
       if (!result.data.providers_by_pk) return null
       const {
         id, email, emailVerified, name,
       } = result.data.providers_by_pk.user
       return <AdapterUser>{
         id: `${id}`,
         email,
         emailVerified,
         name,
       }
     }),

    linkAccount: async (account: Account) => adapterClient.mutate<LinkAccountMutation>({
      mutation: LinkAccountDocument,
      variables: account,
    }).then((result) => {
      if (!result.data?.insert_providers_one?.userId) return null
      return account
    }),

    updateSession: async (session: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>) => adapterClient.query<UpdateSessionQuery>({
      query: UpdateSessionDocument,
      variables: session,
    }).then((result) => {
      if (!result.data.sessions_by_pk) return null
      const {
        id, expires, userId, sessionToken,
      } = result.data.sessions_by_pk
      return <AdapterSession>{
        id: `${id}`,
        userId: `${userId}`,
        expires,
        sessionToken,
      }
    }),
  }
}

export default HasuraAdapter
