function testme (){
	var x,y;
	x=document.getElementById('value1').value
	y=numbercomma(x);
	alert(y);
}

function testme2 (){
	var x;
	document.getElementById('value1').value=null;
	x=numbercomma(document.getElementById('value1').value);
	alert(x);
}
function numbercomma (num) {
	if (num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
    else {
    	return 0;
    }
}
window.onload = function () {
    $("#GO").click( function () {
        testme();
    })
    $('#Nullify').click( function () {
    	testme2();
    })
}