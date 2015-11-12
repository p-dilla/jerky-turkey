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
    require('./routes/weblinks')(app);
    require('./routes/projects')(app);

    // configuration =================
    mongoose.connect('mongodb://localhost/gresource');  
    app.use(express.static(__dirname + '../client'));                 
    app.use('/js', express.static(__dirname + '/../client/js'));
    app.use('/styles', express.static(__dirname + '/../client/styles'));
    app.use('/views', express.static(__dirname + '/../client/views'));
    app.use(morgan('dev'));                                         
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

// application -------------------------------------------------------------
    app.get('/', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('../client/index.html')); 
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    