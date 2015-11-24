var express = require('express'),
    router = express.Router(),
    Project = require('../models/project.js');

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

//get all ==================================
router.get('/findall', function(req, res) {
  Project.find(function(err, projects){
    if(err)
      res.send(err);

    res.json(projects);
  });
});

//get single ==================================
router.get('/find/:project_id', function(req, res) {
  Project.findById(req.params.project_id, function(err, project){
    if(err)
      res.send(err);

    res.json(project);
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
    project.weblinks = [req.body.weblinks];

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

//get by user ==================================****
router.get('/findby/:createdBy', function(req, res) {
  if (req.params.createdBy) {
    Project.find({ createdBy: req.params.createdBy }, function (err, projects) {
        res.json(projects);
    });
  }
});

module.exports = router;