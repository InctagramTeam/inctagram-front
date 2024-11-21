import { NextApiRequest, NextApiResponse } from 'next'

export default function setUserIdCookie(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query

  const cookie = `userId=${userId}; Path=/; HttpOnly; SameSite=Strict; Secure; Expires=${new Date(Date.now() + 10 * 60 * 60 * 1000).toUTCString()}`

  res.setHeader('Set-Cookie', cookie)

  res.status(200).json({ success: true })
}
