var mongoose = require('mongoose');

// define model =================
var User = mongoose.model('User', {
    username : String,
    email : String,
    password : String
    // subscriptions : Array,
    // links : Array,
    // list :Array,
    // projects : Array
});                     

module.exports = mongoose.model('User', User);