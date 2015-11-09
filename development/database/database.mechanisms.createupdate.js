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

function TimeStamp () {
	// Current Date is created upon fucntion call and returned
		var date = new Date(),
		monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December',],
		day = date.getDate(),
		monthIndex = date.getMonth(),
		year = date.getFullYear(),
		hour = date.getHours(),
		minutes = date.getMinutes(),
		TimeOfDay;

		if (hour<12) {
			TimeOfDay='AM';
		} else{
			TimeOfDay='PM';
			hour-=12;
		};
		return monthNames[monthIndex]+' '+day+', '+year+'  '+hour+':'+minutes+' '+TimeOfDay;
};

function CreateRecordChoice () {
	sessionStorage.setItem('Recordchoice',1);
	ChoiceLoader();
	document.getElementsByName('CreateCTime')[0].value=TimeStamp();
	document.getElementsByName('CreateUTime')[0].value=TimeStamp();
	document.getElementsByName('CreateDataArray')[0].value=JSON.stringify(DataArrayObject());
};

function UpdateRecordChoice () {
	sessionStorage.setItem('Recordchoice',2);
	ChoiceLoader();
	document.getElementsByName('UpdateTimeStamp')[0].value=TimeStamp();
	document.getElementsByName('UpdateDataArray')[0].value=JSON.stringify(DataArrayObject());
};

function ChoiceLoader() {
	windowdown=sessionStorage.getItem('Recordchoice');
	if (windowdown==1) {
		$('#UpdateRecordForm').toggle(false);
		$('#CreateRecordForm').toggle('swing');
	};
	if (windowdown==2) {
		$('#UpdateRecordForm').toggle('swing');
		$('#CreateRecordForm').toggle(false);
	};
}

function LastImportedRecordInfo () {
	document.getElementsByName('UpdateEstimator')[0].value=localStorage.getItem('ImportEstimator');
	document.getElementsByName('UpdateUPC')[0].value=localStorage.getItem('ImportUPC');
	document.getElementsByName('UpdateRoadNumber')[0].value=localStorage.getItem('ImportRoadNumber');
}

function CreateAJAXCall () {
	var CreateEsti=document.getElementsByName('CreateEstimator')[0].value,
		CreateUPC=document.getElementsByName('CreateUPC')[0].value,
		CreateRN=document.getElementsByName('CreateRoadNumber')[0].value,
		CCreateTS=document.getElementsByName('CreateCTime')[0].value,
		CUpdateTS=document.getElementsByName('CreateUTime')[0].value,
		CreateDA=document.getElementsByName('CreateDataArray')[0].value;

	$.ajax({
		async: false,
		url: '/datarecords',
		type: 'POST',
		dataType: 'application/json',
		data: {CreateEstimator: ''+CreateEsti+'',
				CreateUPC: ''+CreateUPC+'',
				CreateRoadNumber: ''+CreateRN+'',
		   	    CreateCTime: ''+CCreateTS+'',
			    CreateUTime: ''+CUpdateTS+'',
				CreateDataArray: ''+CreateDA+''},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	localStorage.setItem('ImportEstimator',CreateEsti);
	localStorage.setItem('ImportUPC',CreateUPC);
	localStorage.setItem('ImportRoadNumber',CreateRN);
};

function UpdateAJAXCall (argument) {
var UpdateEsti=document.getElementsByName('UpdateEstimator')[0].value,
	UpdateUPC=document.getElementsByName('UpdateUPC')[0].value,
	UpdateRoadNumber=document.getElementsByName('UpdateRoadNumber')[0].value,
	UpdateTS=document.getElementsByName('UpdateTimeStamp')[0].value,
	UpdateDA=document.getElementsByName('UpdateDataArray')[0].value;

	$.ajax({
		async: false,
		url: '/datarecords/Estimator='+UpdateEsti+'&&UPC='+UpdateUPC+'&&RoadNumber='+UpdateRoadNumber+'',
		type: 'PUT',
		dataType: 'application/json',
		data: {UpdateTimeStamp: ''+UpdateTS+'', UpdateDataArray:''+UpdateDA+''},
	})
	.done(function() {
		alert('success');
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}

function DataArrayObject () {
	//The Data Record
	DataArray={};
		for (var i = localStorage.length - 1; i >= 0; i--) {
			var Key=localStorage.key(i);
			if (Key != 'ImportEstimator' || Key != 'ImportUPC' || Key != 'ImportRoadNumber') {	
				Data=localStorage.getItem(localStorage.key(i))
				DataArray[Key] = Data;
			};
		};
	return DataArray;
}