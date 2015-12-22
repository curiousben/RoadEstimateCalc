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
// <================ Sliders that use jQuery UI for ProposedRoadway Page ================>
//

function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 1;
    };
}

function ProposedRoadwaySliders() {	
	$('#NewHorizontalAlignment').slider({
		value: numberleftblank(localStorage.getItem('NewHorizontalAlignment')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#NewHorizontalAlignmentinput').val(ui.value);
			localStorage.setItem('NewHorizontalAlignment',ui.value);
		},
	});
	$('#NewHorizontalAlignmentinput').change(function(event) {
		localStorage.setItem('NewHorizontalAlignment',$(this).val());
		$("#NewHorizontalAlignment").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());
	});
	$('#NewHorizontalAlignmentinput').val($('#NewHorizontalAlignment').slider("value"));
};

function ProposedRoadwaySlidersIDs () {
	var ids=['NewHorizontalAlignment','number'];
	return ids;
}