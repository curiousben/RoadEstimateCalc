$(document).ready(function(){

	var inp_pres = $.contains(document.body,$("#Road_Estimate_Tool input")[0]),
		sel_pres = $.contains(document.body,$("#Road_Estimate_Tool select")[0]),
		tex_pres = $.contains(document.body,$("#Road_Estimate_Tool textarea")[0]);
	//three arrays to store ID Strings of INPUT data, SELECT, and TEXTAREA Types
	
	if (inp_pres) {

	var	inp_dat_arr=[],
		per_dat_arr=[],
		che_dat_arr=[];


		$('#Road_Estimate_Tool input').each(function(){
			if ($(this).attr('type') == "range") {
				per_dat_arr.push($(this).attr('id'))
				};
			if ($(this).attr('type') == "checkbox") {
				che_dat_arr.push($(this).attr('id'))
				};
			inp_dat_arr.push($(this).attr('id'));
		});
		//Grabs each INPUT data type ID

		for (var i = inp_dat_arr.length - 1; i >= 0; i--) {
			if (localStorage.getItem(inp_dat_arr[i])!= null) {
				if (jQuery.inArray(inp_dat_arr[i],per_dat_arr)>=0) {
					document.getElementById(inp_dat_arr[i]+'Show').innerText=localStorage.getItem(inp_dat_arr[i]);
				};
				
				if (jQuery.inArray(inp_dat_arr[i],che_dat_arr)>=0) {
					if (localStorage.getItem(inp_dat_arr[i])=='true') {
						document.getElementById(inp_dat_arr[i]).checked=true;
						checkboxhide(inp_dat_arr[i].slice(-1),false);
					}
					else
					{
					document.getElementById(inp_dat_arr[i]).checked=false;
					};
				};
				document.getElementById(inp_dat_arr[i]).value=localStorage.getItem(inp_dat_arr[i]);
			};
		};
		//Gos through the array of all INPUT ID's and looks to see if there exists data attached to that ID. If not it moves on to the next one
	};

	if (sel_pres) {

		var	sel_dat_arr=[];

		$('#Road_Estimate_Tool select').each(function(){
				sel_dat_arr.push($(this).attr('id'));
		});
		//Grabs each SELECT data type ID
			
		for (var i = sel_dat_arr.length - 1; i >= 0; i--) {
			if (localStorage.getItem(sel_dat_arr[i])!= null) {
				$('#'+sel_dat_arr[i]).val(localStorage.getItem(sel_dat_arr[i]));
			} 
			else {
				document.getElementById(sel_dat_arr[i]).selectedIndex=0;
			};
		};
		//Gos through the array of all SELECT ID's and looks to see if there exists data attached to that ID. If not it puts the selection at the resting position
	};

	if (tex_pres) {

	var tex_dat_arr=[];

		$('#Road_Estimate_Tool textarea').each(function(){
			tex_dat_arr.push($(this).attr('id'));
			expandTextarea(tex_dat_arr.length-1,$(this).attr('id'));
		});
		//Grabs each TEXTAREA data type ID

		for (var i = tex_dat_arr.length - 1; i >= 0; i--) {
			if (localStorage.getItem(tex_dat_arr[i])!= null) {
				document.getElementById(tex_dat_arr[i]).value=localStorage.getItem(tex_dat_arr[i]);
			};
		};
		//Gos through the array of all TEXTAREA ID's and looks to see if there exists data attached to that ID. If not it moves on to the next one
	};
})

$( "#Road_Estimate_Tool input" ).bind('keyup mouseup', function () {
	localStorage.setItem(this.id,this.value);
});
$("#Road_Estimate_Tool input[type=range]").mousemove(function(){
	$("#"+this.id+"Show").html($(this).val());
})
$( "#Road_Estimate_Tool select" ).bind('change',function () {
	localStorage.setItem(this.id,this.options[this.selectedIndex].value);
});
$( "#Road_Estimate_Tool textarea" ).bind('keyup mouseup', function () {
	localStorage.setItem(this.id,this.value);
});
$('#Road_Estimate_Tool input[type="checkbox"]').on('change', function() {
	var previouscheck,currentcheck;
		currentcheck=($(this).prop('id')).slice(-1);
		localStorage.setItem($(this).prop('id'),$(this).prop('checked'));

   $('#Road_Estimate_Tool input[type="checkbox"]').not(this).prop('checked', function () {
		if ($(this).prop('checked')) {
			previouscheck=($(this).prop('id')).slice(-1);
		};   	
	   	$(this).prop('checked',false);
	   	localStorage.setItem($(this).prop('id'),false);
   });
	checkboxhide(currentcheck,previouscheck);
});
//what function is called when the INPUT and SELECT type of inputs are interacted with