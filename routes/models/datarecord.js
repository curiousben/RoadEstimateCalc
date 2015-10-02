// How its stored in mongodb
var mongoose = require('mongoose');
var dataSchema = mongoose.Schema({
	ProjectID: Number,
	UPC: Number,
	Estimator: String,
	ProposedADYear: Number,
	ConstructDur: Number,
	DataArray: Array
})

module.exports = mongoose.model('DataRecord', dataSchema);