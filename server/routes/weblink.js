var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Weblink = require('../models/weblink.js');

//create ==================================
router.post('/create', function(req, res, next) {

  var link = new Weblink();
  link.linkName = req.body.linkName;
  link.category = req.body.category;
  link.url = req.body.url;
  link.createdBy = req.body.createdBy;
  link.lists = req.body.lists;
  link.projects = req.body.projects;

  link.save(function(err){
    if(err){
      res.send(err);
    }
    else {
      res.json({message: 'Link Created!'});
    }
  });
});

//get all ==================================
router.get('/findall', function(req, res) {
  Weblink.find(function(err, weblinks){
    if(err)
      res.send(err);

    res.json(weblinks);
  });
});

//get single ==================================
router.get('/find/:weblink_id', function(req, res) {
  Weblink.findById(req.params.weblink_id, function(err, weblink){
    if(err)
      res.send(err);

    res.json(weblink);
  });
});

//update ==================================
router.put('/update/:weblink_id', function(req, res) {
  Weblink.findById(req.params.weblink_id, function(err, weblink){
    if(err)
      res.send(err);
    weblink.linkName = req.body.linkName;
    weblink.category = req.body.category;
    weblink.url = req.body.url;
    weblink.createdBy = req.body.createdBy;
    weblink.lists = req.body.lists;
    weblink.projects = req.body.projects;

    weblink.save(function(err){
      if(err)
        res.send(err);

    res.json(weblink);
    });
  });
});

//add list =============================
// router.post('/updatelist/:weblink_id', function(req, res) {
//   console.log(req.body);
//   Weblink.findByIdAndUpdate(
//     req.params.weblink_id, 
//     {$push: {lists: req.body.lists}},
//     {safe: true, upsert: true},
//     function(err, model) {
//         console.log(err);
//     }
// );
// });

//remove ==================================
router.delete('/delete/:weblink_id', function(req, res) {
  Weblink.findByIdAndRemove(req.params.weblink_id, function(err){
    if(err)
      res.send(err);

    res.json({message: 'Weblink has been removed!'});
  });
});

//get by user ==================================
router.get('/findby/:createdBy', function(req, res) {
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

module.exports = router;