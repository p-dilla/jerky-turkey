var express = require('express');
var app = express();
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
            listSubs : req.body.listSubs,
            projects: req.body.projects,
            linkers: req.body.linkers,
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