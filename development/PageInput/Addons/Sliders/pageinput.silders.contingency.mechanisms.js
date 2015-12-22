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
// <================ Sliders that use jQuery UI ================>
//

// Incase of a blank value in localStorage so the slider doesn't read null
function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 5;
    };
};

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

function ContingencySlider() {
	$('#GIPercent').slider({
		value: numberleftblank(localStorage.getItem('GIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#GIPercentinput').val(ui.value);
			localStorage.setItem('GIPercent',ui.value);
		},
	});
	$('#GIPercentinput').change(function(event) {
		localStorage.setItem('GIPercent',$(this).val());
		$("#GIPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());
	});
	$('#GIPercentinput').val($('#GIPercent').slider("value"));

	$('#DIPercent').slider({
		value: numberleftblank(localStorage.getItem('DIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#DIPercentinput').val(ui.value);
			localStorage.setItem('DIPercent',ui.value);
		},
	});
	$('#DIPercentinput').change(function(event) {
		localStorage.setItem('DIPercent',$(this).val());
		$("#DIPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#DIPercentinput').val($('#DIPercent').slider("value"));
	
	$('#PavIPercent').slider({
		value: numberleftblank(localStorage.getItem('PavIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#PavIPercentinput').val(ui.value);
			localStorage.setItem('PavIPercent',ui.value);
		},
	});
	$('#PavIPercentinput').change(function(event) {
		localStorage.setItem('PavIPercent',$(this).val());
		$("#PavIPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#PavIPercentinput').val($('#PavIPercent').slider("value"));
	
	$('#IIPercent').slider({
		value: numberleftblank(localStorage.getItem('IIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#IIPercentinput').val(ui.value);
			localStorage.setItem('IIPercent',ui.value);
		},
	});
	$('#IIPercentinput').change(function(event) {
		localStorage.setItem('IIPercent',$(this).val());
		$("#IIPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#IIPercentinput').val($('#IIPercent').slider("value"));
	
	$('#ProIPercent').slider({
		value: numberleftblank(localStorage.getItem('ProIPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#ProIPercentinput').val(ui.value);
			localStorage.setItem('ProIPercent',ui.value);
		},
	});
	$('#ProIPercentinput').change(function(event) {
		localStorage.setItem('ProIPercent',$(this).val());
		$("#ProIPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#ProIPercentinput').val($('#ProIPercent').slider("value"));
	
	$('#ECPercent').slider({
		value: numberleftblank(localStorage.getItem('ECPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#ECPercentinput').val(ui.value);
			localStorage.setItem('ECPercent',ui.value);
		},
	});
	$('#ECPercentinput').change(function(event) {
		localStorage.setItem('ECPercent',$(this).val());
		$("#ECPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#ECPercentinput').val($('#ECPercent').slider("value"));

	$('#UPercent').slider({
		value: numberleftblank(localStorage.getItem('UPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#UPercentinput').val(ui.value);
			localStorage.setItem('UPercent',ui.value);
		},
	});
	$('#UPercentinput').change(function(event) {
		localStorage.setItem('UPercent',$(this).val());
		$("#UPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#UPercentinput').val($('#UPercent').slider("value"));
	
	$('#TSPercent').slider({
		value: numberleftblank(localStorage.getItem('TSPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#TSPercentinput').val(ui.value);
			localStorage.setItem('TSPercent',ui.value);
		},
	});
	$('#TSPercentinput').change(function(event) {
		localStorage.setItem('TSPercent',$(this).val());
		$("#TSPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#TSPercentinput').val($('#TSPercent').slider("value"));
	
	$('#BPercent').slider({
		value: numberleftblank(localStorage.getItem('BPercent')),
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$('#BPercentinput').val(ui.value);
			localStorage.setItem('BPercent',ui.value);
		},
	});
	$('#BPercentinput').change(function(event) {
		localStorage.setItem('BPercent',$(this).val());
		$("#BPercent").slider("option", "value", $(this).val());
		navBarErrorStorage(pageLetterNumber());
		navBarErrorCheck(pageLetterNumber());

	});
	$('#BPercentinput').val($('#BPercent').slider("value"));
};

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
		ContingencySlider();
	});
}

function ReceiptLink () {
	window.location='http://localhost:3000/Receipt';
}

//
// <================ Input Data Type Error Catcher ================>
//

function InputErrorCheck () {
	var possibleInput = [['GIPercent','number'],['DIPercent','number'],['PavIPercent','number'],['IIPercent','number'],['ProIPercent','number'],['ECPercent','number'],['UPercent','number'],['TSPercent','number'],['BPercent','number']],errorsPresent=false,userinputAndtype;

	for (var i = possibleInput.length - 1; i >= 0; i--) {
		if (localStorage.getItem(possibleInput[i][0]) != null) {
			if (!(localStorage.getItem(possibleInput[i][0]) === '')) {
				userinputAndtype=userInputCheck(localStorage.getItem(possibleInput[i][0]),possibleInput[i][1]);
				if (userinputAndtype[0] != possibleInput[i][1]) {
					// This parses through the HTML file from the id of the input element to find the tagName
					// where it's child is a label tagName
					var currTagName = '';
					var familyIndex = 0;
					while (currTagName != 'LABEL'){
						currTagName = $('#'+possibleInput[i][0]+'').parents(':eq('+familyIndex+')').children().prop("tagName");
						if (currTagName != 'LABEL') {
							familyIndex++;
						};
					}
					$('#'+possibleInput[i][0]+'').parents(':eq('+familyIndex+')').addClass('cellError');
					errorsPresent=true;
				}else {
					var currTagName = '';
					var familyIndex = 0;
					while (currTagName != 'LABEL'){
						currTagName = $('#'+possibleInput[i][0]+'').parents(':eq('+familyIndex+')').children().prop("tagName");
						if (currTagName != 'LABEL') {
							familyIndex++;
						};
					}
					$('#'+possibleInput[i][0]+'').parents(':eq('+familyIndex+')').removeClass('cellError');
				};
			};
		};
	};
	return errorsPresent;
}
function userInputCheck (userString,correctStringType){
	var numberCounter=0,letterCounter=0,symbolCounter=0;

	if (correctStringType=='text') {
		for (var i = userString.length - 1; i >= 0; i--) {
			var letter = userString[i];
			if (isNaN(Number(letter))==false) {
				numberCounter++;
			};
			var stringSymbol='!@#$%^&*()_+|}{:?><,./;[]=-';
			for (var j = stringSymbol.length - 1; j >= 0; j--) {
				if (letter == stringSymbol[j]) {
					symbolCounter++;
				};
			};
		};

		if (numberCounter>0) {
			return ['Mix',numberCounter];
		} if (symbolCounter>0) {
			return ['Mix',symbolCounter];
		} else{
			return ['text'];
		};

	} else{
		for (var i = userString.length - 1; i >= 0; i--) {
			var letter = userString[i];
			if (isNaN(Number(letter))==true) {
				letterCounter++;
			};
			var numberSymbol='!@#$%^&*()_+|}{:?><,/;[]=-';
			for (var j = numberSymbol.length - 1; j >= 0; j--) {
				if (letter == numberSymbol[j]) {
					symbolCounter++;
				};
			};
		};

		if (letterCounter>0) {
			return ['Mix',letterCounter];
		} if (symbolCounter>0) {
			return ['Mix',symbolCounter];
		} else{
			return ['number'];
		};
	};
};	

//
// <================ Page Error Logger ================>
//

function navBarErrorStorage (pageLetter) {
	var rThereErrors=InputErrorCheck(),
		errorStorageString = localStorage.getItem('ErrorLog'),
		letterToBeRemoved,
		newErrorStorageString='';
	if (errorStorageString == null) {
		errorStorageString='';
	};

	if (rThereErrors) {
		// does the error log have other pages logged
		if (errorStorageString) {
			// adds another page letter if there doesn't exist the same page letter
			if (errorStorageString.indexOf(pageLetter)==-1) {
				errorStorageString += pageLetter;
				localStorage.setItem('ErrorLog',errorStorageString);
			};
		} else{
			// creates error log
			localStorage.setItem('ErrorLog',pageLetter);
		};
	} else {
		// does the error log string have other pages logged
		if (errorStorageString) {
			// does the error existing error log string have the page letter?
			if (errorStorageString.indexOf(pageLetter) >= 0) {	
				//letterPositionToBeRemoved = errorStorageString.indexOf(pageLetter);
				for (var i = errorStorageString.length - 1; i >= 0; i--) {
					if (errorStorageString[i]!=pageLetter) {
						newErrorStorageString += errorStorageString[i];	
					};
				};
				localStorage.setItem('ErrorLog',newErrorStorageString)
			};
		}
	};
}

function navBarErrorCheck (pageLetter) {
	var rThereErrors=InputErrorCheck(),pageErrorString = localStorage.getItem('ErrorLog');

	//
	//<================ Dynamically Adding/Removal of Error Classes to the PageNumber ================>
	//

	if (rThereErrors) {
		addingPageErrors(pageLetter);
	} else{
		removingPageErrors(pageLetter);
	};

	//
	//<================ Adds Error Classes to all the other tabs ================
	//

	if (pageErrorString) {
		for (var i = pageErrorString.length - 1; i >= 0; i--) {
			addingPageErrors(pageErrorString[i]);
		};
	};
}

function removingPageErrors (pageLetter) {
	switch (pageLetter) {
		case 'A':
			$('#AdministerInformation').removeClass('Error');
			break;

		case 'B':
			$('#Connections').removeClass('Error');
			break;

		case 'C':
			$('#Contingency').removeClass('Error');
			break;

		case 'D':
			$('#Drainage').removeClass('Error');
			break;

		case 'E':
			$('#EarthworkCut').removeClass('Error');
			break;

		case 'F':
			$('#EarthworkFill').removeClass('Error');
			break;

		case 'G':
			$('#Entrances').removeClass('Error');
			break;

		case 'H':
			$('#ExistingBridge').removeClass('Error');
			break;

		case 'I':
			$('#ExistingRoadway').removeClass('Error');
			break;

		case 'J':
			$('#MiscellaneousItems').removeClass('Error');
			break;

		case 'K':
			$('#Mitigation').removeClass('Error');
			break;

		case 'L':
			$('#ProposedBridge').removeClass('Error');
			break;

		case 'M':
			$('#ProposedRoad').removeClass('Error');
			break;

		case 'N':
			$('#RW3').removeClass('Error');
			break;

		case 'O':
			$('#RipRapSlopes').removeClass('Error');
			break;

		case 'P':
			$('#Sidewalk').removeClass('Error');
			break;

		case 'Q':
			$('#SWMFacility').removeClass('Error');
			break;

		case 'R':
			$('#Traffic').removeClass('Error');
			break;

		case 'S':
			$('#UnitPrices').removeClass('Error');
			break;

		case 'T':
			$('#UnsuitableMaterial').removeClass('Error');
			break;

		case 'U':
			$('#UtilityImpacts').removeClass('Error');
			break;

		default:
			break;
	}
}

function addingPageErrors (pageLetter) {
	switch (pageLetter) {
		case 'A':
			$('#AdministerInformation').addClass('Error');
			break;

		case 'B':
			$('#Connections').addClass('Error');
			break;

		case 'C':
			$('#Contingency').addClass('Error');
			break;

		case 'D':
			$('#Drainage').addClass('Error');
			break;

		case 'E':
			$('#EarthworkCut').addClass('Error');
			break;

		case 'F':
			$('#EarthworkFill').addClass('Error');
			break;

		case 'G':
			$('#Entrances').addClass('Error');
			break;

		case 'H':
			$('#ExistingBridge').addClass('Error');
			break;

		case 'I':
			$('#ExistingRoadway').addClass('Error');
			break;

		case 'J':
			$('#MiscellaneousItems').addClass('Error');
			break;

		case 'K':
			$('#Mitigation').addClass('Error');
			break;

		case 'L':
			$('#ProposedBridge').addClass('Error');
			break;

		case 'M':
			$('#ProposedRoad').addClass('Error');
			break;

		case 'N':
			$('#RW3').addClass('Error');
			break;

		case 'O':
			$('#RipRapSlopes').addClass('Error');
			break;

		case 'P':
			$('#Sidewalk').addClass('Error');
			break;

		case 'Q':
			$('#SWMFacility').addClass('Error');
			break;

		case 'R':
			$('#Traffic').addClass('Error');
			break;

		case 'S':
			$('#UnitPrices').addClass('Error');
			break;

		case 'T':
			$('#UnsuitableMaterial').addClass('Error');
			break;

		case 'U':
			$('#UtilityImpacts').addClass('Error');
			break;

		default:
			break;
	}
}