// user model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
  username: String,
  password: String,
  email: String,
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

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);