
var User = require('../models/users');
module.exports = function(app) {
// routes ======================================================================
// api ---------------------------------------------------------------------

//test data ============
    app.get('/api/setup', function(req, res) {

      // create a sample user
      var nick = new User({ 
        username: 'Nick Cerminara', 
        password: 'password'
      });

      // save the sample user
      nick.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
      });
    });

// get all USERs
    app.get('/api/users', function(req, res) {

        // use mongoose to get all in the database
        User.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return all in JSON format
        });
    });

    // get single USER
    app.get('/api/users/:users_id', function(req, res) {

        // use mongoose to get all in the database
        User.findById(req.params.users_id, function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return user in JSON format
        });
    });

    // create USER and send back after creation
    app.post('/api/users', function(req, res) {
    // create a sample user
    console.log(req.body);
      var newUser = new User({ 
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        listSubs : [req.body.listSubs],
        projects: [req.body.projects],
        weblinks: [req.body.weblinks]
      });

      // save the sample user
      newUser.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json(newUser);
      });
    });

    // delete USER
    app.delete('/api/users/:users_id', function(req, res) {
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
    app.put('/api/users/:users_id', function(req, res) {
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