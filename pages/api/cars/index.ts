import { NextApiRequest, NextApiResponse } from 'next';

import { cars } from '../../../assets/cars';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    req.method === 'GET' ? await res.status(200).json(cars) : await res.status(500).json({ message: 'Not correct request' });
};
