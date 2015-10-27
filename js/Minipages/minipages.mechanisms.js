/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This weeb app does not constitue a standard, specification, or regulation.
* Any inclusion of manufacturer names, trade names, or trademarksis for 
* identification purposes only and is not to be considered an endorsement.
* 
*/

//
// <================ All types of input that the User can interact and their associated functions ================>
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
// <================ The final button that clears the whole device of data on index.ejs within the modal window ================>
//

$('#memclrchoice').click(function() {
	$('#ResetAllData').modal('hide');
	localStorage.clear();
	});