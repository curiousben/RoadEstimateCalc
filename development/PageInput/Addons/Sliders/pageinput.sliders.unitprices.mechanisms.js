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
// <================ Sliders that use jQuery UI for Unit Prices Page ================>
//

function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 1;
    };
}

function UnitPricesSlider() {	
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
};

//
// <================ Regional prices prefill profile on the Unit Prices page ================>
//

function RegionalPrices () {
	var	dataidarr=[];

		// An array that has all the IDs of the input of the unit prices 
	$('#Road_Estimate_Tool input').each(function(){
			dataidarr.push($(this).attr('id'));
	});

	//switch for different preferences that uses the input ID array and zips it up with the preset values of the specified areas
	switch (document.getElementById('choice').value)
	{
		case 'BristolSalemLynchburgStauntonCulpepper':
			var districtone=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000];

			for (var i = dataidarr.length - 1; i >= 0; i--) {
				localStorage.setItem(dataidarr[i],districtone[i]);
				document.getElementById(dataidarr[i]).value=districtone[i];
			};
			localStorage.setItem("pcei",20);
			$("#pcei").slider("option", "value", 20);
			$('#pceiinput').val($('#pcei').slider("value"));
			break;
		case 'NOVA':
			var districttwo=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000];
			for (var i = dataidarr.length - 1; i >= 0; i--) {
				localStorage.setItem(dataidarr[i],districttwo[i]);
				document.getElementById(dataidarr[i]).value=districttwo[i];
			};
			localStorage.setItem("pcei",20);
			$("#pcei").slider("option", "value", 20);
			$('#pceiinput').val($('#pcei').slider("value"));
			break;
		case 'HamptonRoads':
			var districtthree=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000];
			for (var i = dataidarr.length - 1; i >= 0; i--) {
				localStorage.setItem(dataidarr[i],districtthree[i]);
				document.getElementById(dataidarr[i]).value=districtthree[i];
			};
			localStorage.setItem("pcei",20);
			$("#pcei").slider("option", "value", 20);
			$('#pceiinput').val($('#pcei').slider("value"));
			break;
		case 'FredericksburgRichmond':
				districtfour=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000];
			for (var i = dataidarr.length - 1; i >= 0; i--) {
				localStorage.setItem(dataidarr[i],districtfour[i]);
				document.getElementById(dataidarr[i]).value=districtfour[i];
			};
			localStorage.setItem("pcei",20);
			$("#pcei").slider("option", "value", 20);
			$('#pceiinput').val($('#pcei').slider("value"));
			break;
		default:
			break;
	};
};
