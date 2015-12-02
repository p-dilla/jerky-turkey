// weblink model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Weblink = new Schema({
	dateAdded : String,
  	linkName: String,
	category: String,
	url: String,
	createdBy: String,
	lists: [String],
	projects: [String]
});

module.exports = mongoose.model('weblinks', Weblink);