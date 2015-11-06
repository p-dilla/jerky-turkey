var mongoose = require('mongoose');
// var UserSchema = new mongoose.Schema ({
// 	username: String,
// 	email: String,
// 	password: String,
// 	listSub: [{
// 		// type: mongoose.Schema.Types.ObjectId,
// 		// ref: 'List'
// 		title: String,
// 		random: String
// 	}]
// });
// module.exports = mongoose.model('User', UserSchema);



//define model =================
var User = mongoose.model('User', {
    username : String,
    email : String,
    password : String,
    listSub: [{
		title: String,
		random: String
	}]
});                     

module.exports = mongoose.model('User', User);