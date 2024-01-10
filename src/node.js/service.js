const nodemailer = require('nodemailer');
const express = require('express');

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'valentin.leclerc78@gmail.com',
    pass: 'Vmankiler1.'
  }
});

app.post('/envoyer-email', (req, res) => {
  const { nom, prenom, email, objet, message } = req.body;

  const mailOptions = {
    from: 'valentin.leclerc78@gmail.com',
    to: 'valentin.leclerc78@gmail.com',
    subject: objet,
    text: `Nom: ${nom}\nPrenom: ${prenom}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.status(200).send('E-mail envoyé avec succès.');
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});