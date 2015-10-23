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
    // Font Conversion
    var perferedWidth=676;
    var fontsize = 16;

    var displayWidth=$(window).width();
    var fontpercentage = displayWidth/perferedWidth;
    var newFontSize = Math.floor(fontsize * fontpercentage) -1;

    // TextArea Conversion
    var perferedTextAreaWidth=572;
    var widthTextArea=128;
    var heightTextArea=34;

    var textareapercentage=displayWidth/perferedTextAreaWidth;
    var newTextAreaWidthSize = Math.floor(widthTextArea*textareapercentage)-1;
    var newTextAreaHeightSize = Math.floor(heightTextArea*textareapercentage)-1;

    // Input Conversion
    var perferedinputWidth=572;
    var widthInput=36;
    var heightInput=20;

    var inputpercentage=displayWidth/perferedinputWidth;
    var newInputWidthSize= Math.floor(widthInput*inputpercentage)-1;
    var newInputHeightSize= Math.floor(heightInput*inputpercentage)-1;

    $('#MiscellaneousTable').css('font-size', newFontSize);
    $('.form-control').css('font-size', newFontSize);

}