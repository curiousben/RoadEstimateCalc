//
//================ All types of input that the User can interact and their associated functions ================//
//

$( "#Road_Estimate_Tool input" ).bind('keyup mouseup', basicinputmemory);

$( "#Road_Estimate_Tool textarea" ).bind('keyup mouseup', basicinputmemory);

$( "#Road_Estimate_Tool select" ).bind('change',function () {
	localStorage.setItem(this.id,this.options[this.selectedIndex].value);
});

$('#Road_Estimate_Tool input[type="checkbox"]').on('change',checkboxmemory);

function basicinputmemory () {
	localStorage.setItem(this.id,this.value);
};

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
	checkboxhide(currentcheck,previouscheck);
};

function checkboxhide (curr,prev) {

	if (prev) {
		while (prev>=1) {
			$('#checkbox'+prev).toggle(false);
			prev--;
		};
	};
	while (curr>=1) {
		$('#checkbox'+curr).toggle('swing');
		curr--;
	};
};

function expandTextarea(num) {
    var $element = $('.misclass').get(num);

    $element.addEventListener('keyup', function(){
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}

//
//================ The final button that clears the whole device of data on index.ejs within the modal window ================//
//

$('#memclrchoice').click(function() {
	$('#ResetAllData').modal('hide');
	localStorage.clear();
	});

//
//================ Regional prices prefill profile on the Unit Prices page ================//
//

$('#regionreset').click(function() {
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
	}
});

// Uncomment to include backup local copy of bootstrap css
/*if ($('#TestsIfCDNBootstrapLoadsProperly').is(':visible') === true) {
    $('<link type="text/css" href="/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />').appendTo('head');
};*/