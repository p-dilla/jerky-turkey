// project model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Project = new Schema({
	dateAdded : {type: Date, default: Date.now},
  	projectTitle : String,
    projectSummary : String,
    website: String,
    isPrivate : Boolean,
    createdBy: String,
    members: [String],
	weblinks: []
});

module.exports = mongoose.model('projects', Project);