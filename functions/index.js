const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer=require('nodemailer');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp();
//google account credentials
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'will.givecard@gmail.com',
    pass: 'W615Peters!'
  }
});

exports.sendEmail= functions.firestore.document('users/{userId}').onCreate((snap, context)=>{
    const mailOptions = {
      from: `will.givecard@gmail.com`,
      to: snap.data().email,
      subject: 'Org Account Created',
      html: `<h1>New User Creation</h1>
        <p> Greetings, ${snap.data().firstname}!</p>
        <p> You received this email because the administrator of your organization added you to their page within GiveCard's digital case management system.</p>
        <p> To complete your registration, log into the case management system using the email below.</p>
       <p> <b>Email: </b>${snap.data().email} </p>`
    };

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error)
        return
      }
      console.log("Sent!")
  });
})


