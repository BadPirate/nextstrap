import { signIn, signOut, useSession } from 'next-auth/react'
import {
  Navbar, Container, NavDropdown, Button,
} from 'react-bootstrap'
import UserAlt from './UserAlt'

const RootNav = ({ children } : {children : JSX.Element}) => (
  <div>
    <Navbar variant="dark" bg="secondary">
      <Navbar.Brand href="/" style={{ marginLeft: '1em', textTransform: 'capitalize' }}>
        Some app
      </Navbar.Brand>
      <Navbar.Text>
        my hasura app
      </Navbar.Text>
      <UserAlt
        authenticated={(
          <Button onClick={() => signOut()} className="ms-auto me-3">
            Sign Out
          </Button>
        )}
        unauthenticated={(
          <Button onClick={() => signIn()} className="ms-auto me-3">
            Sign In
          </Button>
        )}
      />
    </Navbar>
    <Container style={{ marginTop: '1em' }}>
      {children}
    </Container>
  </div>
)

export default RootNav
