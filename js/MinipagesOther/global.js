//
//================  ================//
//

$(document).ready(function(){

// EstimatorListData holds the list of JSON objects that is requested from the server.
// If the amount of records grows so large that it causes client
// -side resources to be strained I'll add paging 

var EstimatorListData = [],
    thisEstiObject='empty';
	// 
	$('#SearchButton').click(function() {
		var UPC = $('#SearchUPC').val(),
		Estimator = $('#SearchEstimator').val(),
		RoadNumber = $('#SearchRoadNumber').val(),
		tableContent='';
		if (UPC== '') {
			if (Estimator == '') {
				$.getJSON('/datarecords/RoadNumber='+RoadNumber+'', function(datarecords) {
					EstimatorListData=datarecords;
					$.each(datarecords, function() {
						tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
						tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
						tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
						tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
						tableContent += '</a></div>';
					});
					$('#SearchResultsfromQuery').html(tableContent);
				});
			}else {
				if (RoadNumber== '') {
					$.getJSON('/datarecords/Estimator='+Estimator+'', function(datarecords) {
						EstimatorListData=datarecords;
						$.each(datarecords, function() {
							tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
							tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
							tableContent += '</a></div>';
						});
						$('#SearchResultsfromQuery').html(tableContent);
					});	
				}else {
					$.getJSON('/datarecords/Estimator='+Estimator+'&&RoadNumber='+RoadNumber+'', function(datarecords) {
						EstimatorListData=datarecords;
						$.each(datarecords, function() {
							tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
							tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
							tableContent += '</a></div>';
						});
						$('#SearchResultsfromQuery').html(tableContent);
					});
				};
			};
		} else{
			if (Estimator== '') {
				if (RoadNumber== '') {
					$.getJSON('/datarecords/UPC='+UPC+'', function(datarecords) {
						EstimatorListData=datarecords;
						$.each(datarecords, function() {
							tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
							tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
							tableContent += '</a></div>';
						});
						$('#SearchResultsfromQuery').html(tableContent);
					});
				} else{
					$.getJSON('/datarecords/UPC='+UPC+'&&RoadNumber='+RoadNumber+'', function(datarecords) {
						EstimatorListData=datarecords;
						$.each(datarecords, function() {
							tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
							tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
							tableContent += '</a></div>';
						});
						$('#SearchResultsfromQuery').html(tableContent);
					});
				};
			} else{
				if (RoadNumber== '') {
					$.getJSON('/datarecords/Estimator='+Estimator+'&&UPC='+UPC+'', function(datarecords) {
						EstimatorListData=datarecords;
						$.each(datarecords, function() {
							tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
							tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
							tableContent += '</a></div>';
						});
						$('#SearchResultsfromQuery').html(tableContent);
					});	
				} else{
					$.getJSON('/datarecords/Estimator='+Estimator+'&&UPC='+UPC+'&&RoadNumber='+RoadNumber+'', function(datarecords) {
						EstimatorListData=datarecords;
						$.each(datarecords, function() {
							tableContent += '<div class="col-xs-12 SelectedRow"><a href="#" class="linkshowEsti" rel="' + this.Estimator + '|'+ this.UPC +'|'+this.RoadNumber+'">';
							tableContent += '<div class="col-xs-4 ">' + this.Estimator + '</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.UPC +'</div>';
							tableContent += '<div class="col-xs-4 ">'+ this.RoadNumber +'</div>';
							tableContent += '</a></div>';
						});
						$('#SearchResultsfromQuery').html(tableContent);
					});
				};
			};
		};
		thisEstiObject='empty';
	});

	// Button that starts query
	$('#SearchResultsfromQuery').on('click', 'a.linkshowEsti', function(){
		
		//Prevents default hyperlink from activating
		event.preventDefault();

		// Retrieve Data from link rel attribute which is the whole record encoded within
		var recordinfo = $(this).attr('rel'),
		h=0,wordcount=0;
		ClickedonRecord={1:'',2:'',3:''};
		for (var i = 0; i <= recordinfo.length - 1; i++) {
			if (recordinfo[i]=='|') {
				wordcount++;
				word=recordinfo.substring(h,i);
				ClickedonRecord[wordcount]=word;
				h=i+1;
				if (wordcount==2) {
					word=recordinfo.substr(h);
					ClickedonRecord[3]=word;
				};
			};
		};

		for (var i = EstimatorListData.length - 1; i >= 0; i--) {
			if (EstimatorListData[i].Estimator==ClickedonRecord[1] && EstimatorListData[i].UPC==ClickedonRecord[2] && EstimatorListData[i].RoadNumber==ClickedonRecord[3]) {
				thisEstiObject = EstimatorListData[i];
			};
		};

		//Populate Temp box
		$('#loadEstimator').text(thisEstiObject.Estimator);
		$('#loadUPC').text(thisEstiObject.UPC);
		$('#loadRoadNumber').text(thisEstiObject.RoadNumber);
		$('#loadDateCreated').text(thisEstiObject.DateCreated);
		$('#loadDateUpdated').text(thisEstiObject.DateUpdated);
	});

	$('#ImportDatarecord').click(function(){
		// This IF statement was put here to prevent the user from loading a blank/nonexisting record
		if (thisEstiObject != 'empty') {
			var DataArrayObject = JSON.parse(thisEstiObject.DataArray);
			localStorage.clear();
			for(var i in DataArrayObject){
				localStorage.setItem(i,DataArrayObject[i])
			}
			localStorage.setItem('UpdateEstimator',thisEstiObject.Estimator);
			localStorage.setItem('UpdateUPC',thisEstiObject.UPC);
			localStorage.setItem('UpdateRoadNumber',thisEstiObject.RoadNumber);
		};
	});


});