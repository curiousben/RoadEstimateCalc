$(document).ready(function(){
//
//=============== This Array Object is the Datarecord that is being passed to the mongoose database ===============//
//
	DataArray={};
	var windowdown=0;
		for (var i = localStorage.length - 1; i >= 0; i--) {
			var Key=localStorage.key(i);
			if (Key != 'UpdateEstimator' && Key != 'UpdateUPC' && Key != 'UpdateRoadNumber') {	
				Data=localStorage.getItem(localStorage.key(i))
				DataArray[Key] = Data;
			};
		};

//
//=============== This prefills hidden form input boxes for the Creation of a record ===============//
//

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

	document.getElementsByName('CreateCTime')[0].value=monthNames[monthIndex]+' '+day+', '+year+'  '+hour+':'+minutes+' '+TimeOfDay;
	document.getElementsByName('CreateUTime')[0].value=monthNames[monthIndex]+' '+day+', '+year+'  '+hour+':'+minutes+' '+TimeOfDay;
	document.getElementsByName('CreateDataArray')[0].value=JSON.stringify(DataArray);
	$('#CreateFormButton').click(function(event) {
		if (windowdown==2 || windowdown==0) {
			$('#CreateRecordForm').toggle('swing');
			$('#UpdateRecordForm').toggle(false);
			windowdown=1;
		};
	});

//
//=============== This prefills hidden form input boxes for Updating record ===============//
//

	document.getElementsByName('UpdateEstimator')[0].value=localStorage.getItem('UpdateEstimator')
	document.getElementsByName('UpdateUPC')[0].value=localStorage.getItem('UpdateUPC');
	document.getElementsByName('UpdateRoadNumber')[0].value=localStorage.getItem('UpdateRoadNumber');
	document.getElementsByName('UpdateTimeStamp')[0].value=monthNames[monthIndex]+' '+day+', '+year+'  '+hour+':'+minutes+' '+TimeOfDay;
	document.getElementsByName('UpdateDataArray')[0].value=JSON.stringify(DataArray);
	$('#UpdateFormButton').click(function(event) {
		if (windowdown==1 || windowdown==0) {	
			$('#UpdateRecordForm').toggle('swing');
			$('#CreateRecordForm').toggle(false);
			windowdown=2;
		};
	});
});
