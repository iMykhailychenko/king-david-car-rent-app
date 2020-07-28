import { cars } from '../../../assets/cars';

export default function (req, res) {
    const { id } = req.query;
    const filtered = cars.filter((car) => car.id === Number(id));

    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({ message: `Car with id: ${id} not found.` });
    }
}
