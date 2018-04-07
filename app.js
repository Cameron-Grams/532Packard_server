var express = require( 'express' );
var bodyParser = require( 'body-parser' ); 
// var path = require('path');
// var nodeMailer = require('nodemailer');

var app = express();
var port = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use( bodyParser.json() ); 

app.get( '/', ( req, res ) => {
    res.json( { message: "Successful return" } ); 
})

app.post( '/contact', ( req, res ) => {
    const response = `Boagrius says: ${ req.body.message }`; 
    res.json( { message: response } ); 
} );


app.listen(port, function(req, res){
  console.log('Server is running at port: ',port);
});