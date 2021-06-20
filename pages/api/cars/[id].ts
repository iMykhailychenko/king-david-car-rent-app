import { NextApiRequest, NextApiResponse } from 'next';

import { cars } from '../../../assets/cars';

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { id } = req.query;
    const filtered = cars.filter(car => car.id === Number(id));

    if (filtered.length > 0) {
        await res.status(200).json(filtered[0]);
    } else {
        await res.status(404).json({ message: `Car with id: ${id} not found.` });
    }
}
