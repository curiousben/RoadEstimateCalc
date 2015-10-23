//
//================ Sliders that use jQuery UI for Unit Prices Page ================//
//

function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 1;
    };
}

$(function () {	
	$('#pcei').slider({
		value: numberleftblank(localStorage.getItem('pcei')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#pceiinput').val(ui.value);
			localStorage.setItem('pcei',ui.value);
		},
	});
	$('#pceiinput').change(function(event) {
		localStorage.setItem('pcei',$(this).val());
		$("#pcei").slider("option", "value", $(this).val());
	});
	$('#pceiinput').val($('#pcei').slider("value"));
});