//
//================ Resizes the large window to make it mobile/small screen friendly ================//
//

window.onload=function () {
    $(window).bind('resize', function() {
        if ($(window).width()<=600) {
            ScreenResize();    
        };
    }).trigger('resize');
};

function ScreenResize() {
    var perferedWidth=676;
    var fontsize = 16;

    var displayWidth=$(window).width();
    var percentage = displayWidth/perferedWidth;
    var newFontSize = Math.floor(fontsize * percentage) -1;
    $('#Road_Estimate_Tool_Receipt ').css('font-size', newFontSize);
}