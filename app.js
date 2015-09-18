var express = require('express');
var app = express();

app.use(express.static(__dirname+'/bower_components'));
app.use(express.static(__dirname+'/build'));

app.get('/AdministerInformation', function (req,res){
	res.sendFile('build/Minipages/Administration_Information_Fillout.html',{root: __dirname});
});
app.get('/ExistingRoadway', function (req,res){
	res.sendFile('build/Minipages/Existing_Roadway_Information_Fillout.html',{root:__dirname});
});
app.get('/ExistingBridge', function (req,res){
	res.sendFile('build/Minipages/Existing_Bridge_Information_Fillout.html',{root:__dirname});
});
app.get('/ProposedRoad', function (req,res){
	res.sendFile('build/Minipages/Proposed_Roadway_Information_Fillout.html',{root:__dirname});
});
app.get('/ProposedBridge', function (req,res){
	res.sendFile('build/Minipages/Proposed_Bridge_Information_Fillout.html',{root:__dirname});
});
app.get('/Connections', function (req,res){
	res.sendFile('build/Minipages/Connection_Information_Fillout.html',{root:__dirname});
});
app.get('/EarthworkCut', function (req,res){
	res.sendFile('build/Minipages/Earthwork_Cut_Information_Fillout.html',{root:__dirname});
});
app.get('/EarthworkFill', function (req,res){
	res.sendFile('build/Minipages/Earthwork_Fill_Information_Fillout.html',{root:__dirname});
});
app.get('/UnisuitableMaterial', function (req,res){
	res.sendFile('build/Minipages/Unsuitable_Material_Information_Fillout.html',{root:__dirname});
});
app.get('/CommercialRockFills', function (req,res){
	res.sendFile('build/Minipages/Commercial_Rock_Material_Information_Fillout.html',{root:__dirname});
});
app.get('/Drainage', function (req,res){
	res.sendFile('build/Minipages/Drainage_Information_Fillout.html',{root:__dirname});
});
app.get('/SWMFacility', function (req,res){
	res.sendFile('build/Minipages/SWM_Facility_Questions_Information_Fillout.html',{root:__dirname});
});
app.get('/Traffic', function (req,res){
	res.sendFile('build/Minipages/Traffic_Information_Fillout.html',{root:__dirname});
});
app.get('/Entrances', function (req,res){
	res.sendFile('build/Minipages/Entrances_Information_Fillout.html',{root:__dirname});
});
app.get('/UtilityImpacts', function (req,res){
	res.sendFile('build/Minipages/Utility_Impacts_Information_Fillout.html',{root:__dirname});
});
app.get('/RW3', function (req,res){
	res.sendFile('build/Minipages/Retaining_Wall_RW3.html',{root:__dirname});
});
app.get('/Sidewalk', function (req,res){
	res.sendFile('build/Minipages/Sidewalk_Information_Fillout.html',{root:__dirname});
});
app.get('/Mitigation', function (req,res){
	res.sendFile('build/Minipages/Mitigation_Information_Fillout.html',{root:__dirname});
});
app.get('/MiscellaneousItems', function (req,res){
	res.sendFile('build/Minipages/Miscellaneous_Information_Fillout.html',{root:__dirname});
});
app.get('/UnitPrices', function (req,res){
	res.sendFile('build/Minipages/Unit_Prices_input.html',{root:__dirname});
});
app.get('/Contingency', function (req,res){
	res.sendFile('build/Minipages/Contingency_Interface.html',{root:__dirname});
});
app.get('/Receipt', function (req,res){
	res.sendFile('build/Minipages/Reciept.html',{root:__dirname});
});

app.listen(3000);
//80 for deployment