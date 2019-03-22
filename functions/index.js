const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const firetore = require ('firebase/firestore')

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// firebase functions:config:set gmail.username="username@gmail.com" gmail.password="yoursecretpasswordhere"


const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

const APP_NAME = 'echo'
const userId = functions.auth.user()


const contact = { name: 'Steve', email: 'kparine314@gmail.com' }



exports.sendWelcomeEmail = userId.onCreate((user) => {
  
  const email = 'kparine314@gmail.com' // The email of the user.
  const displayName = user.displayName // The display name of the user.

  return sendWelcomeEmail(email, displayName)
})


exports.sendByeEmail = userId.onDelete((user) => {
  const email = user.email
  const displayName = user.name

  return sendGoodbyeEmail(email, displayName)
})


exports.getEmergContacts = functions.firestore.document('users/{userId}')
  .onUpdate((change, context)=> {


    const email = 'kparine314@gmail.com'

    const userId = context.params.userId
    const tripNotes = change.after.data().trip[0].notes
    const returnTime = change.after.data().trip.createdAt  
      
      if (trip) {
        return getEmergContacts(email, tripNotes, returnTime)
      } else {
        return sendReturnConfirm(email)
      }
  })



function getEmergContacts(email, tripNotes, returnTime) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: 'kparine314@gmail.com'
  }
  mailOptions.subject= `Your friend has returned from their trip.`
  mailOptions.text = `Howdy from ${APP_NAME}. Your friend has created a trip, ${tripNotes}. They are expected back at, ${returnTime}` 
  return mailTransport.sendMail(mailOptions)
}


function sendReturnConfirm(email) {
  const mailOptions ={
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: 'kparine314@gmail.com'
  }
  mailOptions.subject = `Your Friend has created a trip ${APP_NAME}`
  mailOptions.text = `Howdy from ${APP_NAME} ! Your friend has returned safely.`
  return mailTransport.sendMail(mailOptions)
}

function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  }

  mailOptions.subject = `Welcome to ${APP_NAME}`
  mailOptions.text = `Howdy ${displayName || ''}! Welcome to ${APP_NAME}. Buy your friends a beer, because it won't be us looking for you.`
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New welcome email sent to:', email)
  })
}

function sendGoodbyeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  }

  mailOptions.subject = `Bye!`
  mailOptions.text = `Howdy ${displayName || ''}, your ${APP_NAME} account has been deleted. Now get lost.`
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Account deletion confirmation email sent to:', email)
  })
}
