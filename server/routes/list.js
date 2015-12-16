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