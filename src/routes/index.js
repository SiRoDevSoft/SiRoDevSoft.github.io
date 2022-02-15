const {Router} = require('express');
const { contentType } = require('express/lib/response');
const nodemailer = require('nodemailer');
const dotenv = require ('dotenv');
const router = Router();

dotenv.config();
router.post('/send-email', async(req, res) => {
 const { name, email, message} = req.body
  //console.log(req.body);

  contentHTML = `
    <h1> User Information </h1>
    <ul>
      <li>User Name: ${name}</li>
      <li>User Email: ${email}</li>
    </ul>
    <ul>
      <p>Message: ${message}</p>
    </ul>
  `;
  // configuramos el host para el envio
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
  //       // user: process.env.EMAIL,
  //       // pass:process.env.PASSWORD
        user: 'silvioro.ads11@gmail.com',
        pass:'sjceephboywsmcib'
    },
    tls:{
      rejectUnauthorized:false
    }
  })
  // configuramos hacia donde lo enviamos al correo
  
  const info = await transporter.sendMail({
    from:"'Contact Portfolio' <silvioro.ads11@gmail.com>",
    to: 'silviojonathanrojas@gmail.com',
    subject: 'Formulario de contacto',
    html: contentHTML
  })
 
  console.log('Message sent', info.messageId);

  res.redirect('/success.html');

}) 

module.exports = router; 