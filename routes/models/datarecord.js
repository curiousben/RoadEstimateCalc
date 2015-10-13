//Schema for Datarecords that every user can create
var mongoose = require('mongoose');
var dataSchema = mongoose.Schema({
	Estimator: String,
	UPC: Number,
	RoadNumber: String,
	DataArray: String,
	DateCreated: String,
	DateUpdated: String
})

module.exports = mongoose.model('DataRecord', dataSchema);