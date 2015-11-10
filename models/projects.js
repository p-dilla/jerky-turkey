var mongoose = require('mongoose');

//define model =================
var Project = mongoose.model('Project', {
    projectTitle : String,
    projectSummary : String,
    isPrivate : Boolean,
    members: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	weblinks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Weblink'
	}]
});                     

module.exports = mongoose.model('Project', Project);