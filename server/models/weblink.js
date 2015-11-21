// weblink model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Weblink = new Schema({
  	linkName: String,
	category: String,
	url: String,
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('weblinks', Weblink);