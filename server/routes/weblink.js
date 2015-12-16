var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
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

//remove ==================================
router.delete('/delete/:weblink_id', function(req, res) {
  Weblink.findByIdAndRemove(req.params.weblink_id, function(err){
    if(err)
      res.send(err);

    res.json({message: 'Weblink has been removed!'});
  });
});

module.exports = router;