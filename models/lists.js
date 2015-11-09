var mongoose = require('mongoose');
var List = mongoose.model('List', {
	title: String,
	category: String,
	linkers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Linker'
	}],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
module.exports = mongoose.model('List', List);