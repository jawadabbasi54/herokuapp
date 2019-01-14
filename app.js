var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
// test route
app.post('/getmessage', function (req, res) {
console.log("body:",req.body);
 // res.status(200).send(req.body);
  });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

	
// app.post('/hello', function (req, res, next) {

//   var userName = req.body.user_name;

//   var botPayload = {
//     text : 'Hello ' + userName + ', Welcome to Abode ! I\'ll be your guide.'
//   };
//   // Loop otherwise..
//   if (userName !== 'slackbot') {
//     return res.status(200).json(botPayload);
//   } else {
//     return res.status(200).end();
//   }


//   });
