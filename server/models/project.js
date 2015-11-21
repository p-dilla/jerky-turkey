// project model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Project = new Schema({
  	projectTitle : String,
    projectSummary : String,
    website: String,
    isPrivate : Boolean,
    createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
    members: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	weblinks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Weblink'
	}]
});

module.exports = mongoose.model('projects', Project);