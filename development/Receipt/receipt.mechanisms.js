/*
*
* DISCLAIMER:
* The contents of this web application do not nessarily reflect the offical 
* views or policies of the Virginia Department of Transportation, the 
* Commonwealth Transportation Board, or the Federal Highway Administration.
* This web app does not constitue a standard, specification, or regulation.
* Any inclusion of manufacturer names, trade names, or trademarks is for 
* identification purposes only and is not to be considered an endorsement.
* 
*/

//
// <================ Event Listeners for buttons on the receipt page ================>
//

function CurrentlyloadedRecord () {
    if (localStorage.getItem('ImportEstimator') != null || localStorage.getItem('ImportUPC') != null || localStorage.getItem('ImportRoadNumber') != null) {
        $('#LoadedRecord').removeClass('hide');
        document.getElementById('RecordEstimator').innerHTML=localStorage.getItem('ImportEstimator');
        document.getElementById('RecordUPC').innerHTML=localStorage.getItem('ImportUPC');
        document.getElementById('RecordRoadNumber').innerHTML=localStorage.getItem('ImportRoadNumber');
    };
};

function ImportLastRecord () {
    Estimator=localStorage.getItem('ImportEstimator');
    UPC=localStorage.getItem('ImportUPC');
    RoadNumber=localStorage.getItem('ImportRoadNumber');
    $.getJSON('/datarecords/Estimator&&UPC&&RoadNumber/'+Estimator+'&&'+UPC+'&&'+RoadNumber+'', function(datarecord) {
        DataArrayObject=$.parseJSON((datarecord[0].DataArray));
        lasturl=localStorage.getItem('lastURL');
        localStorage.clear();
        for(var i in DataArrayObject){
            localStorage.setItem(i,DataArrayObject[i])
        }
        localStorage.setItem('ImportEstimator',datarecord[0].Estimator);
        localStorage.setItem('ImportUPC',datarecord[0].UPC);
        localStorage.setItem('ImportRoadNumber',datarecord[0].RoadNumber);
        
        lasturl=localStorage.setItem('lastURL',lasturl);
    });
};

function ReceiptLink () {
    window.location='http://localhost:3000'+localStorage.getItem('lastURL');
};

function ScreenResize() {
    var perferedWidth=676;
    var fontsize = 16;

    var displayWidth=$(window).width();
    var percentage = displayWidth/perferedWidth;
    var newFontSize = Math.floor(fontsize * percentage) -1;
    $('#Road_Estimate_Tool_Receipt ').css('font-size', newFontSize);
};

function curtime() {
    var CurrentTime= new Date();
    document.getElementById('time').innerHTML = CurrentTime;
    return CurrentTime;
}
function numberleftblank (num) {
    if (num) {
        return num;
    } else{
        return 0;
    };
}

function numberleftblankContingency (num) {
    if (num) {
        return num;
    } else{
        return 5;
    };
}

function numberleftblankcomma (num) {
    if (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else {
        return 0;
    }
}

function textleftblank (Tex) {
    if (Tex) 
    {
        return Tex;
    }
    else {
        return 'Not Entered';
    }
}