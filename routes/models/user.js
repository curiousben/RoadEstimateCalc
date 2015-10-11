// How its stored in mongodb
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
		firstname: String,
		lastname: String,
		password: String
})

module.exports = mongoose.model('User', userSchema);