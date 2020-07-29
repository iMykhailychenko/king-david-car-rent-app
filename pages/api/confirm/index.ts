import nodemailer from 'nodemailer';

export default function (req, res) {
    const { firstName, lastName, img, email, title, text, price, total, totalCost } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'ihor.mykh@outlook.com',
            pass: process.env.MAIL,
        },
    });

    const message = {
        from: 'Car rent application <ihor.mykh@outlook.com>',
        to: email,
        subject: `Rent a car "${title}"`,
        text: `Hello! ${firstName} ${lastName}`,
        html: `
            <style>
                .car-rent-container{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f1f1f1;font-size:10px}
                .car-rent-wrp{padding:4em 2em}.car-rent-container h2{font-size:2.4em;margin-bottom:1em}.car-rent-container h2 a{text-decoration:none;color:#4747c0}
                .car-rent-container h2 a:hover{text-decoration:underline;color:#2121eb}.car-rent-container h2, .car-rent-container h3, .car-rent-container h4 a:hover{margin-top: 0}
                .car-rent-container img{display:block;width:100%;height:15em;border-radius:0.5em;-o-object-fit:cover;object-fit:cover}
                .car-rent-general{margin-top:2em;padding:1em 1.5em 4em;border-radius:0.5em;background-color:#fff}.car-rent-general h3{margin-bottom:1em;font-size:2em}
                .car-rent-general h4{margin-bottom:1em;font-size:1.4em;color:#f36f22}.car-rent-general table{font-size:0.6em;text-align:left;border-collapse:collapse}
                .car-rent-general table td,.car-rent-general table th{padding:1em;border:none}.car-rent-general table th{width:10em}
                .car-rent-general tr:nth-of-type(odd){background-color:#f1f1f1}@media (min-width:768px){.car-rent-container{font-size:20px}.car-rent-wrp{width:80%;margin:0 auto}
                .car-rent-container img{height:25em}}@media (min-width:964px){.car-rent-container h2{font-size:2.5em;}.car-rent-general{padding:4em}}
                @media (min-width:1400px){.car-rent-container{font-size:25px}.car-rent-container h2{font-size:3em}.car-rent-wrp{width:70%}}
            </style>
            <div class="car-rent-container">
                <div class="car-rent-wrp">
                    <h2>
                        You have booked a car on the
                        <a href="https://car-rent-theta.vercel.app" target="_blank" rel="noopener noreferrer">
                            Car rental application
                        </a>
                        &#127881; &#128663; &#128640;
                    </h2>
                    <img src="https://car-rent-theta.vercel.app/${img}" alt="" />
                    <div class="car-rent-general">
                        <h3>This message confirms your booking</h3>
                        <h4>Short description:</h4>
                        <table style="width: 100%;">
                            <tr>
                                <th>Car type:</th>
                                <td>${title}</td>
                            </tr>
                            <tr>
                                <th>Car description:</th>
                                <td>${text}</td>
                            </tr>
                            <tr>
                                <th>Price per hour:</th>
                                <td>$${price}</td>
                            </tr>
                            <tr>
                                <th>Total rent time:</th>
                                <td>${total} hours</td>
                            </tr>
                            <tr>
                                <th>Total cost time:</th>
                                <td>$${totalCost}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
    };

    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({ message: `Error occurred`, error });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json(req);
        }
    });
}