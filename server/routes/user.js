var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    jwt    = require('jsonwebtoken'),
    User = require('../models/user.js');

//register ==================================
router.post('/register', function(req, res) {
  User.register(new User({ 
            username: req.body.username, 
            email : req.body.email,
            listSubs : [req.body.listSubs],
            projects: [req.body.projects],
            weblinks: [req.body.weblinks] }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'});
    });
  });
});

//login ========================================
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.log(err);
      return res.status(500).json({err: err});
    }
    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'});
      }

      //create token
      var token = jwt.sign({foo : 'bar'}, 'secret');
      res.status(200).json({status: 'Login successful!',  token: token});
    });
    
  })(req, res, next);
});

//logout ========================================
router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({status: 'Bye!'});
});

//get current user ====================
router.get('/getCurrent', function(req, res){
  return res.send(req.user);
});

//get all users ====================
router.get('/findall', function(req, res){
  User.find(function(err, users){
    if(err)
      res.send(err);

    res.json(users);
  });
});

//get single ==================================
router.get('/find/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, user){
    if(err)
      res.send(err);

    res.json(user);
  });
});

//update ==================================
router.put('/update/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, user){
    if(err)
      res.send(err);
    user.email = req.body.email;

    user.save(function(err){
      if(err)
        res.send(err);

    res.json(user);
    });
  });
});

module.exports = router;