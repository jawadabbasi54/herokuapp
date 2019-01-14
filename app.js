/*var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

	
app.post('/hello', function (req, res, next) {

  var userName = req.body.user_name;

  var botPayload = {
    text : 'Hello ' + userName + ', Welcome to Abode ! I\'ll be your guide.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }


  });
*/
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/hello', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
//app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
//})