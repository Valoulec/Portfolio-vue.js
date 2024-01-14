// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


// Utilisez cors comme middleware
app.use(cors());

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  let { nom, prenom, email, objet, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'valentin.leclerc78@gmail.com',
      pass: 'Valenkiler1.'
    }
  });

  let mailOptions = {
    from: email,
    to: 'valentin.leclerc78@gmail.com',
    subject: `${objet} - ${nom} ${prenom}`,
    text: message,
    replyTo: 'valentin.leclerc78@gmail.com'
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
