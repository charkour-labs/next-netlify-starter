import { serialize } from 'cookie'

export default function handler(req, res) {
	res.setHeader('Set-Cookie', serialize('group', 'B', { path: '/' }));
	res.status(200).json({ name: 'John Doe' })
      }