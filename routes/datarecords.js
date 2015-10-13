var DataRecord = require('./models/datarecord');
var express = require('express');
var router = express.Router();

router.post('/CreateRecord', function (req,res){
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
	res.redirect('/CreateUpdateRecord');
});

router.put('/UpdateRecord', function (req,res) {
	DataRecord.findOne({'Estimator': req.body.UpdateEstimator,'UPC': req.body.UpdateUPC, 'RoadNumber': req.body.UpdateRoadNumber}, function (err, dataset){
		if (err) {
			throw err;
		};
		dataset.DataArray = req.body.UpdateDataArray;
		dataset.DateUpdated = req.body.UpdateTimeStamp;
		dataset.save(function(err){
			if (err){
				throw err;
			}
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

router.get('/Estimator/:Estimator', function (req,res){
	DataRecord.find({"Estimator":req.params.Estimator}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	})
})

router.get('/UPC/:UPC', function (req,res){
	DataRecord.find({"UPC":req.params.UPC}).exec(function (err, datasets) {
		if (err) {
			throw err;
		};
		res.json(datasets);
	})
})

router.get('/RoadNumber/:RoadNumber', function (req, res){
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