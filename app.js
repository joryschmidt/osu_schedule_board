var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var sessions = require('client-sessions');
var helmet = require('helmet');

var main = require('./routes/main');
var flight = require('./routes/flight');
var plane = require('./routes/plane');
var notice = require('./routes/notice');
var admin = require('./routes/admin');

var db = 'mongodb://' + process.env.IP + '/sched';
mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URI || db, { useMongoClient: true });

var app = express();

app.use(sessions({
  cookieName: 'session',
  secret: process.env.SCHED_SESSION,
  duration: 720 * 60 * 60 * 1000,
  activeDuration: 720 * 60 * 60 * 1000
}));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));



// set cors headers for development
var cors = require('cors');
app.use(cors());


// REMEMBER TO REQUIREADMIN LATER

app.use('/login', express.static(path.join(__dirname, 'static', 'login.html')));
app.use('/admin', requireAdmin, express.static(path.join(__dirname, 'admin')));

// main routes come first or else logging in doesn't work
app.use('/', main);
app.use('/', redirectIfNotLoggedIn, express.static(path.join(__dirname, 'frontend', 'dist', 'frontend')));


// REQUIREADMIN
app.use('/admin', requireAdmin, admin);
app.use('/flight', requireLogin, flight);
app.use('/plane', requireLogin, plane);
app.use('/notice', requireLogin, notice);


// var port = process.env.PORT || 8080
var port = 8080;
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
  else {
    res.sendStatus(404);
  }
}

function redirectIfNotLoggedIn(req, res, next) {
  if (req.session.user) next();
  else res.redirect('/login');
}
