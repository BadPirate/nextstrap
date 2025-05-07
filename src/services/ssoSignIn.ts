import { signIn } from 'next-auth/react'
import config from '../utils/config'

const ssoSignIn = async () => {
  if (config.NODE_ENV === 'production') {
    const callbackUrl = window.location.href
    signIn('sso', { callbackUrl })
  } else {
    // Explicitly use the credentials provider in dev/test for reliability
    signIn('auth')
  }
}

export default ssoSignIn
