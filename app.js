require('dotenv').config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' ); 
const { mailer } = require( './mailer' ); 

const app = express();
const port = process.env.PORT || 8080;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use( bodyParser.json() ); 

app.post( '/contact', ( req, res ) => {
  mailer.sendTestEmail( req.body );
  res.send( "cleared the endpoint" );
} ); 


app.listen(port, function(req, res){
  console.log('Server is running at port: ',port);
});