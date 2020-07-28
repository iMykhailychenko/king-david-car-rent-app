import { cars } from '../../../assets/cars';

export default (req, res) => {
    (req.method === 'GET') ? res.status(200).json(cars) : res.status(500).json({ message: 'Not correct request' });
};
