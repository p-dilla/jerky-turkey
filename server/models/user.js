// user model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  password: String,
  email: String,
  	listSubs: [{
  		listName: String,
  		list_id: {
  			type: mongoose.Schema.Types.ObjectId,
  			ref: 'List'
  		}
	}],
	projects: [{
  		projectName: String,
  		list_id: {
  			type: mongoose.Schema.Types.ObjectId,
  			ref: 'Project'
  		}
	}],
	weblinks: [{
  		linkName: String,
  		link_id: {
  			type: mongoose.Schema.Types.ObjectId,
  			ref: 'Weblink'
  		}
	}]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);