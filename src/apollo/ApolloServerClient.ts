import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { HasuraToken } from '../hasura/HasuraToken'

const { EMAIL_FROM } = process.env

if (!EMAIL_FROM) {
  throw Error('EMAIL_FROM must be set in .env for use as Server User')
}

const SERVER_USER_TOKEN = HasuraToken(
  EMAIL_FROM,
  '1',
  'Server Client',
  'server',
  (24 * 60 * 60 * 30), /* 30 days */
)

const ApolloServerClient = () => new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    headers: {
      Authorization: `Bearer ${SERVER_USER_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
})

export default ApolloServerClient
