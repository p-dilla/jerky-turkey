var express = require('express'),
    router = express.Router(),
    Weblink = require('../models/weblink.js'),
    List = require('../models/list.js'),
    Project = require('../models/project.js');

//LINK=======================================
//get all ==================================
router.get('/link/findall', function(req, res) {
  Weblink.find(function(err, weblinks){
    if(err)
      res.send(err);

    res.json(weblinks);
  });
});

//get single ==================================
router.get('/link/find/:weblink_id', function(req, res) {
  Weblink.findById(req.params.weblink_id, function(err, weblink){
    if(err)
      res.send(err);

    res.json(weblink);
  });
});

//get by user ==================================
router.get('/link/findby/:createdBy', function(req, res) {
  if (req.params.createdBy) {
    Weblink.find({ createdBy: req.params.createdBy }, function (err, weblinks) {
        res.json(weblinks);
    });
  }
});

//get by list ==================================
router.get('/findby/:list', function(req, res) {
  if (req.params.list) {
    Weblink.find({ list: req.params.list }, function (err, weblinks) {
        res.json(weblinks);
    });
  }
});

//get by project ==================================
router.get('/findby/:project', function(req, res) {
  if (req.params.project) {
    Weblink.find({ project: req.params.project }, function (err, weblinks) {
        res.json(weblinks);
    });
  }
});

//LIST=======================================
//get all ==================================
router.get('/list/findall', function(req, res) {
  List.find(function(err, lists){
    if(err)
      res.send(err);

    res.json(lists);
  });
});

//get single ==================================
router.get('/list/find/:list_id', function(req, res) {
  List.findById(req.params.list_id, function(err, list){
    if(err)
      res.send(err);

    res.json(list);
  });
});

//get by user ref ==================================****
router.get('/list/findby/:createdBy', function(req, res) {
  if (req.params.createdBy) {
    List.find({ createdBy: req.params.createdBy }, function (err, lists) {
        res.json(lists);
    });
  }
});

//PROJECT========================
//get all ==================================
router.get('/project/findall', function(req, res) {
  Project.find(function(err, projects){
    if(err)
      res.send(err);

    res.json(projects);
  });
});

//get single ==================================
router.get('/project/find/:project_id', function(req, res) {
  Project.findById(req.params.project_id, function(err, project){
    if(err)
      res.send(err);

    res.json(project);
  });
});

//get by user ======================================
router.get('/project/findby/:createdBy', function(req, res) {
  if (req.params.createdBy) {
    Project.find({ createdBy: req.params.createdBy }, function (err, projects) {
        res.json(projects);
    });
  }
});

module.exports = router;