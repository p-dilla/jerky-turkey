// server.js
    // set up ========================
    var express  = require('express');
    var mongoose = require('mongoose');                     
    var morgan = require('morgan');             
    var bodyParser = require('body-parser');    
    var methodOverride = require('method-override'); 
    var app = module.exports = express();
    require('./routes/users')(app);
    require('./routes/lists')(app);
    require('./routes/links')(app);
    require('./routes/projects')(app);

    // configuration =================
    mongoose.connect('mongodb://localhost/gresource');     

    app.use(express.static(__dirname + '/client'));                 
    app.use(morgan('dev'));                                         
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

    // Base Setup =================
    var Project = require('./models/projects');
    var List = require('./models/lists');
    var Linker = require('./models/links');

// application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); 
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    