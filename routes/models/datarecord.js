/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This weeb app does not constitue a standard, specification, or regulation.
* Any inclusion of manufacturer names, trade names, or trademarksis for 
* identification purposes only and is not to be considered an endorsement.
* 
*/

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