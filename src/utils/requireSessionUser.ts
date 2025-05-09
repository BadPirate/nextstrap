import { IncomingMessage, ServerResponse } from 'http'
import { getServerSession } from 'next-auth'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import authOptions from '../lib/authOptions'
import logger from './logger'

type ConnectionContext = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies
  }
  res: ServerResponse
}

export const requireSession = async (context: ConnectionContext) => {
  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    logger.error('Session not found or invalid JWT, logging out')
    // Explicitly clear the session cookie to logout
    res.setHeader(
      'Set-Cookie',
      'next-auth.session-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Lax',
    )
    res.setHeader('Location', '/api/auth/signin')
    res.statusCode = 302
    res.end()
  }
  return session
}

const requireSessionUser = async (context: ConnectionContext) => {
  const { res } = context

  const session = await requireSession(context)
  if (!session) {
    return null
  }
  const { user } = session
  if (!user || !user.email) {
    logger.error('User not found in session')
    res.setHeader('Location', '/api/auth/signin')
    res.statusCode = 302
    res.end()
    return null
  }
  return {
    email: user.email,
    name: user.name,
    image: user.image,
  }
}

export default requireSessionUser
