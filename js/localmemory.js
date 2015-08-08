$(document).ready(function(){

	var inp_pres = $.contains(document.body,$("#Road_Estimate_Tool input")[0]),
		sel_pres = $.contains(document.body,$("#Road_Estimate_Tool select")[0]),
		tex_pres = $.contains(document.body,$("#Road_Estimate_Tool textarea")[0]);
	//three arrays to store ID Strings of INPUT data, SELECT, and TEXTAREA Types
	
	if (inp_pres) {

	var	inp_dat_arr=[],
		per_dat_arr=[];



		$('#Road_Estimate_Tool input').each(function(){
			if ($(this).attr('type') == "range") {
				per_dat_arr.push($(this).attr('id'))
				};
			inp_dat_arr.push($(this).attr('id'));
		});
		//Grabs each INPUT data type ID

		for (var i = inp_dat_arr.length - 1; i >= 0; i--) {
			if (localStorage.getItem(inp_dat_arr[i])!= null) {
				if (jQuery.inArray(inp_dat_arr[i],per_dat_arr)>=0) {
				document.getElementById(inp_dat_arr[i]+'Show').innerText=localStorage.getItem(inp_dat_arr[i]);
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

$( "#Road_Estimate_Tool input" ).bind('keyup mouseup',input_data_add);
$("#Road_Estimate_Tool input[type=range]").mousemove(function(){
	$("#"+this.id+"Show").html($(this).val());
})
$( "#Road_Estimate_Tool select" ).bind('change',select_data_add);
$( "#Road_Estimate_Tool textarea" ).bind('keyup mouseup',input_data_add);
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

function expandTextarea(num) {
    var $element = $('.misclass').get(num);

    $element.addEventListener('keyup', function(){
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}

function resetdata() {
var		dataidarr=[];

			$('#Road_Estimate_Tool input').each(function(){
					dataidarr.push($(this).attr('id'));
			});
			// An array that has all the IDs of the input of the unit prices 

		switch (document.getElementById('choice').value)
		{
			case 'Bristol, Salem, Lynchburg, Staunton':
				var districtone=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000,25];

				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtone[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districtone[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			case 'NOVA':
				var districttwo=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,51];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districttwo[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districttwo[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			case 'Hampton Roads':
				var districtthree=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,52];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtthree[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districtthree[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			case 'Fredericksburg, Richmond, Culpepper':
					districtfour=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,53];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtfour[i]);
				};
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					document.getElementById(dataidarr[i]).value=districtfour[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			default:
				break;
		}
}		//switch for different preferences that uses the input ID array and zips it up with the preset values of the specified areas