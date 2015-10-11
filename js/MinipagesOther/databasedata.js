$(document).ready(function(){
	DataArray={};
	var windowdown=0;
		for (var i = localStorage.length - 1; i >= 0; i--) {
			Key=localStorage.key(i);
			Data=localStorage.getItem(localStorage.key(i))
			DataArray[Key] = Data;
		};
	document.getElementsByName('CreateDataArray')[0].value=JSON.stringify(DataArray);
	document.getElementsByName('UpdateDataArray')[0].value=JSON.stringify(DataArray);
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
	document.getElementsByName('UpdateUPC')[0].value=localStorage.getItem('UpdateUPC');
	document.getElementsByName('UpdateRoadNumber')[0].value=localStorage.getItem('UpdateRoadNumber');
});
