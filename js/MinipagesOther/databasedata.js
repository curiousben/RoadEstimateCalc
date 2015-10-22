$(document).ready(function(){

//
//================ Calculations ================//
//

	//The Data Record
	DataArray={};
		for (var i = localStorage.length - 1; i >= 0; i--) {
			var Key=localStorage.key(i);
			if (Key != 'UpdateEstimator' && Key != 'UpdateUPC' && Key != 'UpdateRoadNumber') {	
				Data=localStorage.getItem(localStorage.key(i))
				DataArray[Key] = Data;
			};
		};

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
	}

//
//================ Create and Update Window Mechanism ================//
//

	var windowdown=0;
	$('#CreateFormButton').click(function(event) {
		if (windowdown==2 || windowdown==0) {
			$('#CreateRecordForm').toggle('swing');
			$('#UpdateRecordForm').toggle(false);
			windowdown=1;
		};
	});

	$('#UpdateFormButton').click(function(event) {
		if (windowdown==1 || windowdown==0) {	
			$('#UpdateRecordForm').toggle('swing');
			$('#CreateRecordForm').toggle(false);
			windowdown=2;
		};
	});

//
//================ This prefills hidden form input boxes for the Creation of a record ================//
//

	document.getElementsByName('CreateCTime')[0].value=TimeStamp();
	document.getElementsByName('CreateUTime')[0].value=TimeStamp();
	document.getElementsByName('CreateDataArray')[0].value=JSON.stringify(DataArray);

//
//================ This prefills form input boxes for Updating record ================//
//

	document.getElementsByName('UpdateEstimator')[0].value=localStorage.getItem('UpdateEstimator');
	document.getElementsByName('UpdateUPC')[0].value=localStorage.getItem('UpdateUPC');
	document.getElementsByName('UpdateRoadNumber')[0].value=localStorage.getItem('UpdateRoadNumber');
	document.getElementsByName('UpdateTimeStamp')[0].value=TimeStamp();
	document.getElementsByName('UpdateDataArray')[0].value=JSON.stringify(DataArray);

//
//================ Create Form AJAX call ================//
//

	$('#CreateForm').submit(function (e) {

		var CreateEsti=document.getElementsByName('CreateEstimator')[0].value,
			CreateUPC=document.getElementsByName('CreateUPC')[0].value,
			CreateRN=document.getElementsByName('CreateRoadNumber')[0].value,
			CCreateTS=document.getElementsByName('CreateCTime')[0].value,
			CUpdateTS=document.getElementsByName('CreateUTime')[0].value,
			CreateDA=document.getElementsByName('CreateDataArray')[0].value;

		$.ajax({
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
		
	});
//
//================ Update Form AJAX call ================//
//

	$('#UpdateForm').submit(function (e) {

		var UpdateEsti=document.getElementsByName('UpdateEstimator')[0].value,
			UpdateUPC=document.getElementsByName('UpdateUPC')[0].value,
			UpdateRoadNumber=document.getElementsByName('UpdateRoadNumber')[0].value,
			UpdateTS=document.getElementsByName('UpdateTimeStamp')[0].value,
			UpdateDA=document.getElementsByName('UpdateDataArray')[0].value;

		$.ajax({
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
		
	});

//================ CHECK LIVE COPY WITH PHONE ================//
//================ Required Attribute Not work in Safari Browser ================//
//
//the check if the update holds {git pull origin master}
//	console.log($('form'));
	$('form').submit( function (e) {

		var ref = $(this).find('[required]');

		$(ref).each(function() {
			if ($(this).val() == '') {
				alert("Please fill in ");
				$(this).focus();
				e.preventDefault();
				return false;
			};
		});
		return true;
	});
});
