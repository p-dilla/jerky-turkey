// server.js
    // set up ========================
    var express  = require('express');
    var mongoose = require('mongoose');                     
    var morgan = require('morgan');             
    var bodyParser = require('body-parser');    
    var methodOverride = require('method-override'); 
    var jwt = require('jsonwebtoken');
    var config = require('./config');
    var app = module.exports = express();
    
    // configuration =================
    mongoose.connect(config.database);  
    app.set('superSecret', config.secret);

    app.use(morgan('dev'));  

    app.use('/', express.static(__dirname + '/../client'));
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

    require('./routes/users')(app);
    require('./routes/lists')(app);
    require('./routes/weblinks')(app);
    require('./routes/projects')(app);
    require('./routes/authenticate')(app);

// application -------------------------------------------------------------
    app.get('/', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('../client/index.html')); 
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    