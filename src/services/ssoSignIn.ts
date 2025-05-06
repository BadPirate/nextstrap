import { signIn } from 'next-auth/react'

const ssoSignIn = () => {
  const callbackUrl = window.location.href
  signIn('sso', { callbackUrl })
}

export default ssoSignIn
