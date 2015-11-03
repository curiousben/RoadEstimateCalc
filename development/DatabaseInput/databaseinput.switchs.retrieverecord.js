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

function SearchRecordList (ListofRecords,EstimatorObject) {
	var EstimatorListData=ListofRecords,
		thisEstiObject=EstimatorObject,
		UPC = $('#SearchUPC').val(),
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
					$.getJSON('/datarecords/Estimator&&RoadNumber/'+Estimator+'&&'+RoadNumber+'', function(datarecords) {
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
					$.getJSON('/datarecords/UPC&&RoadNumber/'+UPC+'&&'+RoadNumber+'', function(datarecords) {
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
					$.getJSON('/datarecords/Estimator&&UPC/'+Estimator+'&&'+UPC+'', function(datarecords) {
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
					$.getJSON('/datarecords/Estimator&&UPC&&RoadNumber/'+Estimator+'&&'+UPC+'&&'+RoadNumber+'', function(datarecords) {
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
	return [EstimatorListData,thisEstiObject];
}