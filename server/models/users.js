var mongoose = require('mongoose');
//define model =================
var User = mongoose.model('User', {
    username : String,
    email : String,
    password : String,
    listSubs: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'List'
	}],
	projects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project'
	}],
	weblinks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Weblink'
	}]
});                    

module.exports = mongoose.model('User', User);