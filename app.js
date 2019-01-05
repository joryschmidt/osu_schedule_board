var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var sessions = require('client-sessions');

var main = require('./routes/main');
// var user = require('./routes/user');
var admin = require('./routes/admin');

var db = 'mongodb://' + process.env.IP + '/sched';

mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URI || db, { useMongoClient: true });

var app = express();

app.use(sessions({
  cookieName: 'session',
  secret: process.env.SCHED_SESSION,
  duration: 8 * 60 * 60 * 1000,
  activeDuration: 20 * 60 * 1000
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'views')));

app.use('/', main);
// app.use('/user', user);
app.use('/admin', requireAdmin, admin);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('App listening on port', port);
});

// Custom middleware
function requireAdmin(req, res, next) {
  if (req.session.user && req.session.user.admin) {
    next();
  } else {
    res.redirect('/');
  }
}

function requireLogin(req, res, next) {
  if (req.session.user) next();
  else res.status(404).json(null);
}