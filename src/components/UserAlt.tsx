import { useSession } from 'next-auth/react'
import HasuraProvider from '../hasura/HasuraProvider'
import GrowSpinner from './GrowSpinner'

const UserAlt = ({
  loading, authenticated, unauthenticated, hasuraRole,
} : {
    loading?: JSX.Element,
    unauthenticated: JSX.Element,
    authenticated: JSX.Element,
    hasuraRole?: string
}) => {
  const session = useSession()
  if (!session) {
    return loading!
  }
  const user = session.data?.user
  if (!user) {
    return unauthenticated
  }
  return (
    <HasuraProvider hasuraRole={hasuraRole!}>
      {authenticated}
    </HasuraProvider>
  )
}

UserAlt.defaultProps = {
  loading: <GrowSpinner />,
  hasuraRole: 'user',
}

export default UserAlt
