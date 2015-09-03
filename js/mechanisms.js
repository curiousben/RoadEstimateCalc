$('#resetbutton').click(function() {
	$('#ResetAllData').modal('show');
});
 $('#memclrchoice').click(function() {
	$('#ResetAllData').modal('hide');
	resetallestimatedata();
	});
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
					document.getElementById(dataidarr[i]).value=districtone[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			case 'NOVA':
				var districttwo=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,51];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districttwo[i]);
					document.getElementById(dataidarr[i]).value=districttwo[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			case 'Hampton Roads':
				var districtthree=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,52];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtthree[i]);
					document.getElementById(dataidarr[i]).value=districtthree[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			case 'Fredericksburg, Richmond, Culpepper':
					districtfour=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,53];
				for (var i = dataidarr.length - 1; i >= 0; i--) {
					localStorage.setItem(dataidarr[i],districtfour[i]);
					document.getElementById(dataidarr[i]).value=districtfour[i];
				};
				document.getElementById("pceiShow").innerText=localStorage.getItem("pcei");
				break;
			default:
				break;
		}
}		//switch for different preferences that uses the input ID array and zips it up with the preset values of the specified areas
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
function resetallestimatedata () {
	localStorage.clear();
}