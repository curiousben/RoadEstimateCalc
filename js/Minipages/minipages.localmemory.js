$(document).ready(function(){

	var inp_pres = $.contains(document.body,$("#Road_Estimate_Tool input")[0]),
		sel_pres = $.contains(document.body,$("#Road_Estimate_Tool select")[0]),
		tex_pres = $.contains(document.body,$("#Road_Estimate_Tool textarea")[0]);
	// Determines whether or not there exists input, dropdown menus or text areas on the page if there exists input or select then page loads the localmemory's way of dealing with this kind of input
	
	if (inp_pres) {

	var	inp_dat_arr=[],
		che_dat_arr=[];
		// Arrays are only made if they absolutly need to be

		$('#Road_Estimate_Tool input').each(function(){
			if ($(this).attr('type') == "checkbox") {
				che_dat_arr.push($(this).attr('id'));
				};
			inp_dat_arr.push($(this).attr('id'));
		});

		// After going through each input id this function sorts more arrays with different input types (range and checkbox)
		// creates master array of ALL input ids (inp_dat_arr) then secondary arrays with more specific input types

		for (var i = inp_dat_arr.length - 1; i >= 0; i--) {
			// Iterates through the master array
			if (localStorage.getItem(inp_dat_arr[i])!= null) {
				//If there does not exist data for this particular data id in local stoarge then it skips them
				
				if (jQuery.inArray(inp_dat_arr[i],che_dat_arr)>=0) {
					// If the particular master array element is same as the checkbox input type then this gets executed
					if (localStorage.getItem(inp_dat_arr[i])=='true') {
						document.getElementById(inp_dat_arr[i]).checked=true;
						// Only the checkbox that are checked in the local storage then the DOM checkbox gets updated
						if (inp_dat_arr[i]=='SCI2') {
							var sub_che_dat_arr=[];//An array of sub checkboxs
							$('#checkbox1').toggle(false);
							$('#checkbox2').toggle('swing')
							$('#checkbox2 input[type="checkbox"]').each(function() {
								//Gathers all of the sub checkboxs
								if (localStorage.getItem($(this).attr('id'))=='true') {
									$(this).prop('checked',true);
									$('#checkbox2 input[type="checkbox"]').not(this).prop('checked', function (){
										$(this).prop('checked',false);
									});
									//Pulls only the checkbox that is checked and makes all the others false
									var checkedsubbox=$(this).attr('id');
									subcheckboxhide(checkedsubbox.slice(-1),false);
									//Takes the checked subcheckbox and takes the last letter of it's id (how many boxes it needs to unvail) and uses
									//that in the checkbox hide function.
								};
							});
							var sub_inp_dat_arr=[];
							$('#subcheckboxinput input').each(function() {
								document.getElementById($(this).attr('id')).value=localStorage.getItem($(this).attr('id'));
							});
						} 
						// This true block is for the sub selection in the connections tab it is hardwired to hide the first checkbox window and find the only checked checkbox and makes all other checkboxs not checked
						else {
							checkboxhide(inp_dat_arr[i].slice(-1),false);
						};
						
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

function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 1;
    };
}

function basicinputmemory () {
	localStorage.setItem(this.id,this.value);
}

function checkboxmemory () {
	var previouscheck,currentcheck;
		currentcheck=($(this).prop('id')).slice(-1);
		options=($(this).prop('id')).slice(0,1);
		localStorage.setItem($(this).prop('id'),$(this).prop('checked'));

    $('#Road_Estimate_Tool input[type="checkbox"]').not(this).prop('checked', function () {
		if ($(this).prop('checked')) {
			previouscheck=($(this).prop('id')).slice(-1);
		};   	
	   	$(this).prop('checked',false);
	   	localStorage.setItem($(this).prop('id'),false);
  	});
  	if (options=='C') {
  		checkboxhide(currentcheck,previouscheck);
  	} 
  	else{
  		$('#checkbox1').toggle(false);
  		$('#checkbox2').toggle('swing');
  	};
		
}
function subcheckboxmemory () {
	var previouscheck,currentcheck;
		currentcheck=($(this).prop('id')).slice(-1);
		localStorage.setItem($(this).prop('id'),$(this).prop('checked'));

    $('#subconnectionselection input[type="checkbox"]').not(this).prop('checked', function () {
		if ($(this).prop('checked')) {
			previouscheck=($(this).prop('id')).slice(-1);
		};   	
	   	$(this).prop('checked',false);
	   	localStorage.setItem($(this).prop('id'),false);
  	});
  	subcheckboxhide(currentcheck,previouscheck);
}
//what function is called when the INPUT and SELECT type of inputs are interacted with

$( "#Road_Estimate_Tool input" ).bind('keyup mouseup', basicinputmemory);

$( "#Road_Estimate_Tool textarea" ).bind('keyup mouseup', basicinputmemory);

$( "#Road_Estimate_Tool select" ).bind('change',function () {
	localStorage.setItem(this.id,this.options[this.selectedIndex].value);
});

$('#Road_Estimate_Tool input[type="checkbox"]').on('change',checkboxmemory);

$('#subconnectionselection input[type="checkbox"]').on('change', subcheckboxmemory);

$("#subcheckboxinput input").bind('keyup mouseup', basicinputmemory);