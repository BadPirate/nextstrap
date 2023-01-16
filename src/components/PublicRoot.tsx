import RootNav from './RootNav'
import HasuraProvider from '../hasura/HasuraProvider'

const PublicRoot = ({ children }: { children: JSX.Element; }) => (
  <RootNav>
    <HasuraProvider hasuraRole="public">
      {children}
    </HasuraProvider>
  </RootNav>
)

export default PublicRoot
