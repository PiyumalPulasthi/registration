import { NextApiRequest, NextApiResponse } from 'next';
import loginHandler from '../../api/login';

export default function login(req: NextApiRequest, res: NextApiResponse) {
  return loginHandler(req, res);
}