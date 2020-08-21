/**
 * Created by Corvus on 3/16/2017.
 */
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const useragent = require('express-useragent');
const nodemailer = require('nodemailer');

// Get our API routes
//const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Useragent for device and browser detection
app.use(useragent.express());

// Set our api routes
app.get('/api', function(req, res){

  if (req.useragent.isDesktop === true) {
    res.sendFile(req.useragent);
  }
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/** Contact Email **/

app.post('/mail', contactEmail);

function contactEmail(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'jack.da.ripper1888.wow@gmail.com', // Your email id
      pass: 'temp12345' // Your password
    }
  });

  var mailOptions = {
    from: 'jack.da.ripper1888.wow@gmail.com', //
    to: req.body.leademail, // list of receivers
    subject: req.body.emailsubject, // Subject line
    text: emailbody //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      console.log(req.body.emailsubject);
      res.json({yo: info.response});
    };
    transporter.close();
  });
}



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
