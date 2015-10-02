$(document).ready(function(){
	DataArray=[];
	for (var i = localStorage.length - 1; i >= 0; i--) {
		DataArray.push(localStorage.key(i));
		DataArray.push(localStorage.getItem(localStorage.key(i)));
	};
	document.getElementById('CreateDataArray').value=DataArray;
})