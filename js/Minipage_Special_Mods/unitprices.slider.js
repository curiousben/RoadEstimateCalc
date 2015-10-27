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
// <================ Sliders that use jQuery UI for Unit Prices Page ================>
//

function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 1;
    };
}

$(function () {	
	$('#pcei').slider({
		value: numberleftblank(localStorage.getItem('pcei')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#pceiinput').val(ui.value);
			localStorage.setItem('pcei',ui.value);
		},
	});
	$('#pceiinput').change(function(event) {
		localStorage.setItem('pcei',$(this).val());
		$("#pcei").slider("option", "value", $(this).val());
	});
	$('#pceiinput').val($('#pcei').slider("value"));
});