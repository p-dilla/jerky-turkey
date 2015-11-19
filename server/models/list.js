// list model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var List = new Schema({
  	listName: String,
	category: String,
	weblinks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Weblinks'
	}],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

List.plugin(passportLocalMongoose);

module.exports = mongoose.model('lists', List);