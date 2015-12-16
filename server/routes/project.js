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