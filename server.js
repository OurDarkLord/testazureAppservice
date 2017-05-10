


var express = require('express')
  , http = require('http')
  , nconf = require('nconf')
  , path = require('path')
  , everyauth = require('everyauth')
  , Recaptcha = require('recaptcha').Recaptcha
  , bodyparser = require("body-parser");



var app = express();
app.use(bodyparser.json());
app.use(bodyparser()); // get information from html forms

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
});


app.configure('development', function () {
    app.use(express.errorHandler());
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



var server = http.createServer(app);

var Questions = ["When you were young, what did you want to be when you grew up?","What is the first name of the person you first kissed?","Who was your childhood hero?" ];

app.get('/pullQuestions', function (req, res) {
	console.log("kek");
	res.json({"question1":Questions[0],"question2":Questions[1],"question3":Questions[2]});
});

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});