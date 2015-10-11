var mongoose = require('mongoose');
var dataSchema = mongoose.Schema({
	Estimator: String,
	UPC: Number,
	RoadNumber: String,
	DataArray: String
})

module.exports = mongoose.model('DataRecord', dataSchema);