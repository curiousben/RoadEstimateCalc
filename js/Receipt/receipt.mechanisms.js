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