/* eslint-disable camelcase */
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
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
      const { name, email, picture, client_id, iss } = profileData
      if (client_id !== OIDC_CONFIG.clientId) throw new Error('Invalid client_id')
      if (iss !== OIDC_CONFIG.issuer) throw new Error('Invalid issuer')
      // Normalize email
      const normalizedEmail = email.trim().toLowerCase()
      await prismaClient.user.upsert({
        where: { email: normalizedEmail },
        update: { name },
        create: { email: normalizedEmail, name },
      })
      return {
        id: normalizedEmail, // NextAuth requires id
        email: normalizedEmail,
        name,
        image: picture,
      }
    },
  })
} else {
  providers.push(
    CredentialsProvider({
      id: 'auth',
      name: `${NODE_ENV} Dummy Auth`,
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password', placeholder: 'test password' },
      },
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          // Normalize email
          const normalizedEmail = `${NODE_ENV}+${credentials.email.trim().toLowerCase()}`
          const user = await prismaClient.user.upsert({
            where: { email: normalizedEmail },
            update: {},
            create: {
              email: normalizedEmail,
              name: credentials.email,
            },
          })
          return {
            id: normalizedEmail, // NextAuth requires id
            email: user.email,
            name: user.name,
          }
        }
        return null
      },
    }),
  )
}

const authOptions: NextAuthOptions = {
  // Remove PrismaAdapter, use JWT sessions
  secret: NEXTAUTH_SECRET,
  providers,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      // Attach user email to session (extend type)
      return {
        ...session,
        user: session.user ? { ...session.user, email: token.email } : session.user,
      }
    },
    async jwt({ token, user }) {
      // Attach user email to token
      if (user && user.email) {
        token.email = user.email
      }
      return token
    },
  },
}

export default NextAuth(authOptions)
