// weblink model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var Weblink = new Schema({
  linkName: String,
	category: String,
	url: String,
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

Weblink.plugin(passportLocalMongoose);

module.exports = mongoose.model('weblinks', Weblink);