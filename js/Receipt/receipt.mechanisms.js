window.onload = function () {
    $("#calc").click( function () {
        GrandTotal();
    })
    $("#prnt").click(function () {
        window.print()
    })
    $('#pdfdown').click(function() {
        pdfg();
    });
    $(window).bind('resize', function() {
        ScreenResize();
    }).trigger('resize');
}
function ScreenResize() {
	var perferedWidth=676;
    var fontsize = 16;

    var displayWidth=$(window).width();
    var percentage = displayWidth/perferedWidth;
    var newFontSize = Math.floor(fontsize * percentage) -1;
    $('#Road_Estimate_Tool_Receipt').css('font-size', newFontSize);
}