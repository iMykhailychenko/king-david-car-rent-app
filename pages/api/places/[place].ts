import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const key = process.env.NEXT_PUBLIC_GOOGLE;

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const data = await (
            await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.place}&key=${key}`)
        ).data.predictions;

        const places = data.map(item => ({
            id: item.id,
            description: item.description,
            main_text: item.structured_formatting.main_text,
            secondary_text: item.structured_formatting.main_text,
            matched: item.structured_formatting.main_text_matched_substrings,
        }));

        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export default handler;
