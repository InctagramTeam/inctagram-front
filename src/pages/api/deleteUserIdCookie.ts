import { NextApiRequest, NextApiResponse } from 'next'

export default function deleteUserIdCookie(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', 'userId=; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=0')
  res.status(200).json({ success: true })
}
