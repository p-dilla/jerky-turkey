
var Project = require('../models/projects');
module.exports = function(app) {
// routes ======================================================================
// api ---------------------------------------------------------------------
// get all USERs
    app.get('/api/projects', function(req, res) {

        // use mongoose to get all in the database
        Project.find(function(err, projects) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(projects); // return all in JSON format
        });
    });

    // get single Project
    app.get('/api/projects/:projects_id', function(req, res) {

        // use mongoose to get all in the database
        Project.findById(req.params.projects_id, function(err, projects) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(projects); // return Project in JSON format
        });
    });

    // create Project and send back after creation
    app.post('/api/projects', function(req, res) {
        // create, information comes from AJAX request from Angular
        Project.create({
            projectTitle : req.body.projectTitle,
            projectSummary : req.body.projectSummary,
            isPrivate : req.body.isPrivate,
            members : [req.body.members],
            weblinks: [req.body.weblinks],
            done : false
        }, function(err, project) {
            if (err)
                res.send(err);

            // get and return all after you create another
            Project.find(function(err, projects) {
                if (err)
                    res.send(err)
                res.json(projects);
            });
        });
    });

    // delete Project
    app.delete('/api/projects/:projects_id', function(req, res) {
        Project.remove({
            _id : req.params.projects_id
        }, function(err, projects) {
            if (err)
                res.send(err);

            // get and return all after you create another
            Project.find(function(err, projects) {
                if (err)
                    res.send(err)
                res.json(projects);
            });
        });
    });

    //update Project
    app.put('/api/projects/:projects_id', function(req, res) {
        // use Project model to find the Project
        Project.findById(req.params.projects_id, function(err, projects) {

            if (err)
                res.send(err);

            projects.projectTitle = req.body.projectTitle;
            projects.projectSummary = req.body.projectSummary;
            projects.isPrivate = req.body.isPrivate;
            projects.members = [req.body.members];
            projects.weblinks = [req.body.weblinks];
            projects.linkers = [req.body.linkers];

            // save the user
            projects.save(function(err) {
                if (err)
                    res.send(err);

                res.json(projects);
            });

        });
    });
}