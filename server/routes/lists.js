
var List = require('../models/lists');
module.exports = function(app) {
// routes ======================================================================
// api ---------------------------------------------------------------------
// get all USERs
    app.get('/api/lists', function(req, res) {

        // use mongoose to get all in the database
        List.find(function(err, lists) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(lists); // return all in JSON format
        });
    });

    // get single List
    app.get('/api/lists/:lists_id', function(req, res) {

        // use mongoose to get all in the database
        List.findById(req.params.lists_id, function(err, lists) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(lists); // return List in JSON format
        });
    });

    // create List and send back after creation
    app.post('/api/lists', function(req, res) {
        // create, information comes from AJAX request from Angular
        List.create({
            listName : req.body.listName,
            category : req.body.category,
            weblinks : [req.body.weblinks],
            createdBy: req.body.createdBy,
            done : false
        }, function(err, list) {
            if (err)
                res.send(err);

            // get and return all after you create another
            List.find(function(err, lists) {
                if (err)
                    res.send(err)
                res.json(lists);
            });
        });
    });

    // delete List
    app.delete('/api/lists/:lists_id', function(req, res) {
        List.remove({
            _id : req.params.lists_id
        }, function(err, lists) {
            if (err)
                res.send(err);

            // get and return all after you create another
            List.find(function(err, lists) {
                if (err)
                    res.send(err)
                res.json(lists);
            });
        });
    });

    //update List
    app.put('/api/lists/:lists_id', function(req, res) {
        // use List model to find the List
        List.findById(req.params.lists_id, function(err, lists) {

            if (err)
                res.send(err);

            lists.listName = req.body.listName;
            lists.category = req.body.category;
            lists.weblinks = req.body.weblinks;
            lists.createdBy = req.body.createdBy;

            // save the user
            lists.save(function(err) {
                if (err)
                    res.send(err);

                res.json(lists);
            });

        });
    });
};