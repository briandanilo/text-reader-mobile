require('dotenv').config()

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  PetEvent = require('./api/models/petEventModel'),
  bodyParser = require('body-parser');

var mongoUser = 'petstatus'
var mongoPass = 'catsanddogs';
var mongoURL = "mongodb://" + mongoUser + ":" + mongoPass + "@ds151662.mlab.com:51662/djb"

mongoose.connect(mongoURL, {useMongoClient: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var petEventRoutes = require('./api/routes/petEventRoutes');
petEventRoutes(app);

app.listen(port);

console.log('Pet Status RESTful API server started on: ' + port);
