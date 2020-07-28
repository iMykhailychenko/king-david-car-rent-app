import axios from 'axios';

const key = process.env.NEXT_PUBLIC_GOOGLE;

const handler = async (req, res) => {
    const address = encodeURI(req.query.place);

    try {
        const places = await
            (await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`))
                .data.results[0].geometry.location;

        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export default handler;