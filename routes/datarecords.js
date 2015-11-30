/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This web app does not constitue a standard, specification, or regulation.
* Any inclusion of manufacturer names, trade names, or trademarksis for 
* identification purposes only and is not to be considered an endorsement.
* 
*/

var DataRecord = require('./models/datarecord');
var express = require('express');
var router = express.Router();

router.post('/', function (req,res){
	var newDataRecord = new DataRecord();
	newDataRecord.Estimator = req.body.CreateEstimator;
	newDataRecord.UPC = req.body.CreateUPC;
	newDataRecord.RoadNumber = req.body.CreateRoadNumber;
	newDataRecord.DataArray = req.body.CreateDataArray;
	newDataRecord.DateCreated = req.body.CreateCTime;
	newDataRecord.DateUpdated = req.body.CreateUTime;
	newDataRecord.save(function(err){
		if (err){
			throw err;
		}
	})
	req.flash('Create','Your datarecord has been successfully added!');
	res.redirect('/CreateUpdateRecord');
});

router.put('/Estimator=:Estimator&&UPC=:UPC&&RoadNumber=:RoadNumber', function (req,res) {
	DataRecord.findOne({'Estimator': req.params.Estimator,'UPC': req.params.UPC, 'RoadNumber': req.params.RoadNumber}, function (err, dataset){
		if (err) {
			throw err;
		};
		dataset.DataArray = req.body.UpdateDataArray;
		dataset.DateUpdated = req.body.UpdateTimeStamp;
		dataset.save(function(err){
			if (err){
				throw err;
			}
			req.flash('Update','Your datarecord has been successfully updated!');
			res.redirect('/CreateUpdateRecord');
		});
	});
});

//All Records that exist for server-wide data dumping
router.get('/',function (req,res){
	DataRecord.find(function(err, datasets) {
		if (err){
			throw err;	
		};
		res.json(datasets)
	});
});

router.get('/Estimator=:Estimator', function (req,res){
	DataRecord.find({"Estimator":req.params.Estimator}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	})
})

router.get('/UPC=:UPC', function (req,res){
	DataRecord.find({"UPC":req.params.UPC}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	})
})

router.get('/RoadNumber=:RoadNumber', function (req, res){
	DataRecord.find({"RoadNumber":req.params.RoadNumber}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	});
});

router.get('/Estimator&&UPC/:Estimator&&:UPC', function (req, res){
	DataRecord.find({"Estimator":req.params.Estimator,"UPC":req.params.UPC}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	});
});

router.get('/UPC&&RoadNumber/:UPC&&:RoadNumber', function (req,res){
	DataRecord.find({'UPC': req.params.UPC, 'RoadNumber':req.params.RoadNumber}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	});
});

router.get('/Estimator&&RoadNumber/:Estimator&&:RoadNumber', function (req,res){
	DataRecord.find({'Estimator': req.params.Estimator, 'RoadNumber': req.params.RoadNumber}).exec(function (err, datasets){
		if (err) {
			throw err;
		};
		res.json(datasets);
	});
});

router.get('/Estimator&&UPC&&RoadNumber/:Estimator&&:UPC&&:RoadNumber', function (req,res){
	DataRecord.find({'Estimator': req.params.Estimator,'UPC': req.params.UPC, 'RoadNumber': req.params.RoadNumber}).exec(function (err, datasets){
		if (err) {
			throw err;
		};
		res.json(datasets);
	});
});

module.exports = router;