var mongoose = require('mongoose');
var LinkSchema = new mongoose.Schema ({
	title: String,
	category: String,
	url: String,
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
module.exports = mongoose.model('List', ListSchema);