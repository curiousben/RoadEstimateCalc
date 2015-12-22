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

$(document).ready(function() {
	CurrentlyloadedRecord();
	ContingencySlider();
	navBarErrorStorage(pageLetterNumber());
	navBarErrorCheck(pageLetterNumber());
	$('#ImportLastloaded').click(ImportCurrentlyLoadedRecord);

	$('#ReceiptOfLoaded').click(ReceiptLink);
});
