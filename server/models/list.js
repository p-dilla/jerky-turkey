// list model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var List = new Schema({
	dateAdded : String,
  	listName: String,
	category: String,
	weblinks: [],
	createdBy: String
});

module.exports = mongoose.model('lists', List);