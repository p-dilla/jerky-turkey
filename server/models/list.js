// list model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var List = new Schema({
	dateAdded : {type: Date, default: Date.now},
  	listName: String,
	category: String,
	weblinks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Weblinks'
	}],
	createdBy: String
});

module.exports = mongoose.model('lists', List);