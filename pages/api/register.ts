import { NextApiRequest, NextApiResponse } from 'next';
import registerHandler from '../../api/register';

export default function register(req: NextApiRequest, res: NextApiResponse) {
  return registerHandler(req, res);
}