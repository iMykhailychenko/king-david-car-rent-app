const nodemailer = require('nodemailer');

export default function (req, res) {
    const { firstName, lastName, email, title, text, price, total, totalCost } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ihor.myh@gmail.com',
            pass: process.env.MAIL,
        },
    });

    const message = {
        to: email,
        subject: 'Rent a ' + title,
        text: 'Hello! ' + firstName + ' ' + lastName,
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

    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({ message: `Error occurred` });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json(req);
        }
    });
}