// server.js
    // set up ========================
    var express  = require('express');
    var app = module.exports = express();
    var mongoose = require('mongoose');
    var passport = require('passport');
    var flash = require('connect-flash');                     
    var morgan = require('morgan');  
    var cookieParser = require('cookie-parser');           
    var bodyParser = require('body-parser');    
    var session      = require('express-session');
    var methodOverride = require('method-override'); 

    // configuration =================
    var configDB = require('./config/database.js');
    mongoose.connect(configDB.database);  

    app.use('/', express.static(__dirname + '/../client'));
    app.use(morgan('dev')); 
    app.use(cookieParser());                                        
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

    // required for passport
    app.use(session({ secret: 'secret123' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

    // routes ==============================
    require('./routes/users')(app);
    require('./routes/lists')(app);
    require('./routes/weblinks')(app);
    require('./routes/projects')(app);
    require('./routes/app')(app, passport);

// application =====================================
    app.get('/', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('../client/index.html')); 
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    