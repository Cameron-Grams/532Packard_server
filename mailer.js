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
    sendTestEmail: ( messageObject ) => transporter.sendMail({
    from: 'cameron.grams.2@gmail.com',
    to: '532Packard@gmail.com',
    subject: `New Message from ${ messageObject.name }`,
    text: `${ messageObject.name }\n
           from email ${ messageObject.email } \n
           sent the following message: \n
            ${ messageObject.message }`,
    html: `<h3>${ messageObject.name}</h3>
           <p>from ${ messageObject.email }</p>
           <p>sent the following message: </p>
           <p>${ messageObject.message }</p>`
    }, ( err, info ) => {
        console.log( "Information from response ", info.envelope );
        console.log( "Error from response: ", err );
    })
};







module.exports={ mailer }; 
