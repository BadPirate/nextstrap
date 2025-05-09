import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/src/services/prismaClient'
import requireSessionUser from '@/src/utils/requireSessionUser'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const context = { req, res }
  if (req.method === 'GET') {
    const sessionUser = await requireSessionUser(context)
    if (!sessionUser) return // requireSessionUser handles the response

    // Fetch the full user from the database and return all fields
    const user = await prisma.user.findUnique({ where: { email: sessionUser.email } })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    return res.status(200).json(user)
  } else {
    res.setHeader('Allow', ['PUT', 'GET'])
    return res.status(405).end('Method Not Allowed')
  }
}
