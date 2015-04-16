'use strict';

var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

// TODO: make this more secure
// TODO: need to put this in a config file:
var smtpTransport = nodemailer.createTransport("SMTP",{
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
  // auth: {
  //     XOAuth2: {
  //       client_email: '926496417071-e27hrhgd5ups1incaihvndca9u6qni2o@developer.gserviceaccount.com',
  //       clientId: '926496417071-e27hrhgd5ups1incaihvndca9u6qni2o.apps.googleusercontent.com',
  //       client_secret: 'Jph3KbeFr_5Z6GfMIqm9jUUp',
  //       auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  //       token_uri: 'https://accounts.google.com/o/oauth2/token'
  //     }
  //   }
  //: {"web":{"auth_uri":"https://accounts.google.com/o/oauth2/auth","client_secret":"Jph3KbeFr_5Z6GfMIqm9jUUp","token_uri":"https://accounts.google.com/o/oauth2/token","client_email":"926496417071-e27hrhgd5ups1incaihvndca9u6qni2o@developer.gserviceaccount.com","redirect_uris":["https://www.example.com/oauth2callback","https://localhost:3000/oauth2callback"],"client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/926496417071-e27hrhgd5ups1incaihvndca9u6qni2o@developer.gserviceaccount.com","client_id":"926496417071-e27hrhgd5ups1incaihvndca9u6qni2o.apps.googleusercontent.com","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","javascript_origins":["https://www.example.com","https://localhost:3000/"]}}
});


router.post('/send',function(req,res) {
  var ship_address1 = req.body.ship_address1 ? req.body.ship_address1 : 'Same as billing',
    ship_city = req.body.ship_city ? req.body.ship_city : 'Same as billing',
    ship_state = req.body.ship_state? req.body.ship_state : 'Same as billing',
    ship_zip = req.body.ship_zip? req.body.ship_zip : 'Same as billing',
    needs_to_ship = req.body.sendBracelet ? 'New Shipment Needed!' : 'No Shipment',
    mailOptions = {
    to : 'heartandhammerorg@gmail.com',
    subject : 'New Heart and Hammer Donation: ' + needs_to_ship,
    html : '<h2><b>Send this person a bracelet? </b>'+req.body.sendBracelet + '</h2>' +
      '<br><b>donation amount: </b> '+req.body.amount +
      '<br><b>First Name: </b> '+req.body.first_name +
      '<br><b>Last Name: </b> '+req.body.last_name +
      '<br><b>Address Line 1: </b> '+ ship_address1 +
      '<br><b>Address Line 2: </b> '+ req.body.ship_address2 +
      '<br><b>City: </b> '+ ship_city +
      '<br><b>State: </b> '+ ship_state +
      '<br><b>Zip: </b> '+ ship_zip +
      '<br><b>Email: </b> '+req.body.email +
      '<br><b>Phone: </b> '+req.body.night_phone_a
  } 

  smtpTransport.sendMail(mailOptions, function(error, response){
    if (error) {
      console.log(error);
      res.send(404);
    } else {
      res.send(200);
    }
  });
});

module.exports = router;