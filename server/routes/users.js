
var User = require('../models/users');
var passport = require('passport');

module.exports = function(app) {
// routes ======================================================================
// api ---------------------------------------------------------------------
// get all USERs
    app.get('/users', function(req, res) {

        // use mongoose to get all in the database
        User.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return all in JSON format
        });
    });

    // get single USER
    app.get('/user/:users_id', function(req, res) {

        // use mongoose to get all in the database
        User.findById(req.params.users_id, function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return user in JSON format
        });
    });

    // create USER and send back after creation
    app.post('/register', function(req, res) {
        // create, information comes from AJAX request from Angular
        User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            listSubs : [req.body.listSubs],
            projects: [req.body.projects],
            weblinks: [req.body.weblinks],
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

    // delete USER
    app.delete('/remove/:users_id', function(req, res) {
        User.remove({
            _id : req.params.users_id
        }, function(err, users) {
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

    //update USER
    app.put('/update/:users_id', function(req, res) {
        // use user model to find the user
        User.findById(req.params.users_id, function(err, users) {

            if (err)
                res.send(err);

            users.username = req.body.username;
            users.email = req.body.email;
            users.password = req.body.password;
            users.listSubs = [req.body.listSubs];
            users.projects = [req.body.projects];
            users.weblinks = [req.body.weblinks];

            // save the user
            users.save(function(err) {
                if (err)
                    res.send(err);

                res.json(users);
            });

        });
    });
};