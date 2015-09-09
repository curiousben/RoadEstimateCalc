$(function () {	
	$('#NewHorizontalAlignment').slider({
		value: numberleftblank(localStorage.getItem('NewHorizontalAlignment')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#NewHorizontalAlignmentinput').val(ui.value);
			localStorage.setItem('NewHorizontalAlignment',ui.value);
		},
	});
	$('#NewHorizontalAlignmentinput').change(function(event) {
		localStorage.setItem('NewHorizontalAlignment',$(this).val());
		$("#NewHorizontalAlignment").slider("option", "value", $(this).val());
	});
	$('#NewHorizontalAlignmentinput').val($('#NewHorizontalAlignment').slider("value"));
});