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

//
// <================ Sliders that use jQuery UI ================>
//

// Incase of a blank value in localStorage so the slider doesn't read null
function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 5;
    };
};

function CurrentlyloadedRecord () {
	if (localStorage.getItem('ImportEstimator') != null || localStorage.getItem('ImportUPC') != null || localStorage.getItem('ImportRoadNumber') != null) {
		$('#LoadedRecord').removeClass('hide');
		document.getElementById('RecordEstimator').innerHTML=localStorage.getItem('ImportEstimator');
		document.getElementById('RecordUPC').innerHTML=localStorage.getItem('ImportUPC');
		document.getElementById('RecordRoadNumber').innerHTML=localStorage.getItem('ImportRoadNumber');
		
		var	lastpageURL,
			firstfwdslash=true,
			fulllastpageURL=$(document)[0].URL;
		for (var i = fulllastpageURL.length - 1; i >= 0; i--) {
			if (fulllastpageURL.charAt(i)=='/' && firstfwdslash==true) {
				lastpageURL=fulllastpageURL.slice(i, fulllastpageURL.length);
				firstfwdslash=false;
			};
		};
		localStorage.setItem('lastURL',lastpageURL);
	};
};

function ContingencySlider() {
	$('#GIPercent').slider({
		value: numberleftblank(localStorage.getItem('GIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#GIPercentinput').val(ui.value);
			localStorage.setItem('GIPercent',ui.value);
		},
	});
	$('#GIPercentinput').change(function(event) {
		localStorage.setItem('GIPercent',$(this).val());
		$("#GIPercent").slider("option", "value", $(this).val());
	});
	$('#GIPercentinput').val($('#GIPercent').slider("value"));

	$('#DIPercent').slider({
		value: numberleftblank(localStorage.getItem('DIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#DIPercentinput').val(ui.value);
			localStorage.setItem('DIPercent',ui.value);
		},
	});
	$('#DIPercentinput').change(function(event) {
		localStorage.setItem('DIPercent',$(this).val());
		$("#DIPercent").slider("option", "value", $(this).val());
	});
	$('#DIPercentinput').val($('#DIPercent').slider("value"));
	
	$('#PavIPercent').slider({
		value: numberleftblank(localStorage.getItem('PavIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#PavIPercentinput').val(ui.value);
			localStorage.setItem('PavIPercent',ui.value);
		},
	});
	$('#PavIPercentinput').change(function(event) {
		localStorage.setItem('PavIPercent',$(this).val());
		$("#PavIPercent").slider("option", "value", $(this).val());
	});
	$('#PavIPercentinput').val($('#PavIPercent').slider("value"));
	
	$('#IIPercent').slider({
		value: numberleftblank(localStorage.getItem('IIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#IIPercentinput').val(ui.value);
			localStorage.setItem('IIPercent',ui.value);
		},
	});
	$('#IIPercentinput').change(function(event) {
		localStorage.setItem('IIPercent',$(this).val());
		$("#IIPercent").slider("option", "value", $(this).val());
	});
	$('#IIPercentinput').val($('#IIPercent').slider("value"));
	
	$('#ProIPercent').slider({
		value: numberleftblank(localStorage.getItem('ProIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#ProIPercentinput').val(ui.value);
			localStorage.setItem('ProIPercent',ui.value);
		},
	});
	$('#ProIPercentinput').change(function(event) {
		localStorage.setItem('ProIPercent',$(this).val());
		$("#ProIPercent").slider("option", "value", $(this).val());
	});
	$('#ProIPercentinput').val($('#ProIPercent').slider("value"));
	
	$('#ECPercent').slider({
		value: numberleftblank(localStorage.getItem('ECPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#ECPercentinput').val(ui.value);
			localStorage.setItem('ECPercent',ui.value);
		},
	});
	$('#ECPercentinput').change(function(event) {
		localStorage.setItem('ECPercent',$(this).val());
		$("#ECPercent").slider("option", "value", $(this).val());
	});
	$('#ECPercentinput').val($('#ECPercent').slider("value"));

	$('#UPercent').slider({
		value: numberleftblank(localStorage.getItem('UPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#UPercentinput').val(ui.value);
			localStorage.setItem('UPercent',ui.value);
		},
	});
	$('#UPercentinput').change(function(event) {
		localStorage.setItem('UPercent',$(this).val());
		$("#UPercent").slider("option", "value", $(this).val());
	});
	$('#UPercentinput').val($('#UPercent').slider("value"));
	
	$('#TSPercent').slider({
		value: numberleftblank(localStorage.getItem('TSPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#TSPercentinput').val(ui.value);
			localStorage.setItem('TSPercent',ui.value);
		},
	});
	$('#TSPercentinput').change(function(event) {
		localStorage.setItem('TSPercent',$(this).val());
		$("#TSPercent").slider("option", "value", $(this).val());
	});
	$('#TSPercentinput').val($('#TSPercent').slider("value"));
	
	$('#BPercent').slider({
		value: numberleftblank(localStorage.getItem('BPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#BPercentinput').val(ui.value);
			localStorage.setItem('BPercent',ui.value);
		},
	});
	$('#BPercentinput').change(function(event) {
		localStorage.setItem('BPercent',$(this).val());
		$("#BPercent").slider("option", "value", $(this).val());
	});
	$('#BPercentinput').val($('#BPercent').slider("value"));
};

function CurrentlyloadedRecord () {
	if (localStorage.getItem('ImportEstimator') != null || localStorage.getItem('ImportUPC') != null || localStorage.getItem('ImportRoadNumber') != null) {
		$('#LoadedRecord').removeClass('hide');
		document.getElementById('RecordEstimator').innerHTML=localStorage.getItem('ImportEstimator');
		document.getElementById('RecordUPC').innerHTML=localStorage.getItem('ImportUPC');
		document.getElementById('RecordRoadNumber').innerHTML=localStorage.getItem('ImportRoadNumber');
		
		var	lastpageURL,
			firstfwdslash=true,
			fulllastpageURL=$(document)[0].URL;
		for (var i = fulllastpageURL.length - 1; i >= 0; i--) {
			if (fulllastpageURL.charAt(i)=='/' && firstfwdslash==true) {
				lastpageURL=fulllastpageURL.slice(i, fulllastpageURL.length);
				firstfwdslash=false;
			};
		};
		localStorage.setItem('lastURL',lastpageURL);
	};
};

function ImportCurrentlyLoadedRecord () {
	Estimator=localStorage.getItem('ImportEstimator');
	UPC=localStorage.getItem('ImportUPC');
	RoadNumber=localStorage.getItem('ImportRoadNumber');
	$.getJSON('/datarecords/Estimator&&UPC&&RoadNumber/'+Estimator+'&&'+UPC+'&&'+RoadNumber+'', function(datarecord) {
		DataArrayObject=$.parseJSON((datarecord[0].DataArray));
		localStorage.clear();
		for(var i in DataArrayObject){
			localStorage.setItem(i,DataArrayObject[i])
		}
		localStorage.setItem('ImportEstimator',datarecord[0].Estimator);
		localStorage.setItem('ImportUPC',datarecord[0].UPC);
		localStorage.setItem('ImportRoadNumber',datarecord[0].RoadNumber);
		ContingencySlider();
	});
}

function ReceiptLink () {
	window.location='http://localhost:3000/Receipt';
}