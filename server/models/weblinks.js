var mongoose = require('mongoose');
var Weblink = mongoose.model('Weblink', {
	linkName: String,
	category: String,
	url: String,
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
module.exports = mongoose.model('Weblink', Weblink);