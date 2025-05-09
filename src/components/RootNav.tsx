import React from 'react'
import { Navbar, Container, Button, Spinner } from 'react-bootstrap'
import { signOut } from 'next-auth/react'
import config from '../utils/config'
import ssoSignIn from '../services/ssoSignIn'
import { useUser } from './UserProvider'
import BreadCrumbs from './BreadCrumbs'

const { NEXT_PUBLIC_APP_NAME: appName, NEXT_PUBLIC_APP_VERSION: appVersion, NODE_ENV } = config

const RootNav = ({ children, title }: { children: React.ReactNode; title?: string }) => {
  const { sessionUser } = useUser()

  return (
    <div>
      <Navbar variant="dark" bg="secondary">
        <Navbar.Brand href="/" style={{ marginLeft: '1em', textTransform: 'capitalize' }}>
          {appName}
        </Navbar.Brand>
        <Navbar.Text>{`v${appVersion}`}</Navbar.Text>
        <BreadCrumbs lastLabel={title} />
        {NODE_ENV !== 'production' && (
          <Navbar.Text className={'ms-auto text-warning'}>
            <strong>{NODE_ENV.toUpperCase()}</strong>
          </Navbar.Text>
        )}
        <div className="ms-auto me-3">
          {sessionUser !== undefined ? (
            sessionUser ? (
              <Button variant="outline-light" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button variant="primary" onClick={() => ssoSignIn()}>
                Login
              </Button>
            )
          ) : (
            <Spinner />
          )}
        </div>
      </Navbar>
      <Container style={{ marginTop: '1em' }}>{children}</Container>
    </div>
  )
}

export default RootNav
