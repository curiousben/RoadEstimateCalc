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
// <================ Event Listeners for buttons on the receipt page ================>
//

$(document).ready(function() {
    $("#calc").click( function () {
        GrandTotal();
    })
    $("#prnt").click(function () {
        window.print()
    })
    $('#pdfdown').click(function() {
        pdfg();
    });    
});