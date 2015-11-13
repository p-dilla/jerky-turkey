var express  = require('express');
// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// API ROUTES -------------------
module.exports = function(app) {

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/api/authenticate', function(req, res) {

    // find the user
    User.findOne({
      username: req.body.username
    }, function(err, users) {

      if (err) throw err;

      if (!users) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {

        // check if password matches
        if (users.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(users, app.get('superSecret'), {
            expiresInMinutes: 1440 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   

      }

    });
  });
};