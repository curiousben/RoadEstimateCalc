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

$(document).ready(function(){
	ChoiceLoader();

	$('#CreateFormButton').click(CreateRecordChoice);

	$('#UpdateFormButton').click(UpdateRecordChoice);

	$('#LastImportInfo').click(LastImportedRecordInfo);

//
// <================ Create Form AJAX call ================>
//

	$('#CreateForm').submit(CreateAJAXCall);
//
// <================ Update Form AJAX call ================>
//

	$('#UpdateForm').submit(UpdateAJAXCall);

//================ CHECK LIVE COPY WITH PHONE ================//
// <================ Required Attribute Not work in Safari Browser ================>
//
//the check if the update holds {git pull origin master}
//	console.log($('form'));
	$('form').submit( function (e) {

		var ref = $(this).find('[required]');

		$(ref).each(function() {
			if ($(this).val() == '') {
				alert("Please fill in "+$(this).attr('id'));
				$(this).focus();
				e.preventDefault();
				return false;
			};
		});
		return true;
	});
});