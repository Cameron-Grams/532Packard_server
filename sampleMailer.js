
Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
Click here to enable desktop notifications for Gmail.   Learn more  Hide

  More 
16 of 5,390
 
nodemailer 
Inbox
x 

Cameron G <cameron.grams@gmail.com>
AttachmentsApr 5 (1 day ago)
to me 
from 5 April 


Attachments area
	
Click here to Reply or Forward
13.71 GB (91%) of 15 GB used
Manage
Terms - Privacy
Last account activity: 34 minutes ago
Details


const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const winston = require('winston');

const config = require('./config/main.config');

aws.config.loadFromPath('./src/modules/mailer/config/aws-config.json');

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01',
    }),
});
/*
// send some mail
transporter.sendMail({
    from: 'slabej@osuchane.sk',
    to: 'michal.slabej94@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets sent!',
}, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
});
*/

const mailer = {
    sendregistrationEmail: (from, to, subject, text, html, cb) => {
        transporter.sendMail({
            from,
            to,
            subject: `${subject}${config.subjectSuffix}`,
            text,
            html,
        }, (err, data) => {
            if (err) {
                winston.error(err);
            }
            if (data) {
                cb();
            }
        });
    },
};

module.exports = { mailer };








====================================



Michal Slabejaws-config.json
9:58 AMMichal Slabej{     "region": "eu-west-1"     }
9:58 AMMichal Slabejmain.config.js
9:58 AMMichal Slabejmodule.exports = {     subjectSuffix: '', };


region mailer




app.post('/mail', (req, res) => {
    mailer.sendMail({
        from: req.body.from,
        to: 'someone@thing',
        subject: 'Message',
        text: req.body.text,
    }, (err, info) => {
        console.log(err);
        console.log(info);
    });
    res.send('email is faar faar away');
});
nodemailer.txt
Displaying nodemailer.txt.
