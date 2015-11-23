// weblink model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Weblink = new Schema({
	dateAdded : {type: Date, default: Date.now},
  	linkName: String,
	category: String,
	url: String,
	createdBy: String
});

module.exports = mongoose.model('weblinks', Weblink);