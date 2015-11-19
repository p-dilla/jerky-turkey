// project model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var Project = new Schema({
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

Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('projects', Project);