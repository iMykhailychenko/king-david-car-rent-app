const nodemailer = require('nodemailer');

export default function (req, res) {
    const { firstName, lastName, email, title, text, price, total, totalCost } = req.body;

    nodemailer.createTestAccount((err, account) => {
        if (err) {
            res.status(500).json({ message: 'Failed to create a testing account' });
            return process.exit(1);
        }

        const transporter = nodemailer.createTransport(
            {
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                },
                logger: true,
                debug: false,
            },
            {
                from: 'Nodemailer <igor.c.m@ukr.net>',
                headers: {
                    'X-Laziness-level': 1000,
                }
            }
        );

        const message = {
            to: email,
            subject: 'Rent a ' + title,
            text: 'Hello! ' +firstName + ' ' + lastName,
            html: `
                <h2>
                    You have booked a car on the 
                    <a href="${process.env.NEXT_PUBLIC_ORIGIN}" target="_blank" rel="noopener noreferrer">
                        Car rental application
                    </a>
                </h2>
                <p>This message confirms your booking</p>

                <h4>Short description:</h4>
                <p><strong>Car type:</strong> ${title}</p>
                <p><strong>Car description:</strong> ${text}</p>
                <p><strong>Price per hour:</strong> ${price}</p>
                <p><strong>Total rent time:</strong> ${total}</p>
                <p><strong>Total cost time:</strong> $${totalCost}</p>

                <br/>
                <a href="${process.env.NEXT_PUBLIC_ORIGIN}" target="_blank" rel="noopener noreferrer">Car rental application</a>
            `,
        };

        transporter.sendMail(message, (error, info) => {
            if (error) {
                res.status(500).json({ message: `Error occurred` });
                return process.exit(1);
            }

            transporter.close();
            res.status(200).json(req);
        });
    });
}