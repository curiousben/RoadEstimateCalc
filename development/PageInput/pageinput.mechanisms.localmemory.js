/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This web app does not constitue a standard, specification, or regulation.
* Any inclusion of manufacturer names, trade names, or trademarksis for 
* identification purposes only and is not to be considered an endorsement.
* 
*/

//
// <================ How the App prefills input boxes with data ================>
//

function Pageload() {
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
						// Only the checkbox that are checked in the local storage then the DOM checkbox gets updated
						document.getElementById(inp_dat_arr[i]).checked=true;
						checkboxhide(inp_dat_arr[i].slice(-1),false);
					}
					else
					{
						document.getElementById(inp_dat_arr[i]).checked=false;
					};
				};
				document.getElementById(inp_dat_arr[i]).value=localStorage.getItem(inp_dat_arr[i]);
			}else {
				// If the initial local storage is empty then it get filled with a null value since the value doesn't exist in the record.
				document.getElementById(inp_dat_arr[i]).value=null;
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

		$('#Road_Estimate_Tool textarea').each(function() {
			tex_dat_arr.push($(this).attr('id'));
		});
		//Grabs each TEXTAREA data type ID
		
		$('#Road_Estimate_Tool textarea').each(function() {
			this.setAttribute('style','height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
		}).on('input',function () {
			this.style.height = 'auto';
			this.style.height = (this.scrollHeight) + 'px';
		});

		for (var i = tex_dat_arr.length - 1; i >= 0; i--) {
			if (localStorage.getItem(tex_dat_arr[i])!= null) {
				document.getElementById(tex_dat_arr[i]).value=localStorage.getItem(tex_dat_arr[i]);
			} else {
				document.getElementById(tex_dat_arr[i]).value=null;
			};
		};
		//Gos through the array of all TEXTAREA ID's and looks to see if there exists data attached to that ID. If not it moves on to the next one
		$('#Road_Estimate_Tool textarea').trigger('input');
	};
};