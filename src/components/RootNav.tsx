import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { signIn, signOut } from 'next-auth/react'
import WithSession from './WithSession'

const RootNav = ({ children } : {children : React.ReactNode}) => (
  <div>
    <Navbar variant="dark" bg="secondary">
      <Navbar.Brand href="/" style={{ marginLeft: '1em', textTransform: 'capitalize' }}>
        {process.env.NEXT_PUBLIC_APP_NAME}
      </Navbar.Brand>
      <span className="ms-auto me-3">
        <WithSession
          // eslint-disable-next-line react/no-unstable-nested-components
          authenticated={(session) => <Button onClick={() => { signOut() }}>{`${session.user?.name ?? 'Logout'}`}</Button>}
          unauthenticated={(
            <Button onClick={() => { signIn('GarageAuth', { callbackUrl: '/' }) }}>
              Login
            </Button>
          )}
        />
      </span>
    </Navbar>
    <Container style={{ marginTop: '1em' }}>
      {children}
    </Container>
  </div>
)

export default RootNav
