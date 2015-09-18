var mongoClient=require('mongdb').MongoClient;
var mongoDbObj;

mongoClient.connect('mongdb://localhost/RoadEstimateDB', function (err,db){
	if (err) {
		console.log(err);
	} else{
		console.log("Connected to RoadEstimateDB");
		mongoDbObj={db: db,
		students: db.collection('students')};
	};
})