const nodemailer = require("nodemailer");

const postContact = async (req, res) => {
  const dataUser = req.body;

  nodemailer
    .createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
    .sendMail({
      from: dataUser.email,
      to: process.env.MAIL_RECEIVER,
      subject: dataUser.subject,
      html: `<pre> ${dataUser.description} </pre>`,
    });

  res.status(200).json(dataUser);
};

module.exports = {
  postContact,
};
