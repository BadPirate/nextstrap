/* eslint-disable camelcase */
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import HasuraLink from '../apollo/HasuraLink'

async function UserHasura(req: NextApiRequest, res: NextApiResponse, hasuraRole: string) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session || !session.hasura_token) { throw Error('You must be logged in to use this API') }
  const { hasura_token: hasuraToken } = session

  const link = HasuraLink({
    headers: {
      Authorization: `Bearer ${hasuraToken}`,
      'X-Hasura-Role': hasuraRole,
    },
  })

  return new ApolloClient({
    link,
    uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    cache: new InMemoryCache(),
  })
}

export default UserHasura
