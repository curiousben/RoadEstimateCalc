//
// <================ Input Data Type Error Catcher ================>
//

//
// <================ Initial Error Sweep ================>
//

function InputErrorCheck () {
	var possibleInput=[],userinputAndtype,input,errorsPresent=false;

	$('#Road_Estimate_Tool input').each(function() {
		input = $(this).attr('id');
		type = $(this).attr('type');
		if (input.slice(0,3)!=='CCB' && input.slice(0,3)!=='FCB') {
			// ignores the checkbox input on Earth:cut and Earth:fill
			possibleInput.push([input,type]);
		};
	});
	
	if (typeof(ProposedRoadwaySlidersIDs) == 'function') {
		var sliderIDS = ProposedRoadwaySlidersIDs();
		possibleInput.push(sliderIDS);
	};

	if (typeof(UnitPricesSliderIDs) == 'function') {
		var sliderIDS = UnitPricesSliderIDs();
		possibleInput.push(sliderIDS);
	};

	for (var i = possibleInput.length - 1; i >= 0; i--) {
		if (localStorage.getItem(possibleInput[i][0]) != null) {
			if (!(localStorage.getItem(possibleInput[i][0]) === '')) {
				userinputAndtype=errorComparison(localStorage.getItem(possibleInput[i][0]),possibleInput[i][1]);
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
function errorComparison (userString,correctStringType){
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
	var pageErrorString = localStorage.getItem('ErrorLog');

	//
	//<================ Dynamically Adding/Removal of Error Classes if a Pagenumber exists ================>
	//

	if (pageLetter) {
		var rThereErrors=InputErrorCheck(); 
		if (rThereErrors) {
			addingPageErrors(pageLetter);
		} else{
			removingPageErrors(pageLetter);
		};
	};

	//
	//<================ Adds Error Classes to all the other tabs ================
	//

	if (pageErrorString==''||pageErrorString==null) {
		$('#menuIcon').removeClass('errorMenu');
	} else {
		$('#menuIcon').addClass('errorMenu');
		for (var i = pageErrorString.length - 1; i >= 0; i--) {
			addingPageErrors(pageErrorString[i]);
		};
	}
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
};

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
};