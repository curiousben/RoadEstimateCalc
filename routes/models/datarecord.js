//Schema for Datarecords that every user can create
var mongoose = require('mongoose');
var dataSchema = mongoose.Schema({
	Estimator: String,
	UPC: Number,
	RoadNumber: String,
	DataArray: String,
	DateCreated: String,
	DateUpdated: String,
	expiresAt:{type: Date, expires: '7776000s', default: Date.now}
	// Each record lasts for 3 months
});

module.exports = mongoose.model('DataRecord', dataSchema);