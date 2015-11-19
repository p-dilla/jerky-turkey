var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Weblink = require('../models/weblink.js');

//create ==================================
router.post('/create', function(req, res) {
  var weblink = new Weblink();

  weblink.linkName = req.body.linkName;
  weblink.category = req.body.category;
  weblink.url = req.body.url;
  weblink.createdBy = req.body.createdBy;

  weblink.save(function(err){
    if(err)
      res.send(err);

    res.json({message: 'Link created!', data: link});
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
router.get('/find', function(req, res) {
  Weblink.findById(req.params.weblink_id, function(err, weblink){
    if(err)
      res.send(err);

    res.json(weblink);
  });
});

//update ==================================
router.put('/update', function(req, res) {
  Weblink.findById(req.params.weblink_id, function(err, weblink){
    if(err)
      res.send(err);
    weblink.linkName = req.body.linkName;
    weblink.category = req.body.category;
    weblink.url = req.body.url;
    weblink.createdBy = req.body.createdBy;

    weblink.save(function(err){
      if(err)
        res.send(err);

    res.json(weblink);
  });
});

//remove ==================================
router.delete('/delete', function(req, res) {
  Weblink.findByIdAndRemove(req.params.weblink_id, function(err){
    if(err)
      res.send(err);

    res.json({message: 'Weblink has been removed!'});
  });
});

module.exports = router;