var express = require('express'),
    router = express.Router(),
    List = require('../models/list.js');

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

//get all ==================================
router.get('/findall', function(req, res) {
  List.find(function(err, lists){
    if(err)
      res.send(err);

    res.json(lists);
  });
});

//get single ==================================
router.get('/find/:list_id', function(req, res) {
  List.findById(req.params.list_id, function(err, list){
    if(err)
      res.send(err);

    res.json(list);
  });
});

//update ==================================
router.put('/update/:list_id', function(req, res) {
  List.findById(req.params.list_id, function(err, list){
    if(err)
      res.send(err);
    list.listName = req.body.listName;
    list.category = req.body.category;
    list.weblinks = [req.body.weblinks];
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

//get by user ref ==================================****
router.get('/findby/:createdBy', function(req, res) {
  if (req.params.createdBy) {
    List.find({ createdBy: req.params.createdBy }, function (err, lists) {
        res.json(lists);
    });
  }
});

module.exports = router;