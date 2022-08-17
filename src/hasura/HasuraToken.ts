import jwt from 'jsonwebtoken'

export const HasuraToken = (
  email : string,
  userid: string,
  name : string,
  role : string,
  maxAge : number,
) => {
  const secret = process.env.NEXTAUTH_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET must be set in .env')
  }
  return jwt.sign({
    sub: email,
    name,
    email,
    iat: Date.now() / 1000,
    exp: Math.floor(Date.now() / 1000) + (maxAge),
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': [role],
      'x-hasura-default-role': role,
      'x-hasura-role': role,
      'x-hasura-user-id': `${userid}`,
    },
  }, secret, { algorithm: 'HS256' })
}

export default HasuraToken
