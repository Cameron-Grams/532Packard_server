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
    text: 'second config!'
    }, ( err, info ) => {
        console.log( "Information from response ", info.envelope );
        console.log( "Error from response: ", err );
    })
};







module.exports={ mailer }; 
