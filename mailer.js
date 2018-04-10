let aws = require('aws-sdk');
let nodemailer = require('nodemailer');
let ses = require( "nodemailer-ses-transport" );
// configure AWS SDK
// aws.config.loadFromPath('./config.json');

var transporter = nodemailer.createTransport(ses({
    accessKeyId: 'AKIAJOBUSCS5TCZEWPZQ',
    secretAccessKey: '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' 
}));







// send some mail
const mailer = {
    sendTestEmail: () => transporter.sendMail({
    from: '532Packard@gmail.com',
    to: 'cameron.grams.2@gmail.com',
    subject: 'Message',
    text: 'NEW MESSAGE!!!!',
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
