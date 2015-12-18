var express = require('express'),
    router = express.Router(),
    jwt    = require('jsonwebtoken'),
    Project = require('../models/project.js');

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

  var project = new Project();
  project.projectTitle = req.body.projectTitle;
  project.projectSummary = req.body.projectSummary;
  project.website = req.body.website;
  project.isPrivate = req.body.isPrivate;
  project.createdBy = req.body.createdBy;
  project.members = [req.body.members];
  project.weblinks = [req.body.weblinks];

  project.save(function(err){
    if(err){
      res.send(err);
    }
    else {
      res.json({message: 'Project Created!'});
    }
  });
});

//update ==================================
router.put('/update/:project_id', function(req, res) {
  Project.findById(req.params.project_id, function(err, project){
    if(err)
      res.send(err);
    project.projectTitle = req.body.projectTitle;
    project.projectSummary = req.body.projectSummary;
    project.website = req.body.website;
    project.isPrivate = req.body.isPrivate;
    project.createdBy = req.body.createdBy;
    project.members = req.body.members;
    project.weblinks = req.body.weblinks;

    project.save(function(err){
      if(err)
        res.send(err);

    res.json(project);
    });
  });
});

//remove ==================================
router.delete('/delete/:project_id', function(req, res) {
  Project.findByIdAndRemove(req.params.project_id, function(err){
    if(err)
      res.send(err);

    res.json({message: 'Project has been removed!'});
  });
});

module.exports = router;