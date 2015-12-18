var express = require('express'),
    router = express.Router(),
    jwt    = require('jsonwebtoken'),
    List = require('../models/list.js');

//Middleware===========================
router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
 
  //parse token
  var realToken = token.split(" ");
  token = realToken[1];

  // decode token
  if(token) {

    // verifies secret and checks exp
    jwt.verify(token, 'secret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } 
      else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });
  } 
  else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
  }
});

//create ==================================
router.post('/create', function(req, res, next) {

  var list = new List();
  list.listName = req.body.listName;
  list.category = req.body.category;
  list.weblinks = [req.body.weblinks];
  list.createdBy = req.body.createdBy;

  list.save(function(err){
    if(err){
      res.send(err);
    }
    else {
      res.json({message: 'List Created!'});
    }
  });
});

//update ==================================
router.put('/update/:list_id', function(req, res) {
  List.findById(req.params.list_id, function(err, list){
    if(err)
      res.send(err);
    list.listName = req.body.listName;
    list.category = req.body.category;
    list.weblinks = req.body.weblinks;
    list.createdBy = req.body.createdBy;

    list.save(function(err){
      if(err)
        res.send(err);

    res.json(list);
    });
  });
});

//remove ==================================
router.delete('/delete/:list_id', function(req, res) {
  List.findByIdAndRemove(req.params.list_id, function(err){
    if(err)
      res.send(err);

    res.json({message: 'List has been removed!'});
  });
});

module.exports = router;