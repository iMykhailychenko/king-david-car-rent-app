import { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'ihor.mykh@outlook.com',
            pass: process.env.MAIL,
        },
    });

    const message = {
        from: 'Car rent application <ihor.mykh@outlook.com>',
        to: 'igor.c.m@ukr.net',
        subject: `Hey! Someone use your app`,
        text: `Hello Ihor! Look at this`,
        html: `
            <h2>Hello Ihor! Look at this!</h2>
            <h4>${new Date()}</h4>
            <pre>
                ${JSON.stringify(req.headers, null, 4)}
            </pre>
        `,
    };

    await transporter.sendMail(message, async (error, info) => {
        if (error) {
            console.log(error);
            await res.status(200).json({ _: 'Кажется, вам не стоит сюда смотреть!' });
        } else {
            console.log('Email sent: ' + info.response);
            await res.status(500).json({ _: 'Кажется, вам не стоит сюда смотреть!' });
        }
    });
}
