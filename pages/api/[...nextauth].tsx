/* eslint-disable camelcase */
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import config from '@/src/utils/config'
import prismaClient from '@/src/services/prismaClient'

type ProfileData = {
  sub: string
  client_id: string
  aud: string
  scope: string
  iss: string
  email: string
  name: string
  picture: string
  iat: number
  exp: number
}

const { NODE_ENV, NEXTAUTH_SECRET, OIDC_CONFIG } = config

// Build NextAuth provider list
const providers: NextAuthOptions['providers'] = []

// Email (magic link) & credentials providers in test mode
if (NODE_ENV === 'production') {
  if (!OIDC_CONFIG) {
    throw new Error(
      'OIDC_CONFIG is not set, please configure OIDC or use a different auth provider',
    )
  }
  providers.push({
    id: 'auth',
    name: 'SSO',
    type: 'oauth',
    version: '2.0',
    ...OIDC_CONFIG,
    authorization: { params: { scope: 'openid profile email' } },
    checks: ['state', 'pkce'],
    async profile(profileData: ProfileData) {
      const { sub, name, email, picture, client_id, iss } = profileData
      if (client_id !== OIDC_CONFIG.clientId) throw new Error('Invalid client_id')
      if (iss !== OIDC_CONFIG.issuer) throw new Error('Invalid issuer')
      return {
        id: sub,
        name,
        email,
        image: picture,
      }
    },
  })
} else {
  providers.push(
    CredentialsProvider({
      id: 'auth',
      name: 'DummyAuth',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'text', placeholder: 'test password' },
      },
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          return {
            id: credentials.password,
            name: credentials.password,
            email: `${NODE_ENV}+${credentials.email}`,
          }
        }
        return null
      },
    }),
  )
}

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  secret: NEXTAUTH_SECRET,
  providers,
}

export default NextAuth(authOptions)
