var mongoose = require('mongoose');

//define model =================
var Project = mongoose.model('Project', {
    title : String,
    description : String,
    status : Boolean,
    listSub: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'List'
	}],
	projects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project'
	}],
	linkers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Linker'
	}]
});                     

module.exports = mongoose.model('Project', Project);