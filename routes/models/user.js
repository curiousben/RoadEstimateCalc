// How its stored in mongodb
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
		username: String,
		password: String,
		localstoretest: Array
})

module.exports = mongoose.model('User', userSchema);