$(document).ready(function(){

	var	inp_dat_arr=[];
		sel_dat_arr=[];
	//two arrays to store ID Strings of INPUT data and SELECT Types
	
	$('#Road_Estimate_Tool input').each(function(){
			inp_dat_arr.push($(this).attr('id'));
	});
	//Grabs each INPUT data type ID

	for (var i = inp_dat_arr.length - 1; i >= 0; i--) {
		if (localStorage.getItem(inp_dat_arr[i])!= null) {
			document.getElementById(inp_dat_arr[i]).value=localStorage.getItem(inp_dat_arr[i]);
		};
	};
	//Gos through the array of all INPUT ID's and looks to see if there exists data attached to that ID. If not it moves on to the next one

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
})

$( "#Road_Estimate_Tool input" ).bind('keyup mouseup',input_data_add);
$( "#Road_Estimate_Tool select" ).bind('change',select_data_add);
//what function is called when the INPUT and SELECT type of inputs are interacted with

function input_data_add() 
{
	localStorage.setItem(this.id,this.value);
}
function select_data_add()
{
	localStorage.setItem(this.id,this.options[this.selectedIndex].value);
}
//the functions that were mentioned above

function resetdata() {
var		dataidarr=[];
		districtone=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000,25];
		districttwo=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		districtthree=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
		districtfour=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
		//defined three options for prefilled input boxes

			$('#Road_Estimate_Tool input').each(function(){
					dataidarr.push($(this).attr('id'));
			});
			// An array that has all the IDs of the input of the unit prices 

		switch (document.getElementById('choice').value)
		{
			case 'Bristol, Salem, Lynchburg, Staunton':
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtone[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districtone[i];
				};
				break;
			case 'NOVA':
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districttwo[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districttwo[i];
				};
				break;
			case 'Hampton Roads':
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtthree[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districtthree[i];
				};
				break;
			case 'Fredericksburg, Richmond, Culpepper':
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtfour[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districtfour[i];
				};
				break;
			default:
				break;
		}
		//switch for different preferences that uses the input ID array and zips it up with the preset values of the specified areas
}