var User = require('./models/user');
var DataRecord = require('./models/datarecord')
module.exports = function(app){

	app.get('/', function (req,res){
		res.render('index.ejs');
	});
	app.get('/AdministerInformation', function (req,res){
		res.render('Administration_Information_Fillout.ejs');
	});
	app.get('/ExistingRoadway', function (req,res){
		res.render('Existing_Roadway_Information_Fillout.ejs');
	});
	app.get('/ExistingBridge', function (req,res){
		res.render('Existing_Bridge_Information_Fillout.ejs');
	});
	app.get('/ProposedRoad', function (req,res){
		res.render('Proposed_Roadway_Information_Fillout.ejs');
	});
	app.get('/ProposedBridge', function (req,res){
		res.render('Proposed_Bridge_Information_Fillout.ejs');
	});
	app.get('/Connections', function (req,res){
		res.render('Connection_Information_Fillout.ejs');
	});
	app.get('/EarthworkCut', function (req,res){
		res.render('Earthwork_Cut_Information_Fillout.ejs');
	});
	app.get('/EarthworkFill', function (req,res){
		res.render('Earthwork_Fill_Information_Fillout.ejs');
	});
	app.get('/UnisuitableMaterial', function (req,res){
		res.render('Unsuitable_Material_Information_Fillout.ejs');
	});
	app.get('/CommercialRockFills', function (req,res){
		res.render('Commercial_Rock_Material_Information_Fillout.ejs');
	});
	app.get('/Drainage', function (req,res){
		res.render('Drainage_Information_Fillout.ejs');
	});
	app.get('/SWMFacility', function (req,res){
		res.render('SWM_Facility_Questions_Information_Fillout.ejs');
	});
	app.get('/Traffic', function (req,res){
		res.render('Traffic_Information_Fillout.ejs');
	});
	app.get('/Entrances', function (req,res){
		res.render('Entrances_Information_Fillout.ejs');
	});
	app.get('/UtilityImpacts', function (req,res){
		res.render('Utility_Impacts_Information_Fillout.ejs');
	});
	app.get('/RW3', function (req,res){
		res.render('Retaining_Wall_RW3.ejs');
	});
	app.get('/Sidewalk', function (req,res){
		res.render('Sidewalk_Information_Fillout.ejs');
	});
	app.get('/Mitigation', function (req,res){
		res.render('Mitigation_Information_Fillout.ejs');
	});
	app.get('/MiscellaneousItems', function (req,res){
		res.render('Miscellaneous_Information_Fillout.ejs');
	});
	app.get('/UnitPrices', function (req,res){
		res.render('Unit_Prices_input.ejs');
	});
	app.get('/Contingency', function (req,res){
		res.render('Contingency_Interface.ejs');
	});
	app.get('/Receipt', function (req,res){
		res.render('Reciept.ejs');
	});
	app.get('/CreateRecord', function (req,res){
		res.render('CreateRecord.ejs');
	});
	app.post('/CreateRecord', function (req,res){
		var newDataRecord = new DataRecord();
		newDataRecord.ProjectID = req.body.CreateProjectID;
		newDataRecord.UPC = req.body.CreateUPC;
		newDataRecord.Estimator = req.body.CreateEstimator;
		newDataRecord.ProposedADYear = req.body.CreateProposedAdYear;
		newDataRecord.ConstructDur = req.body.CreateConstructionDuration;
		newDataRecord.DataArray = req.body.CreateDataArray;
		newDataRecord.save(function(err){
			if (err){
				throw err;
			}
		})
	res.redirect('/CreateRecord');
	});
	app.get('/UpdateRecord', function (req,res){
		res.render('UpdateRecord.ejs');
	});
	app.get('/RetrieveRecord',function (req,res){
		DataRecord.find(function(err, datapoints) {
			if (err)
				throw err;
z
		});
	});
}