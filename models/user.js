var mongoose = require('mongoose');

// define model =================
var User = mongoose.model('User', {
    username : String,
    email : String,
    password : String,
    subscriptions : [Number],
    links : [Number],
    list : [Number],
    projects : [Number]
});                     

module.exports = mongoose.model('User', User);