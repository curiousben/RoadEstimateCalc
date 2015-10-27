var express = require('express');
var router = express.Router();

// <=========================== Individual Page Paths for the Web App ===========================>

router.get('/', function (req,res){
	res.render('index.ejs');
});
router.get('/AdministerInformation', function (req,res){
	res.render('Administration_Information_Fillout');
});
router.get('/ExistingRoadway', function (req,res){
	res.render('Existing_Roadway_Information_Fillout');
});
router.get('/ExistingBridge', function (req,res){
	res.render('Existing_Bridge_Information_Fillout');
});
router.get('/ProposedRoad', function (req,res){
	res.render('Proposed_Roadway_Information_Fillout');
});
router.get('/ProposedBridge', function (req,res){
	res.render('Proposed_Bridge_Information_Fillout');
});
router.get('/Connections', function (req,res){
	res.render('Connection_Information_Fillout');
});
router.get('/EarthworkCut', function (req,res){
	res.render('Earthwork_Cut_Information_Fillout');
});
router.get('/EarthworkFill', function (req,res){
	res.render('Earthwork_Fill_Information_Fillout');
});
router.get('/UnisuitableMaterial', function (req,res){
	res.render('Unsuitable_Material_Information_Fillout');
});
router.get('/CommercialRockFills', function (req,res){
	res.render('Commercial_Rock_Material_Information_Fillout');
});
router.get('/Drainage', function (req,res){
	res.render('Drainage_Information_Fillout');
});
router.get('/SWMFacility', function (req,res){
	res.render('SWM_Facility_Questions_Information_Fillout');
});
router.get('/Traffic', function (req,res){
	res.render('Traffic_Information_Fillout');
});
router.get('/Entrances', function (req,res){
	res.render('Entrances_Information_Fillout');
});
router.get('/UtilityImpacts', function (req,res){
	res.render('Utility_Impacts_Information_Fillout');
});
router.get('/RW3', function (req,res){
	res.render('Retaining_Wall_RW3');
});
router.get('/Sidewalk', function (req,res){
	res.render('Sidewalk_Information_Fillout');
});
router.get('/Mitigation', function (req,res){
	res.render('Mitigation_Information_Fillout');
});
router.get('/MiscellaneousItems', function (req,res){
	res.render('Miscellaneous_Information_Fillout');
});
router.get('/UnitPrices', function (req,res){
	res.render('Unit_Prices_input');
});
router.get('/Contingency', function (req,res){
	res.render('Contingency_Interface');
});
router.get('/Receipt', function (req,res){
	res.render('Reciept');
});
router.get('/CreateUpdateRecord', function (req,res){
	res.render('CreateUpdateRecord', {messageC: req.flash('Create'),messageU: req.flash('Update')});
});
router.get('/RetrieveRecord', function (req,res) {
	res.render('RetrieveRecord');
});

module.exports = router;