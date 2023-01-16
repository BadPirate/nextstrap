import { signIn, signOut, useSession } from 'next-auth/react'
import {
  Navbar, Container, NavDropdown, Button,
} from 'react-bootstrap'

const RootNav = ({ children } : {children : JSX.Element}) => {
  const user = useSession().data?.user
  return (
    <div>
      <Navbar variant="dark" bg="secondary">
        <Navbar.Brand href="/" style={{ marginLeft: '1em', textTransform: 'capitalize' }}>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </Navbar.Brand>
        <Navbar.Text>
          {`v${process.env.NEXT_PUBLIC_APP_VERSION}`}
        </Navbar.Text>
        {
          user ? (
            <NavDropdown title={user.name} className="ms-auto">
              <NavDropdown.Item onClick={() => signOut()}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button onClick={() => signIn()} className="ms-auto me-3">
              Sign In
            </Button>
          )
        }
      </Navbar>
      <Container style={{ marginTop: '1em' }}>
        {children}
      </Container>
    </div>
  )
}

export default RootNav
