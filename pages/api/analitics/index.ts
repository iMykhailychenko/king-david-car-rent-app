import nodemailer from 'nodemailer';

export default function (req, res) {
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
            <pre>
                ${JSON.stringify(req.headers, null, 4)}
            </pre>
        `,
    };

    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
            res.status(200).json({_: 'Кажется, вам не стоит сюда смотреть!'});
        } else {
            console.log('Email sent: ' + info.response);
            res.status(500).json({_: 'Кажется, вам не стоит сюда смотреть!'});
        }
    });

}