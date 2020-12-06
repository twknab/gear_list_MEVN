const nodemailer = require("nodemailer");
require("dotenv").config({ path: "variables.env" });

module.exports = {
  sendContactFormDataByEmail: (req, res) => {
    var transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST_SERVER,
      port: process.env.EMAIL_SMTP_HOST_PORT,
      secure: true, // use TLS
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    if (!req.body) {
      const error = {
        errors: {
          invalid: {
            message: "There's been an error with the form."
          }
        }
      };
      return res.status(500).json(error.errors);
    }

    // Format email and send
    // TODO: ADD CAPTCHA
    const HTMLString = `
    <h1>💬 New Message!</h1>
    <p>A pigeon from the woods 🌲 of the sasquat.ch has delivered you a message from <b>GearList</b>. Here are some details:</p>
    <ul>
      <li><b>First Name:</b> ${req.body.firstName}</li>
      <li><b>Last Name:</b> ${req.body.lastName}</li>
      <li><b>Email:</b> ${req.body.email} </li>
      <li><b>Reason for Contact:</b> ${req.body.reason}</li>
    </ul>
    <h2>✉️ Message From ${req.body.firstName}:</h2>
    <div>${req.body.message}</div>
    `;

    var mailOptions = {
      from: process.env.EMAIL_FROM_FIELD,
      to: process.env.EMAIL_TO_FIELD,
      replyTo: req.body.email,
      subject: "Coo Coo 🕊 New Message!",
      html: HTMLString
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        const error = {
          errors: {
            invalid: {
              message: "There's been an error with the mailer."
            }
          }
        };
        return res.status(500).json(error.errors);
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ success: "Success" });
      }
    });
  }
};
