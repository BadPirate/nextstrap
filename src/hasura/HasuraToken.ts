import jwt from 'jsonwebtoken'
import { logDebug } from '../logging'

export const HasuraToken = (
  email : string,
  userid: string,
  name : string,
  role : string|string[],
  maxAge : number,
) => {
  const secret = process.env.NEXTAUTH_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET must be set in .env')
  }
  const signed = jwt.sign({
    sub: email,
    name,
    email,
    iat: Date.now() / 1000,
    exp: Math.floor(Date.now() / 1000) + (maxAge),
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': Array.isArray(role) ? role : [role],
      'x-hasura-default-role': Array.isArray(role) ? role[0] : role,
      'x-hasura-user-id': `${userid}`,
    },
  }, secret, { algorithm: 'HS256' })
  logDebug('Hasura Role', Array.isArray(role) ? role[0] : role)
  logDebug('Hasura Token', signed)
  // console.log('signed', email, role, signed)
  return signed
}

export default HasuraToken
