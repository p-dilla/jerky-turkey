// dependencies
var express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    mongoose = require('mongoose'),
    jwt    = require('jsonwebtoken'),
    hash = require('bcrypt-nodejs'),
    path = require('path'),
    passport = require('passport'),
    MongoStore = require('connect-mongo')(expressSession),
    localStrategy = require('passport-local' ).Strategy;

// mongoose
mongoose.connect('mongodb://localhost/gresource');

// user schema/model
var User = require('./models/user.js');

// create instance of express
var app = express();

// require routes
var userRoutes = require('./routes/user.js');
var linkRoutes = require('./routes/weblink.js');
var projectRoutes = require('./routes/project.js');
var listRoutes = require('./routes/list.js');
var searchRoutes = require('./routes/search.js');

// define middleware
app.use(express.static(path.join(__dirname, '../client')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    store: new MongoStore({
        url: 'mongodb://localhost/gresource'
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use('/user/', userRoutes);
app.use('/link/', linkRoutes);
app.use('/project/', projectRoutes);
app.use('/list/', listRoutes);
app.use('/search/', searchRoutes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// error handlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;
