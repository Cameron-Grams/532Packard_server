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
    from: '532Packard@gmail.com',
    to: [ '532Packard@gmail.com', 'cameron.grams.2@gmail.com' ],
    subject: `New Message from ${ messageObject.name }`,
    html: `<h1>${ messageObject.name}</h1>
           <h2>from ${ messageObject.email }</h2>
           <h3>sent the following message: </h3>
           <h3>${ messageObject.message }</h3>`
    }, ( err, info ) => {
        console.log( "Information from response ", info.envelope );
        console.log( "Error from response: ", err );
    })
};







module.exports={ mailer }; 
