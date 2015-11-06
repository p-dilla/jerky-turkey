// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();            
    var mongoose = require('mongoose');                     
    var morgan = require('morgan');             
    var bodyParser = require('body-parser');    
    var methodOverride = require('method-override'); 

    // configuration =================

    mongoose.connect('mongodb://localhost/gresource');     

    app.use(express.static(__dirname + '/client'));                 
    app.use(morgan('dev'));                                         
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

    // Base Setup =================
    var User = require('./models/user');

    // routes ======================================================================
    // api ---------------------------------------------------------------------
    // get all 
    app.get('/api/users', function(req, res) {

        // use mongoose to get all in the database
        User.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return all in JSON format
        });
    });

    // create  and send back after creation
    app.post('/api/users', function(req, res) {
        // create, information comes from AJAX request from Angular
        User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            done : false
        }, function(err, user) {
            if (err)
                res.send(err);

            // get and return all after you create another
            User.find(function(err, users) {
                if (err)
                    res.send(err)
                res.json(users);
            });
        });

    });

    // delete
    app.delete('/api/users/:user_id', function(req, res) {
        User.remove({
            _id : req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            // get and return all after you create another
            User.find(function(err, users) {
                if (err)
                    res.send(err)
                res.json(users);
            });
        });
    });

// application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); 
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    