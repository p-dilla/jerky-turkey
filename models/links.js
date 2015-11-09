var mongoose = require('mongoose');
var Linker = mongoose.model('Linker', {
	title: String,
	category: String,
	url: String,
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
module.exports = mongoose.model('Linker', Linker);