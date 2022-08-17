import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import HasuraAdapter from '../../../src/hasura/HasuraAdapter'
import HasuraCallbacks from '../../../src/hasura/HasuraCallbacks'

const { EMAIL_SERVER, EMAIL_FROM } = process.env

if (!EMAIL_SERVER || !EMAIL_FROM) {
  throw Error('EMAIL_SERVER and EMAIL_FROM must be set in order to use EmailProvider')
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: HasuraAdapter(),
  callbacks: HasuraCallbacks,
})
