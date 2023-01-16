import {
  ApolloClient, InMemoryCache,
} from '@apollo/client'
import { HasuraToken } from '../hasura/HasuraToken'
import HasuraLink from './HasuraLink'

const { SERVER_EMAIL, SERVER_USER_ID } = process.env

const SERVER_USER_TOKEN = HasuraToken(
  SERVER_EMAIL ?? '',
  SERVER_USER_ID ?? '',
  'Server Client',
  'server',
  (24 * 60 * 60 * 30), /* 30 days */
)

const ApolloServerClient = () => {
  if (!SERVER_EMAIL || !SERVER_USER_ID) {
    throw Error('SERVER_EMAIL and SERVER_USER_ID must be set in .env for use as Server User')
  }
  return new ApolloClient({
    link: HasuraLink({
      headers: {
        Authorization: `Bearer ${SERVER_USER_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  })
}
export default ApolloServerClient
