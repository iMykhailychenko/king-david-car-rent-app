import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const key = process.env.NEXT_PUBLIC_GOOGLE;

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const address = encodeURI(String(req.query.place));

    try {
        const places = await (
            await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
        ).data.results[0].geometry.location;

        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export default handler;
