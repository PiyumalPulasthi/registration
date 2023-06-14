import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import connectDB from '../utils/db';
import User from '../models/User';

export default async function profileHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await User.findById(session.user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ username: user.name, email: user.email });
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}