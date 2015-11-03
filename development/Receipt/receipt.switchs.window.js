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

//
// <================ Resizes the large window to make it mobile/small screen friendly ================>
//

window.onload=function () {
    $(window).bind('resize', function() {
        if ($(window).width()<=600) {
            ScreenResize();    
        };
    }).trigger('resize');
};