import { signIn } from 'next-auth/react'
import config from '../utils/config'

const ssoSignIn = async () => {
  const callbackUrl = window.location.href
  if (config.NODE_ENV === 'production') {
    signIn('sso', { callbackUrl })
  } else {
    signIn('auth', { callbackUrl })
  }
}

export default ssoSignIn
