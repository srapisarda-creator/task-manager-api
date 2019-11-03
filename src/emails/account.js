const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sergio.rapisarda22@gmail.com',
        subject: 'Welcome to the app.',
        text: `Welcome to the app, ${name}.  Let us know what you think!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sergio.rapisarda22@gmail.com',
        subject: "Sorry you're leaving!",
        text: `Sorry to see you go, ${name}.  Let us know what you think!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}