// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const Hello = (req : NextApiRequest, res : NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default Hello
