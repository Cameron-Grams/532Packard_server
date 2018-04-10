let nodemailer = require('nodemailer');
let aws = require('aws-sdk');
// configure AWS SDK
aws.config.loadFromPath('./config.json');

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

// send some mail
const mailer = {
    sendTestEmail: () => transporter.sendMail({
    from: '532Packard@gmail.com',
    to: 'cameron.grams.2@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets sent!',
    ses: { // optional extra arguments for SendRawEmail
        Tags: [{
            Name: 'tag name',
            Value: 'tag value'
        }]
    }
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    })
};







module.exports={ mailer }; 