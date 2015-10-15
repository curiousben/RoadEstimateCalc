$('#resetbutton').click(function() {
	$('#ResetAllData').modal('show');
});
$('#memclrchoice').click(function() {
	$('#ResetAllData').modal('hide');
	localStorage.clear();
	});
function expandTextarea(num) {
    var $element = $('.misclass').get(num);

    $element.addEventListener('keyup', function(){
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}
$('#regionreset').click(function() {
	var	dataidarr=[];

			$('#Road_Estimate_Tool input').each(function(){
					dataidarr.push($(this).attr('id'));
			});
			// An array that has all the IDs of the input of the unit prices 

		switch (document.getElementById('choice').value)
		{
			case 'BristolSalemLynchburgStauntonCulpepper':
				var districtone=[20000,17,15,17,20,40,125,250,300,4000,35,110,100,90,20,25,400,2000,5000,10000,2000,90,15,4,500,75,300000,0,25,2500,2000,300,18,700,75000];

				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtone[i]);
					document.getElementById(dataidarr[i]).value=districtone[i];
				};
				localStorage.setItem("pcei",25);
				$("#pcei").slider("option", "value", 25);
				$('#pceiinput').val($('#pcei').slider("value"));
				break;
			case 'NOVA':
				var districttwo=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districttwo[i]);
					document.getElementById(dataidarr[i]).value=districttwo[i];
				};
				localStorage.setItem("pcei",51);
				$("#pcei").slider("option", "value", 51);
				$('#pceiinput').val($('#pcei').slider("value"));
				break;
			case 'HamptonRoads':
				var districtthree=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtthree[i]);
					document.getElementById(dataidarr[i]).value=districtthree[i];
				};
				localStorage.setItem("pcei",52);
				$("#pcei").slider("option", "value", 52);
				$('#pceiinput').val($('#pcei').slider("value"));
				break;
			case 'FredericksburgRichmond':
					districtfour=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtfour[i]);
					document.getElementById(dataidarr[i]).value=districtfour[i];
				};
				localStorage.setItem("pcei",53);
				$("#pcei").slider("option", "value", 53);
				$('#pceiinput').val($('#pcei').slider("value"));
				break;
			default:
				break;
		}
		//switch for different preferences that uses the input ID array and zips it up with the preset values of the specified areas
});
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
}
function subcheckboxhide (curr,prev) {
	if (prev) {
		while (prev>=1) {
			$('#subcheckbox'+prev).toggle(false);
			prev--;
		};
	};
	while (curr>=1) {
		$('#subcheckbox'+curr).toggle('swing');
		curr--;
	}
}
// Uncomment to include backup local copy of bootstrap css
/*if ($('#TestsIfCDNBootstrapLoadsProperly').is(':visible') === true) {
    $('<link type="text/css" href="/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />').appendTo('head');
};*/