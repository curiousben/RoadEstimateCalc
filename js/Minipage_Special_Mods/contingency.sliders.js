/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This weeb app does not constitue a standard, specification, or regulation.
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
}

$(function () {
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
});
