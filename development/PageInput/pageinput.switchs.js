/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This web app does not constitue a standard, specification, or regulation.
* Any inclusion of manufacturer names, trade names, or trademarks is for 
* identification purposes only and is not to be considered an endorsement.
* 
*/

$(document).ready(function(){
	CurrentlyloadedRecord();
	Pageload();
	Addons();

	$( "#Road_Estimate_Tool input" ).bind('keyup mouseup', basicinputmemory);

	$( "#Road_Estimate_Tool textarea" ).bind('keyup mouseup', basicinputmemory);

	$( "#Road_Estimate_Tool select" ).bind('change',function () {
		localStorage.setItem(this.id,this.options[this.selectedIndex].value);
	});

	$('#Road_Estimate_Tool input[type="checkbox"]').on('change',checkboxmemory);

	$('#ReceiptOfLoaded').click(ReceiptLink);

	$('#ImportLastloaded').click(ImportCurrentlyLoadedRecord);
});