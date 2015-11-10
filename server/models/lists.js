var mongoose = require('mongoose');
var List = mongoose.model('List', {
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
module.exports = mongoose.model('List', List);