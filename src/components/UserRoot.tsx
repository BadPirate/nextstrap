import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { Alert, Card } from 'react-bootstrap'
import HasuraProvider from '../hasura/HasuraProvider'
import GrowSpinner from './GrowSpinner'
import RootNav from './RootNav'

export function useSessionUser() {
  const { data, status } = useSession()
  if (status !== 'authenticated' || !data.user) {
    throw Error('useSessionUser should only be called from a child of UserRoot')
  }
  return data.user
}

const UserRoot = ({ children, hasuraRole } : { children : JSX.Element, hasuraRole: string }) => {
  const result = useSession()
  const { data, status } = result
  useEffect(() => {
    if (status !== 'unauthenticated') return
    signIn()
  }, [status])
  if (status === 'loading') {
    return <GrowSpinner />
  }
  const user = data?.user
  if (status === 'unauthenticated' || !user) {
    return (
      <RootNav>
        <Card>
          <Card.Body>
            <Alert variant="info">
              Login to gain access to Host 4 us
            </Alert>
          </Card.Body>
        </Card>
      </RootNav>
    )
  }
  return (
    <RootNav>
      <HasuraProvider hasuraRole={hasuraRole}>
        { children }
      </HasuraProvider>
    </RootNav>
  )
}

export default UserRoot
