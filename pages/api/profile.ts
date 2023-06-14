import { NextApiRequest, NextApiResponse } from 'next';
import profileHandler from '../../api/profile';

export default function profile(req: NextApiRequest, res: NextApiResponse) {
  return profileHandler(req, res);
}