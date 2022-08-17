import { Alert, Spinner } from 'react-bootstrap'
import PublicClientHasura from '../apollo/PublicClient'
import { useUserCountSubscription } from '../apollo/types'

const UserCount = () => {
  const { error, data } = useUserCountSubscription({
    client: PublicClientHasura,
  })
  if (error) {
    return <Alert variant="danger">{error.message}</Alert>
  }
  if (!data?.users_aggregate.aggregate) {
    return <Spinner animation="grow" />
  }
  return <span>{`Users: ${data.users_aggregate.aggregate?.count}`}</span>
}

export default UserCount
