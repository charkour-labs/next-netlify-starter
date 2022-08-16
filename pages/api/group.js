import { serialize } from 'cookie'

export default function handler(req, res) {
	res.setHeader('Set-Cookie', serialize('customer_group', 'other', { path: '/' }));
	res.status(200).json({ name: 'John Doe' })
      }