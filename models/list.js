var mongoose = require('mongoose');
var ListSchema = new mongoose.Schema ({
	title: String,
	category: String,
	links: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Link'
	}],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
module.exports = mongoose.model('List', ListSchema);