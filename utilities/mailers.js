require('dotenv').config()
const nodemailer = require("nodemailer");

async function complaintNotification(postDetails) {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEM_HOST,
    port: 587,
    auth: {
      user: process.env.NODEM_USER,
      pass: process.env.NODEM_PW,
    },
  });

  await transporter.sendMail({
    from: '"Resident Complaint"' + postDetails.from,
    to: '"ADMIN" adriel.kuhn98@ethereal.email',
    subject: postDetails.title,
    text: `Complaint. From: ${postDetails.user}, Reason: ${postDetails.reason}, Body: ${postDetails.message}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Complaint</title>
      </head>
      <body style="margin: 0%;">
      
          <header style="padding: 10px; border-bottom: black solid 3px; background-color: lightskyblue; display: flex; justify-content: space-between;">
              <img style="border: solid black 4px;" src="https://sheltered-fortress-48000.herokuapp.com/images/logo.png" alt="">
              <div style="flex-grow: 5; text-align: center;">
                 <h1 style="text-align: center; margin: 0%;">C-S-S Neighborhoods</h1>
                  <h2 style="text-align: center; margin: 0%;">Formal Complaint <br><br> From User: ${postDetails.user} <br> Email: ${postDetails.from}</h2> 
              </div>
              
          </header>
          
          <h2>Reason for Complaint: ${postDetails.reason}</h2>
      
          <h2>Complaint Body: ${postDetails.message}</h2>
      
      </body>
      </html>
      `,
  });
}

async function complimentNotification(postDetails) {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEM_HOST,
    auth: {
      user: process.env.NODEM_USER,
      pass: process.env.NODEM_PW,
    },
  });

  await transporter.sendMail({
    from: '"Resident Compliment"' + postDetails.from,
    to: '"ADMIN" adriel.kuhn98@ethereal.email',
    subject: postDetails.title,
    text: `Compliment. From: ${postDetails.user}, Body: ${postDetails.message}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Complaint</title>
      </head>
      <body style="margin: 0%;">
      
          <header style="padding: 10px; border-bottom: black solid 3px; background-color: lightskyblue; display: flex; justify-content: space-between;">
              <img style="border: solid black 4px;" src="https://sheltered-fortress-48000.herokuapp.com/images/logo.png" alt="">
              <div style="flex-grow: 5; text-align: center;">
                 <h1 style="text-align: center; margin: 0%;">C-S-S Neighborhoods</h1>
                  <h2 style="text-align: center; margin: 0%;">User Compliment <br><br> From User: ${postDetails.user} <br> Email: ${postDetails.from}</h2> 
              </div>
              
          </header>
      
          <h2>Compliment Body: ${postDetails.message}</h2>
      
      </body>
      </html>
      `,
  });
}

module.exports = {complaintNotification, complimentNotification}
