import {
  ApolloClient, ApolloProvider, InMemoryCache, split,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { Spinner } from 'react-bootstrap'
import PublicClientHasura from '../apollo/PublicClientHasura'
import HasuraLink from '../apollo/HasuraLink'

const HasuraProvider = ({ children, hasuraRole } : {children : React.ReactNode,
  hasuraRole: string}) => {
  const { data: session, status } = useSession()

  const client = useMemo(() => {
    if (!session || !session.hasura_token) {
      return PublicClientHasura
    }

    const httpLink = HasuraLink({
      headers: {
        Authorization: `Bearer ${session.hasura_token}`,
        'X-Hasura-Role': hasuraRole,
      },
    })

    const wsLink = typeof window !== 'undefined' ? new GraphQLWsLink(createClient({
      url: process.env.NEXT_PUBLIC_HASURA_WS_ENDPOINT!,
      connectionParams: async () => ({
        headers: {
          Authorization: `Bearer ${session.hasura_token}`,
          'X-Hasura-Role': hasuraRole,
        },
      }),
    })) : null

    return new ApolloClient({
      link: wsLink ? split(
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition'
                && definition.operation === 'subscription'
          )
        },
        wsLink,
        httpLink,
      ) : httpLink,
      uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
      cache: new InMemoryCache(),
    })
  }, [session, hasuraRole])

  if (status === 'loading') {
    return <Spinner animation="grow" />
  }

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default HasuraProvider
