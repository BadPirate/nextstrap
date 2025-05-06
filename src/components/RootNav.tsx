import React from 'react'
import { Navbar, Container, Button, Spinner } from 'react-bootstrap'
import { signOut } from 'next-auth/react'
import config from '../utils/config'
import ssoSignIn from '../services/ssoSignIn'
import { useUser } from './UserProvider'

const { NEXT_PUBLIC_APP_NAME: appName, NEXT_PUBLIC_APP_VERSION: appVersion, NODE_ENV } = config

const RootNav = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser()

  return (
    <div>
      <Navbar variant="dark" bg="secondary">
        <Navbar.Brand href="/" style={{ marginLeft: '1em', textTransform: 'capitalize' }}>
          {appName}
        </Navbar.Brand>
        <Navbar.Text>{`v${appVersion}`}</Navbar.Text>
        {NODE_ENV !== 'production' && (
          <Navbar.Text className={'ms-auto me-auto text-warning'}>
            <strong>{NODE_ENV}</strong>
          </Navbar.Text>
        )}
        {!loading ? (
          user ? (
            <Button variant="outline-light" href="/api/auth/signout" onClick={() => signOut()}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" href="/api/auth/signin" onClick={() => ssoSignIn()}>
              Login
            </Button>
          )
        ) : (
          <Spinner />
        )}
      </Navbar>
      <Container style={{ marginTop: '1em' }}>{children}</Container>
    </div>
  )
}

export default RootNav
