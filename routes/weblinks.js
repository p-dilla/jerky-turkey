
var Weblink = require('../models/weblinks');
module.exports = function(app) {
// routes ======================================================================
// api ---------------------------------------------------------------------
// get all USERs
    app.get('/api/weblinks', function(req, res) {

        // use mongoose to get all in the database
        Weblink.find(function(err, weblinks) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(weblinks); // return all in JSON format
        });
    });

    // get single Weblink
    app.get('/api/weblinks/:weblinks_id', function(req, res) {

        // use mongoose to get all in the database
        Weblink.findById(req.params.weblinks_id, function(err, weblinks) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(weblinks); // return Weblink in JSON format
        });
    });

    // create Weblink and send back after creation
    app.post('/api/weblinks', function(req, res) {
        // create, information comes from AJAX request from Angular
        Weblink.create({
            linkName : req.body.linkName,
            category : req.body.category,
            url : req.body.url,
            createdBy: req.body.createdBy,
            done : false
        }, function(err, weblink) {
            if (err)
                res.send(err);

            // get and return all after you create another
            Weblink.find(function(err, weblinks) {
                if (err)
                    res.send(err)
                res.json(weblinks);
            });
        });
    });

    // delete List
    app.delete('/api/weblinks/:weblinks_id', function(req, res) {
        Weblink.remove({
            _id : req.params.weblinks_id
        }, function(err, weblinks) {
            if (err)
                res.send(err);

            // get and return all after you create another
            Weblink.find(function(err, weblinks) {
                if (err)
                    res.send(err)
                res.json(weblinks);
            });
        });
    });

    //update Weblink
    app.put('/api/weblinks/:weblinks_id', function(req, res) {
        // use Weblink model to find the Weblink
        Weblink.findById(req.params.weblinks_id, function(err, weblinks) {

            if (err)
                res.send(err);

            weblinks.listName = req.body.listName;
            weblinks.category = req.body.category;
            weblinks.weblinks = req.body.weblinks;
            weblinks.createdBy = req.body.createdBy;

            // save the user
            weblinks.save(function(err) {
                if (err)
                    res.send(err);

                res.json(weblinks);
            });

        });
    });
}