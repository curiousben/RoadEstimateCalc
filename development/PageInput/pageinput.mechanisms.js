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
// <================ functions that the the switches use to build a record of data ================>
//

function basicinputmemory () {
	localStorage.setItem(this.id,this.value);
	navBarErrorStorage(pageLetterNumber());
	navBarErrorCheck(pageLetterNumber());
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
};

//
// <================ Functions that define the loaded record feature ================>  
//

function CurrentlyloadedRecord () {
	if (localStorage.getItem('ImportEstimator') != null || localStorage.getItem('ImportUPC') != null || localStorage.getItem('ImportRoadNumber') != null) {
		$('#LoadedRecord').removeClass('hide');
		document.getElementById('RecordEstimator').innerHTML=localStorage.getItem('ImportEstimator');
		document.getElementById('RecordUPC').innerHTML=localStorage.getItem('ImportUPC');
		document.getElementById('RecordRoadNumber').innerHTML=localStorage.getItem('ImportRoadNumber');
		var	lastpageURL,
			firstfwdslash=true,
			fulllastpageURL=$(document)[0].URL;
		for (var i = fulllastpageURL.length - 1; i >= 0; i--) {
			if (fulllastpageURL.charAt(i)=='/' && firstfwdslash==true) {
				lastpageURL=fulllastpageURL.slice(i, fulllastpageURL.length);
				firstfwdslash=false;
			};
		};
		localStorage.setItem('lastURL',lastpageURL);
	};
};

function ReceiptLink () {
	window.location='http://localhost:3000/Receipt';
}

function ImportCurrentlyLoadedRecord () {
	Estimator=localStorage.getItem('ImportEstimator');
	UPC=localStorage.getItem('ImportUPC');
	RoadNumber=localStorage.getItem('ImportRoadNumber');
	$.getJSON('/datarecords/Estimator&&UPC&&RoadNumber/'+Estimator+'&&'+UPC+'&&'+RoadNumber+'', function(datarecord) {
		DataArrayObject=$.parseJSON((datarecord[0].DataArray));
		localStorage.clear();
		for(var i in DataArrayObject){
			localStorage.setItem(i,DataArrayObject[i])
		}
		localStorage.setItem('ImportEstimator',datarecord[0].Estimator);
		localStorage.setItem('ImportUPC',datarecord[0].UPC);
		localStorage.setItem('ImportRoadNumber',datarecord[0].RoadNumber);
		
		PageAndAddonsRefresh();
		
		var	lastpageURL,
			firstfwdslash=true,
			fulllastpageURL=$(document)[0].URL;
		for (var i = fulllastpageURL.length - 1; i >= 0; i--) {
			if (fulllastpageURL.charAt(i)=='/' && firstfwdslash==true) {
				lastpageURL=fulllastpageURL.slice(i, fulllastpageURL.length);
				firstfwdslash=false;
			};
		};
		localStorage.setItem('lastURL',lastpageURL);
	});
};

//
// <================ Page Refresh Functions ================>
//
// Handles how to refresh the page so that localstorage is always reflected after
// any change
//

// This function is called to initalize the Silder addon functions when the
// right page is loaded.

function Addons () {
	if (typeof(ProposedRoadwaySliders)==='function') {
		ProposedRoadwaySliders();
	};
	if (typeof(UnitPricesSlider)==='function') {
		UnitPricesSlider();
		$('#regionreset').click(RegionalPrices);
	};
};

// This functions calls on other functions to refresh all data that is found in
// localstoarge.

function PageAndAddonsRefresh () {
	if (typeof(ProposedRoadwaySliders) === 'function') {
		Pageload();
		ProposedRoadwaySliders();
	};
	if (typeof(UnitPricesSlider)=== 'function') {
		UnitPricesSlider();
		Pageload();
	};
	Pageload();
}