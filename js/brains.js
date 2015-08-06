//
//
//
// <================= Grading Items =================>
//
//
//
function ClearingGrubbing()
{
var cls1 = localStorage.getItem("CL1l");
    cds1 = localStorage.getItem("CL1d");

    cls2 = localStorage.getItem("CM1l");
    cds2 = localStorage.getItem("CM1d");

    cls3 = localStorage.getItem("CR1l");
    cds3 = localStorage.getItem("CR1d");

    cls4 = localStorage.getItem("CL2l");
    cds4 = localStorage.getItem("CL2d");

    cls5 = localStorage.getItem("CM2l");
    cds5 = localStorage.getItem("CM2d");

    cls6 = localStorage.getItem("CR2l");
    cds6 = localStorage.getItem("CR2d");

    cls7 = localStorage.getItem("CL3l");
    cds7 = localStorage.getItem("CL3d");

    cls8 = localStorage.getItem("CM3l");
    cds8 = localStorage.getItem("CM3d");

    cls9 = localStorage.getItem("CR3l");
    cds9 = localStorage.getItem("CR3d");

    cls10 = localStorage.getItem("CL4l");
    cds10 = localStorage.getItem("CL4d");

    cls11 = localStorage.getItem("CM4l");
    cds11 = localStorage.getItem("CM4d");

    cls12 = localStorage.getItem("CR4l");
    cds12 = localStorage.getItem("CR4d");

    cls13 = localStorage.getItem("CL5l");
    cds13 = localStorage.getItem("CL5d");

    cls14 = localStorage.getItem("CM5l");
    cds14 = localStorage.getItem("CM5d");

    cls15 = localStorage.getItem("CR5l");
    cds15 = localStorage.getItem("CR5d");

    cls16 = localStorage.getItem("CL6l");
    cds16 = localStorage.getItem("CL6d");

    cls17 = localStorage.getItem("CM6l");
    cds17 = localStorage.getItem("CM6d");

    cls18 = localStorage.getItem("CR6l");
    cds18 = localStorage.getItem("CR6d");

    fls1 = localStorage.getItem("FL1l");
    fds1 = localStorage.getItem("FL1d");

    fls2 = localStorage.getItem("FM1l");
    fds2 = localStorage.getItem("FM1d");

    fls3 = localStorage.getItem("FR1l");
    fds3 = localStorage.getItem("FR1d");

    fls4 = localStorage.getItem("FL2l");
    fds4 = localStorage.getItem("FL2d");

    fls5 = localStorage.getItem("FM2l");
    fds5 = localStorage.getItem("FM2d");

    fls6 = localStorage.getItem("FR2l");
    fds6 = localStorage.getItem("FR2d");

    fls7 = localStorage.getItem("FL3l");
    fds7 = localStorage.getItem("FL3d");

    fls8 = localStorage.getItem("FM3l");
    fds8 = localStorage.getItem("FM3d");

    fls9 = localStorage.getItem("FR3l");
    fds9 = localStorage.getItem("FR3d");

    fls10 = localStorage.getItem("FL4l");
    fds10 = localStorage.getItem("FL4d");

    fls11 = localStorage.getItem("FM4l");
    fds11 = localStorage.getItem("FM4d");

    fls12 = localStorage.getItem("FR4l");
    fds12 = localStorage.getItem("FR4d");

    fls13 = localStorage.getItem("FL5l");
    fds13 = localStorage.getItem("FL5d");

    fls14 = localStorage.getItem("FM5l");
    fds14 = localStorage.getItem("FM5d");

    fls15 = localStorage.getItem("FR5l");
    fds15 = localStorage.getItem("FR5d");

    fls16 = localStorage.getItem("FL6l");
    fds16 = localStorage.getItem("FL6d");

    fls17 = localStorage.getItem("FM6l");
    fds17 = localStorage.getItem("FM6d");

    fls18 = localStorage.getItem("FR6l");
    fds18 = localStorage.getItem("FR6d");

     tsw = localStorage.getItem("TotalShoulderWidth");
    ersw = localStorage.getItem("ExistingRoadwayShldrWidth");
     prl = localStorage.getItem("ProposedRoadwayLength");
     prw = localStorage.getItem("PavedRoadwayWidth");
    errw = localStorage.getItem("ExistingRoadwayRdwayWidth");
     nha = localStorage.getItem("NewHorizontalAlignment");

return (((cls1*cds1)+(cls2*cds2)+(cls3*cds3)+(cls4*cds4)+(cls5*cds5)+(cls6*cds6)+(cls7*cds7)+(cls8*cds8)+(cls9*cds9)+(cls10*cds10)+(cls11*cds11)+(cls12*cds12)+(cls13*cds13)+(cls14*cds14)+(cls15*cds15)+(cls16*cds16)+(cls17*cds17)+(cls18*cds18)+(fls1*fds1)+(fls2*fds2)+(fls3*fds3)+(fls4*fds4)+(fls5*fds5)+(fls6*fds6)+(fls7*fds7)+(fls8*fds8)+(fls9*fds9)+(fls10*fds10)+(fls11*fds11)+(fls12*fds12)+(fls13*fds13)+(fls14*fds14)+(fls15*fds15)+(fls16*fds16)+(fls17*fds17)+(fls18*fds18)+((tsw-ersw)*2*prl)+((prw-errw)*prl))/43560)+(prl*((parseFloat(prw,10)+parseFloat(tsw,10)))*((nha/100)/43560));
}
function AnticipatedRegularExcavation()
{

var ls1 = localStorage.getItem("CL1l");
    ws1 = localStorage.getItem("CL1w");
    ds1 = localStorage.getItem("CL1d");

    ls2 = localStorage.getItem("CM1l");
    ws2 = localStorage.getItem("CM1w");
    ds2 = localStorage.getItem("CM1d");

    ls3 = localStorage.getItem("CR1l");
    ws3 = localStorage.getItem("CR1w");
    ds3 = localStorage.getItem("CR1d");

    ls4 = localStorage.getItem("CL2l");
    ws4 = localStorage.getItem("CL2w");
    ds4 = localStorage.getItem("CL2d");

    ls5 = localStorage.getItem("CM2l");
    ws5 = localStorage.getItem("CM2w");
    ds5 = localStorage.getItem("CM2d");

    ls6 = localStorage.getItem("CR2l");
    ws6 = localStorage.getItem("CR2w");
    ds6 = localStorage.getItem("CR2d");

    ls7 = localStorage.getItem("CL3l");
    ws7 = localStorage.getItem("CL3w");
    ds7 = localStorage.getItem("CL3d");

    ls8 = localStorage.getItem("CM3l");
    ws8 = localStorage.getItem("CM3w");
    ds8 = localStorage.getItem("CM3d");

    ls9 = localStorage.getItem("CR3l");
    ws9 = localStorage.getItem("CR3w");
    ds9 = localStorage.getItem("CR3d");

    ls10 = localStorage.getItem("CL4l");
    ws10 = localStorage.getItem("CL4w");
    ds10 = localStorage.getItem("CL4d");

    ls11 = localStorage.getItem("CM4l");
    ws11 = localStorage.getItem("CM4w");
    ds11 = localStorage.getItem("CM4d");

    ls12 = localStorage.getItem("CR4l");
    ws12 = localStorage.getItem("CR4w");
    ds12 = localStorage.getItem("CR4d");

    ls13 = localStorage.getItem("CL5l");
    ws13 = localStorage.getItem("CL5w");
    ds13 = localStorage.getItem("CL5d");

    ls14 = localStorage.getItem("CM5l");
    ws14 = localStorage.getItem("CM5w");
    ds14 = localStorage.getItem("CM5d");

    ls15 = localStorage.getItem("CR5l");
    ws15 = localStorage.getItem("CR5w");
    ds15 = localStorage.getItem("CR5d");

    ls16 = localStorage.getItem("CL6l");
    ws16 = localStorage.getItem("CL6w");
    ds16 = localStorage.getItem("CL6d");

    ls17 = localStorage.getItem("CM6l");
    ws17 = localStorage.getItem("CM6w");
    ds17 = localStorage.getItem("CM6d");

    ls18 = localStorage.getItem("CR6l");
    ws18 = localStorage.getItem("CR6w");
    ds18 = localStorage.getItem("CR6d");

    return (((ls1*ws1*ds1)+(ls2*ws2*ds2)+(ls3*ws3*ds3)+(ls4*ws4*ds4)+(ls5*ws5*ds5)+(ls6*ws6*ds6)+(ls7*ws7*ds7)+(ls8*ws8*ds8)+(ls9*ws9*ds9)+(ls10*ws10*ds10)+(ls11*ws11*ds11)+(ls12*ws12*ds12)+(ls13*ws13*ds13)+(ls14*ws14*ds14)+(ls15*ws15*ds15)+(ls16*ws16*ds16)+(ls17*ws17*ds17)+(ls18*ws18*ds18))/27);
}
function FillTotalCY()
{
    
var ls1 = localStorage.getItem("FL1l");
    ws1 = localStorage.getItem("FL1w");
    ds1 = localStorage.getItem("FL1d");

    ls2 = localStorage.getItem("FM1l");
    ws2 = localStorage.getItem("FM1w");
    ds2 = localStorage.getItem("FM1d");

    ls3 = localStorage.getItem("FR1l");
    ws3 = localStorage.getItem("FR1w");
    ds3 = localStorage.getItem("FR1d");

    ls4 = localStorage.getItem("FL2l");
    ws4 = localStorage.getItem("FL2w");
    ds4 = localStorage.getItem("FL2d");

    ls5 = localStorage.getItem("FM2l");
    ws5 = localStorage.getItem("FM2w");
    ds5 = localStorage.getItem("FM2d");

    ls6 = localStorage.getItem("FR2l");
    ws6 = localStorage.getItem("FR2w");
    ds6 = localStorage.getItem("FR2d");

    ls7 = localStorage.getItem("FL3l");
    ws7 = localStorage.getItem("FL3w");
    ds7 = localStorage.getItem("FL3d");

    ls8 = localStorage.getItem("FM3l");
    ws8 = localStorage.getItem("FM3w");
    ds8 = localStorage.getItem("FM3d");

    ls9 = localStorage.getItem("FR3l");
    ws9 = localStorage.getItem("FR3w");
    ds9 = localStorage.getItem("FR3d");

    ls10 = localStorage.getItem("FL4l");
    ws10 = localStorage.getItem("FL4w");
    ds10 = localStorage.getItem("FL4d");

    ls11 = localStorage.getItem("FM4l");
    ws11 = localStorage.getItem("FM4w");
    ds11 = localStorage.getItem("FM4d");

    ls12 = localStorage.getItem("FR4l");
    ws12 = localStorage.getItem("FR4w");
    ds12 = localStorage.getItem("FR4d");

    ls13 = localStorage.getItem("FL5l");
    ws13 = localStorage.getItem("FL5w");
    ds13 = localStorage.getItem("FL5d");

    ls14 = localStorage.getItem("FM5l");
    ws14 = localStorage.getItem("FM5w");
    ds14 = localStorage.getItem("FM5d");

    ls15 = localStorage.getItem("FR5l");
    ws15 = localStorage.getItem("FR5w");
    ds15 = localStorage.getItem("FR5d");

    ls16 = localStorage.getItem("FL6l");
    ws16 = localStorage.getItem("FL6w");
    ds16 = localStorage.getItem("FL6d");

    ls17 = localStorage.getItem("FM6l");
    ws17 = localStorage.getItem("FM6w");
    ds17 = localStorage.getItem("FM6d");

    ls18 = localStorage.getItem("FR6l");
    ws18 = localStorage.getItem("FR6w");
    ds18 = localStorage.getItem("FR6d");

    return (((ls1*ws1*ds1)+(ls2*ws2*ds2)+(ls3*ws3*ds3)+(ls4*ws4*ds4)+(ls5*ws5*ds5)+(ls6*ws6*ds6)+(ls7*ws7*ds7)+(ls8*ws8*ds8)+(ls9*ws9*ds9)+(ls10*ws10*ds10)+(ls11*ws11*ds11)+(ls12*ws12*ds12)+(ls13*ws13*ds13)+(ls14*ws14*ds14)+(ls15*ws15*ds15)+(ls16*ws16*ds16)+(ls17*ws17*ds17)+(ls18*ws18*ds18))/27);

}

function AnticipatedBowExcavation()
{

var cut=(parseFloat(AnticipatedRegularExcavation(),10));
    fill=parseFloat(FillTotalCY(),10);
    if((cut*1.1)>fill) {
        return 0;
    } else {
        return (fill-(cut*1.1));
    }
}
function AnticipatedUnsuitableMat()
{

var uml = localStorage.getItem("UnsuitableMaterialLength");
    umw = localStorage.getItem("UnsuitableMaterialWidth");
    umd = localStorage.getItem("UnsuitableMaterialDepth");
    return (uml*umw*umd)/27
}
function BackFillStoneNoOne()
{

var aum = AnticipatedUnsuitableMat();
    return aum*2.025
}
function DryRipRap()
{

var crml = localStorage.getItem("CommercialRockMaterialLength");
    crmw = localStorage.getItem("CommercialRockMaterialWidth");
    crmd = localStorage.getItem("CommercialRockMaterialDistance");
    return ((crml*crmw*crmd)/27)*2.025
}
//
//
//
// <================= Drainage Items =================>
//
//
//
function ConcreteBoxCulvert()
{
var cbc = localStorage.getItem("ConcreteBoxCulvert");
    return cbc;
}
function PipesUnderThreeSixInfc()
{
var ops = localStorage.getItem("OnePipesSix");
    return ops;
}
function PipesOverThreeSixInfc()
{
var ps = localStorage.getItem("PipesSix");
    return ps;
}
function EndWallsPipesOverThreeSixfc()
{
var ew = localStorage.getItem("EndWallsforPipesOverSix");
   return ew;
}
function DropInletsfc()
{
var di = localStorage.getItem("DropInlets");
    return di;
}
function CurbGutterfc()
{
var lcg = localStorage.getItem("LengthofCG");
    return lcg*2;
}
//
//
//
// <================= Pavement Items =================>
//
//
//
function SurfaceCourse()
{
var prl = localStorage.getItem("ProposedRoadwayLength");
    prw = localStorage.getItem("PavedRoadwayWidth");
    psw = localStorage.getItem("PavedShoulderWidth");
   smpd = localStorage.getItem("SurfaceMixPaveDepth");
    col = localStorage.getItem("ConnectionOneLength");
    ctl = localStorage.getItem("ConnectionTwoLength");
    return (((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*(parseFloat(prw,10)+parseFloat((psw*2),10))/9)*((smpd*110)/2000));
}
function IntermediateCourse()
{
var prl = localStorage.getItem("ProposedRoadwayLength");
    prw = localStorage.getItem("PavedRoadwayWidth");
    psw = localStorage.getItem("PavedShoulderWidth");
    pst = localStorage.getItem("PavedShoulderType");
     im = localStorage.getItem("IntermediateMix");
    col = localStorage.getItem("ConnectionOneLength");
    ctl = localStorage.getItem("ConnectionTwoLength");
    if (pst == "Surface Mix Only") {
        return (((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*prw)/9)*(im*115))/2000);
    } else {
      return ((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*(parseFloat(prw,10)+(psw*2)))/9)*(im*115)/2000);
    }
}
function BaseCourse()
{
var prl = localStorage.getItem("ProposedRoadwayLength");
    prw = localStorage.getItem("PavedRoadwayWidth");
    psw = localStorage.getItem("PavedShoulderWidth");
    pst = localStorage.getItem("PavedShoulderType");
     bm = localStorage.getItem("BaseMix");
    col = localStorage.getItem("ConnectionOneLength");
    ctl = localStorage.getItem("ConnectionTwoLength");
    if (pst == "Surface Mix Only") {
        return (((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*prw)/9)*(bm*115))/2000);
    } else {
      return ((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*(parseFloat(prw,10)+(psw*2)))/9)*(bm*115)/2000);
    }
}
function SubbaseCourse()
{
var prl = localStorage.getItem("ProposedRoadwayLength");
    prw = localStorage.getItem("PavedRoadwayWidth");
    tsw = localStorage.getItem("TotalShoulderWidth");
    psw = localStorage.getItem("PavedShoulderWidth");
    pst = localStorage.getItem("PavedShoulderType");
     sm = localStorage.getItem("SurfaceMixPaveDepth");
     im = localStorage.getItem("IntermediateMix");
     bm = localStorage.getItem("BaseMix");
   n21s = localStorage.getItem("NoTwoOneBStone");
    col = localStorage.getItem("ConnectionOneLength");
    ctl = localStorage.getItem("ConnectionTwoLength");

    if (pst == "Surface Mix Only") {
      return (((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*(parseFloat(prw,10)+(tsw*2))*(n21s/12))+(prl*((parseFloat(sm,10)+parseFloat(im,10)+parseFloat(bm,10))/12)*(tsw*2)))/27)*2.025);
    } else {
      return (((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*(parseFloat(prw,10)+(tsw*2))*(n21s/12))+(prl*((parseFloat(sm,10)+parseFloat(im,10)+parseFloat(bm,10))/12)*((parseFloat(tsw,10)-parseFloat(psw,10))*2)))/27)*2.025);
    }
}
function NoOneStone()
{
var prl = localStorage.getItem("ProposedRoadwayLength");
    prw = localStorage.getItem("PavedRoadwayWidth");
    tsw = localStorage.getItem("TotalShoulderWidth");
   n1sd = localStorage.getItem("NoOneStoneDepth");
    col = localStorage.getItem("ConnectionOneLength");
    ctl = localStorage.getItem("ConnectionTwoLength");
    return ((((parseFloat(prl,10)+parseFloat(col,10)+parseFloat(ctl,10))*(parseFloat(prw,10)+(tsw*2))*(n1sd/12))/27)*2.025);
}
//
//
//
// <================= Incidental Items =================>
//
//
//
function RetainingWalls()
{
var rwh = localStorage.getItem("RetainingWallRW3AvgHeight");
    rwl = localStorage.getItem("RetainingWallRW3Length");
    if (rwh == "0") {
        return 0;
    } else if (rwh == "3") {
        return (4.83*rwl)/27;
    } else if (rwh == "4") {
        return (7.43*rwl)/27;
    } else if (rwh == "5") {
        return (10.63*rwl)/27;
    } else if (rwh == "6") {
        return (14.43*rwl)/27;
    } else if (rwh == "7") {
        return (18.83*rwl)/27;
    } else if (rwh == "8") {
        return (23.83*rwl)/27;
    } else if (rwh == "9") {
        return (29.43*rwl)/27;
    } else if (rwh == "10") {
        return (35.63*rwl)/27;
    } else if (rwh == "11") {
        return (42.98*rwl)/27;
    } else if (rwh == "12") {
        return (51.03*rwl)/27;
    } else if (rwh == "13"){
        return (59.78*rwl)/27;
    } else if (rwh == "14") {
        return (69.23*rwl)/27;
    } else {
        return (79.38*rwl)/27;
    } 
}
function PrivEnt()
{
var rp = localStorage.getItem("RuralPrivate");
    return rp;
}
function UrbEnt()
{
var up = localStorage.getItem("UrbanPrivate");
    return up;
}
function CommEnt()
{
var c = localStorage.getItem("Commercial");
    return c;
}
//
//
//
// <================= Protective Items =================>
//
//
//
function MainofTraffic()
{
    var x = parseFloat(localStorage.getItem("HowComplexIsMOT"),10);
    if (x == "1") {
        return 50000;
    } else if (x == "2") {
        return 100000;
    } else if (x == "3") {
        return 150000;
    } else if (x == "4") {
        return 200000;
    } else if (x == "5") {
        return 300000;
    } else if (x == "6") {
        return 500000;
    } else if (x == "7") {
        return 750000;
    } else if (x == "8") {
        return 1000000;
    } else if (x == "9") {
        return 2000000;
    } else {
        return 4000000;
    }
}
function FieldOffice()
{
var cd = localStorage.getItem("ConstructionDuration");
    return cd;
}
function Sidewalk()
{
var rwh = localStorage.getItem("SidewalkLength");
    rwl = localStorage.getItem("SidewalkWidth");
    return rwh*rwl/9
}
//
//
//
// <================= Erosion Control =================>
//
//
//
function StormWaterManageFac()
{
var hmd = Number(localStorage.getItem("HMDBAOTP"));
    csw = localStorage.getItem("CanSWMFacAvoid");
     ac = ClearingGrubbing();
    if (csw == "Yes") {
        return [hmd,0];
    } else if (ac > 5) {
        return [hmd,250000*hmd];
    } else if (ac > 0.75) {
        return [hmd,150000*hmd];
    } else {
        return [hmd,0];
    }
}
function Seeding()
{
var acr = ClearingGrubbing();
    return Math.ceil(((acr*350)*1.6)/100)*100;
}
function TempSiltFence()
{
var prwl = localStorage.getItem("ProposedRoadwayLength");
    return prwl*2;
}
function CheckDamsTYlOrTYll()
{
var prwl = localStorage.getItem("ProposedRoadwayLength");
    return prwl/50;
}
//
//
//
// <================= Utilies =================>
//
//
//
function BelowGroundUtilities()
{
var uiw = localStorage.getItem("UtilWater");
    uis = localStorage.getItem("UtilSewer");
    return parseFloat(uiw,10)+parseFloat(uis,10);
}
//
//
//
// <================= Traffic and Safety =================>
//
//
//
function PermanentSignal()
{
var pts = localStorage.getItem("PermanentTrafficSignal");
    return pts;
}
function PavementMarkings()
{
var prl2 = localStorage.getItem("ProposedRoadwayLength");
    return prl2*4;
}
function GuardrailGR2()
{
var gl = localStorage.getItem("GuardrailLength");
    return gl;
}
function EndTreatmentGR9()
{
var gr = localStorage.getItem("GR9");
    return gr;
}
function GRFOA()
{
var pbf = localStorage.getItem("ProposedBridgeNoOfFOAs");
    return pbf;
}
//
//
//
// <================= Bridge =================>
//
//
//
function NSBridge()
{
var pbl = localStorage.getItem("ProposedBridgeLength");
    ebw = localStorage.getItem("ProposedBridgeWidth");
    return pbl*ebw;
}
function DemolitionExistingBridge()
{
var   bm = localStorage.getItem("ExistingBridgeLength");
    n21s = localStorage.getItem("ExistingBridgeWidth");
    return bm*n21s;
}
//
//
//
// <================= Stream/Wetland Mitigation that is included in construction =================>
//
//
//
function StreamMitigation()
{
var   ms = localStorage.getItem("MitigationStream");
    return ms;
}
function WetlandMitigation()
{
var   mw = localStorage.getItem("MitigationWetland");
    return mw;
}
//
//
//
// <================= Sub-Totals =================>
//
//
//
function GradingItems()
{
    var  TotCG = ClearingGrubbing()*localStorage.getItem("cr1");
       TotRE = AnticipatedRegularExcavation()*localStorage.getItem("re1");
       TotBE = AnticipatedBowExcavation()*localStorage.getItem("be1");
       TotUM = AnticipatedUnsuitableMat()*localStorage.getItem("um1");
       TotBS = BackFillStoneNoOne()*localStorage.getItem("bs1");
       TotDR = DryRipRap()*localStorage.getItem("dr1");
      SubTot = TotCG+TotRE+TotBE+TotUM+TotBS+TotDR;
        Cont = (localStorage.getItem("GIPercent")*SubTot)/100;
        document.getElementById("ClearingFC").innerHTML = numbercomma(ClearingGrubbing().toFixed());
        document.getElementById("ClearingUP").innerHTML = "$"+numbercomma(localStorage.getItem("cr1"));
        document.getElementById("TotClearingFC").innerHTML = "$"+numbercomma(TotCG.toFixed());

        document.getElementById("RegularFC").innerHTML = numbercomma(AnticipatedRegularExcavation().toFixed());
        document.getElementById("RegularUP").innerHTML = "$"+numbercomma(localStorage.getItem("re1"));
        document.getElementById("TotRegularFC").innerHTML = "$"+numbercomma(TotRE.toFixed());

        document.getElementById("BorrowFC").innerHTML = numbercomma(AnticipatedBowExcavation().toFixed());
        document.getElementById("BorrowUP").innerHTML = "$"+numbercomma(localStorage.getItem("be1"));
        document.getElementById("TotBorrowFC").innerHTML = "$"+numbercomma(TotBE.toFixed());

        document.getElementById("UnsuitableFC").innerHTML = numbercomma(AnticipatedUnsuitableMat().toFixed());
        document.getElementById("UnsuitableUP").innerHTML = "$"+numbercomma(localStorage.getItem("um1"));
        document.getElementById("TotUnsuitableFC").innerHTML = "$"+numbercomma(TotUM.toFixed());

        document.getElementById("BackfillFC").innerHTML = numbercomma(BackFillStoneNoOne().toFixed());
        document.getElementById("BackfillUP").innerHTML = "$"+numbercomma(localStorage.getItem("bs1"));
        document.getElementById("TotBackfillFC").innerHTML = "$"+numbercomma(TotBS.toFixed());

        document.getElementById("RiprapFC").innerHTML = numbercomma(DryRipRap().toFixed());
        document.getElementById("RiprapUP").innerHTML = "$"+numbercomma(localStorage.getItem("dr1"));
        document.getElementById("TotRiprapFC").innerHTML = "$"+numbercomma(TotDR.toFixed());

        document.getElementById("GradingSubTot").innerHTML = "$"+numbercomma(SubTot.toFixed());
        document.getElementById("GradeCon").innerHTML = "%"+numbercomma(localStorage.getItem("GIPercent"));
        document.getElementById("GradingContin").innerHTML = "$"+numbercomma(Cont.toFixed());
       return [TotCG,TotRE,TotBE,TotUM,TotBS,TotDR,SubTot,Cont];
}
function DrainageItems()
{
    var TotCC = ConcreteBoxCulvert()*1;
     TotPU36 = PipesUnderThreeSixInfc()*localStorage.getItem("pu2");
     TotPO36 = PipesOverThreeSixInfc()*localStorage.getItem("po2");
     TotEP36 = EndWallsPipesOverThreeSixfc()*localStorage.getItem("ew2");
       TotDU = DropInletsfc()*localStorage.getItem("di2");
       TotCG = CurbGutterfc()*localStorage.getItem("cg2");
     SubTotD = parseFloat(TotCC,10)+parseFloat(TotPU36,10)+parseFloat(TotPO36,10)+parseFloat(TotEP36,10)+parseFloat(TotDU,10)+parseFloat(TotCG,10);
       ContD = (localStorage.getItem("DIPercent")*SubTotD)/100;
        document.getElementById("ConcreteFC").innerHTML = "$"+numbercomma(Number(ConcreteBoxCulvert()).toFixed());
        document.getElementById("TotConcreteFC").innerHTML="$"+numbercomma(TotCC.toFixed());

        document.getElementById("PipesUFC").innerHTML=numbercomma(Number(PipesUnderThreeSixInfc()).toFixed()); 
        document.getElementById("PipesUUP").innerHTML="$"+numbercomma(localStorage.getItem("pu2")); 
        document.getElementById("TotPipesFC").innerHTML="$"+numbercomma(TotPU36.toFixed());

        document.getElementById("PipesOFC").innerHTML=numbercomma(Number(PipesOverThreeSixInfc()).toFixed());
        document.getElementById("PipesOUP").innerHTML="$"+numbercomma(localStorage.getItem("po2")); 
        document.getElementById("TotPipesOFC").innerHTML="$"+numbercomma(TotPO36.toFixed());

        document.getElementById("EndWallsFC").innerHTML=numbercomma(Number(EndWallsPipesOverThreeSixfc()).toFixed()); 
        document.getElementById("EndWallsUP").innerHTML="$"+numbercomma(localStorage.getItem("ew2"));  
        document.getElementById("TotEndwallsFC").innerHTML="$"+numbercomma(TotEP36.toFixed());

        document.getElementById("DropFC").innerHTML=numbercomma(Number(DropInletsfc()).toFixed()); 
        document.getElementById("DropUP").innerHTML="$"+numbercomma(localStorage.getItem("di2")); 
        document.getElementById("TotDropFC").innerHTML="$"+numbercomma(TotDU.toFixed());

        document.getElementById("CurbFC").innerHTML=numbercomma(Number(CurbGutterfc()).toFixed());
        document.getElementById("CurbUP").innerHTML="$"+numbercomma(localStorage.getItem("cg2"));
        document.getElementById("TotCurbFC").innerHTML="$"+numbercomma(TotCG.toFixed());

        document.getElementById("DrainageSubTot").innerHTML="$"+numbercomma(SubTotD.toFixed());
        document.getElementById("DrainCon").innerHTML="%"+numbercomma(localStorage.getItem("DIPercent"));
        document.getElementById("DrainageContin").innerHTML="$"+numbercomma(ContD.toFixed());
       return [TotCC,TotPU36,TotPO36,TotEP36,TotDU,TotCG,SubTotD,ContD];
}
function PavementItems()
{
    var TotSB = SurfaceCourse()*localStorage.getItem("sc3");
       TotIC = IntermediateCourse()*localStorage.getItem("ic3");
       TotBC = BaseCourse()*localStorage.getItem("bc3");
      TotSbC = SubbaseCourse()*localStorage.getItem("sbc3");
       TotNS = NoOneStone()*localStorage.getItem("ns3");
      SubTot = TotSB+TotIC+TotBC+TotSbC+TotNS;
        Cont = (localStorage.getItem("PavIPercent")*SubTot)/100;
    document.getElementById("SurfaceFC").innerHTML=numbercomma(SurfaceCourse().toFixed());
    document.getElementById("SurfaceUP").innerHTML="$"+numbercomma(localStorage.getItem("sc3"));
    document.getElementById("TotSurfaceFC").innerHTML="$"+numbercomma(TotSB.toFixed());

    document.getElementById("IntermediateFC").innerHTML=numbercomma(IntermediateCourse().toFixed());
    document.getElementById("IntermediateUP").innerHTML="$"+numbercomma(localStorage.getItem("ic3"));
    document.getElementById("TotIntermediateFC").innerHTML="$"+numbercomma(TotIC.toFixed());

    document.getElementById("BaseFC").innerHTML=numbercomma(BaseCourse().toFixed());
    document.getElementById("BaseUP").innerHTML="$"+numbercomma(localStorage.getItem("bc3"));
    document.getElementById("TotBaseFC").innerHTML="$"+numbercomma(TotBC.toFixed());

    document.getElementById("SubbaseFC").innerHTML=numbercomma(SubbaseCourse().toFixed());
    document.getElementById("SubbaseUP").innerHTML="$"+numbercomma(localStorage.getItem("sbc3"));
    document.getElementById("TotSubbaseFC").innerHTML="$"+numbercomma(TotSbC.toFixed());

    document.getElementById("No1FC").innerHTML=numbercomma(NoOneStone().toFixed());
    document.getElementById("No1UP").innerHTML="$"+numbercomma(localStorage.getItem("ns3"));
    document.getElementById("TotNo1FC").innerHTML="$"+numbercomma(TotNS.toFixed());

    document.getElementById("PavementSubTot").innerHTML="$"+numbercomma(SubTot.toFixed());
    document.getElementById("PaveCon").innerHTML="%"+numbercomma(localStorage.getItem("PavIPercent"));
    document.getElementById("PavementContin").innerHTML="$"+numbercomma(Cont.toFixed());
    return [TotSB,TotIC,TotBC,TotSbC,TotNS,SubTot,Cont];
}
function IncidentalItems()
{
   var TotRW = RetainingWalls()*localStorage.getItem("rw4");
       TotPE = PrivEnt()*localStorage.getItem("rp4");
       TotUE = UrbEnt()*localStorage.getItem("up4");
       TotCE = CommEnt()*localStorage.getItem("ce4");
      SubTot = TotRW+TotPE+TotUE+TotCE;
        Cont = (localStorage.getItem("IIPercent")*SubTot)/100;
        document.getElementById("RetainFC").innerHTML=numbercomma(RetainingWalls().toFixed());
        document.getElementById("RetainUP").innerHTML="$"+numbercomma(localStorage.getItem("rw4"));
        document.getElementById("TotRetainFC").innerHTML="$"+numbercomma(TotRW.toFixed());

        document.getElementById("RuralFC").innerHTML=numbercomma(Number(PrivEnt()).toFixed());
        document.getElementById("RuralUP").innerHTML="$"+numbercomma(localStorage.getItem("rp4"));
        document.getElementById("TotRuralFC").innerHTML="$"+numbercomma(TotPE.toFixed());

        document.getElementById("UrbanFC").innerHTML=numbercomma(Number(UrbEnt()).toFixed());
        document.getElementById("UrbanUP").innerHTML="$"+numbercomma(localStorage.getItem("up4"));
        document.getElementById("TotUrbanFC").innerHTML="$"+numbercomma(TotUE.toFixed());

        document.getElementById("CommFC").innerHTML=numbercomma(Number(CommEnt()).toFixed());
        document.getElementById("CommUP").innerHTML="$"+numbercomma(localStorage.getItem("ce4"));
        document.getElementById("TotCommFC").innerHTML="$"+numbercomma(TotCE.toFixed());

        document.getElementById("IncidentalSubTot").innerHTML="$"+numbercomma(SubTot.toFixed());
        document.getElementById("IncidCon").innerHTML="%"+numbercomma(localStorage.getItem("IIPercent"));
        document.getElementById("IncidentalContin").innerHTML="$"+numbercomma(Cont.toFixed());
       return [TotRW,TotPE,TotUE,TotCE,SubTot,Cont];
}
function ProtectiveItems()
{
   var TotMT = MainofTraffic()*1;
       TotFO = FieldOffice()*localStorage.getItem("fo5");
        TotS = Sidewalk()*localStorage.getItem("s5");
      SubTot = TotMT+TotFO+TotS;
        Cont = (localStorage.getItem("ProIPercent")*SubTot)/100;
        document.getElementById("MainUP").innerHTML="$"+numbercomma(MainofTraffic().toFixed());
        document.getElementById("TotMainFC").innerHTML="$"+numbercomma(TotMT.toFixed());

        document.getElementById("FieldFC").innerHTML=numbercomma(Number(FieldOffice()).toFixed());
        document.getElementById("FieldUP").innerHTML="$"+numbercomma(localStorage.getItem("fo5"));
        document.getElementById("TotFieldFC").innerHTML="$"+numbercomma(TotFO.toFixed());

        document.getElementById("SideFC").innerHTML=numbercomma(Sidewalk().toFixed());
        document.getElementById("SideUP").innerHTML="$"+numbercomma(localStorage.getItem("s5"));
        document.getElementById("TotSideFC").innerHTML="$"+numbercomma(TotS.toFixed());

        document.getElementById("ProtectiveSubTot").innerHTML="$"+numbercomma(SubTot.toFixed());
        document.getElementById("ProtCon").innerHTML="%"+numbercomma(localStorage.getItem("ProIPercent"));
        document.getElementById("ProtectiveContin").innerHTML="$"+numbercomma(Cont.toFixed()); 
       return [TotMT,TotFO,TotS,SubTot,Cont];
}
function ErosionItems()
{
   var TotSM = StormWaterManageFac()[0]*StormWaterManageFac()[1];
        TotS = Seeding()*localStorage.getItem("s6");
       TotTS = TempSiltFence()*localStorage.getItem("ts6");
       TotCD = CheckDamsTYlOrTYll()*localStorage.getItem("cd6");
      SubTot = TotSM+TotS+TotTS+TotCD;
        Cont = (localStorage.getItem("ECPercent")*SubTot)/100;
        document.getElementById("StormFC").innerHTML=numbercomma(Number(StormWaterManageFac()[0]).toFixed()); 
        document.getElementById("StormUP").innerHTML="$"+numbercomma(Number(StormWaterManageFac()[1]).toFixed()); 
        document.getElementById("TotStormFC").innerHTML="$"+numbercomma(TotSM.toFixed());

        document.getElementById("SeedFC").innerHTML=numbercomma(Seeding().toFixed()); 
        document.getElementById("SeedUP").innerHTML="$"+numbercomma(localStorage.getItem("s6")); 
        document.getElementById("TotSeedFC").innerHTML="$"+numbercomma(TotS.toFixed());

        document.getElementById("TempFC").innerHTML=numbercomma(TempSiltFence().toFixed()); 
        document.getElementById("TempUP").innerHTML="$"+numbercomma(localStorage.getItem("ts6")); 
        document.getElementById("TotTempFC").innerHTML="$"+numbercomma(TotTS.toFixed());

        document.getElementById("CheckFC").innerHTML=numbercomma(CheckDamsTYlOrTYll().toFixed()); 
        document.getElementById("CheckUP").innerHTML="$"+numbercomma(localStorage.getItem("cd6")); 
        document.getElementById("TotCheckFC").innerHTML="$"+numbercomma(TotCD.toFixed());

        document.getElementById("ErosionSubTot").innerHTML="$"+numbercomma(SubTot.toFixed());
        document.getElementById("ErosCon").innerHTML="%"+numbercomma(localStorage.getItem("ECPercent"));
        document.getElementById("ErosionContin").innerHTML="$"+numbercomma(Cont.toFixed());
       return [TotSM,TotS,TotTS,TotCD,SubTot,Cont];
}
function UtilItems()
{
   var TotSM = BelowGroundUtilities()*localStorage.getItem("bg7");
        Cont = (localStorage.getItem("UPercent")*TotSM)/100;
    document.getElementById("BelowFC").innerHTML=numbercomma(BelowGroundUtilities().toFixed());
    document.getElementById("BelowUP").innerHTML="$"+numbercomma(localStorage.getItem("bg7"));
    document.getElementById("TotBelowFC").innerHTML="$"+numbercomma(TotSM.toFixed());

    document.getElementById("UtilitiesSubTot").innerHTML="$"+numbercomma(TotSM.toFixed());
    document.getElementById("UtilCon").innerHTML="%"+numbercomma(localStorage.getItem("UPercent"));
    document.getElementById("UtilitiesContin").innerHTML="$"+numbercomma(Cont.toFixed());
       return [TotSM,TotSM,Cont];
}
function TrafficandSafetyItems()
{
   var TotPS = PermanentSignal()*localStorage.getItem("ps8");
       TotPM = PavementMarkings()*localStorage.getItem("pm8");
       TotGR = GuardrailGR2()*localStorage.getItem("gg8");
       TotET = EndTreatmentGR9()*localStorage.getItem("et8");
      TotGRF = GRFOA()*localStorage.getItem("gr8");
      SubTot = TotPS+TotPM+TotGR+TotET+TotGRF;
        Cont = (localStorage.getItem("TSPercent")*SubTot)/100;

        document.getElementById("PermFC").innerHTML=numbercomma(Number(PermanentSignal()).toFixed());
        document.getElementById("PermUP").innerHTML="$"+numbercomma(localStorage.getItem("ps8"));
        document.getElementById("TotPermFC").innerHTML="$"+numbercomma(TotPS.toFixed());

        document.getElementById("PaveFC").innerHTML=numbercomma(PavementMarkings().toFixed());
        document.getElementById("PaveUP").innerHTML="$"+numbercomma(localStorage.getItem("pm8"));
        document.getElementById("TotPaveFC").innerHTML="$"+numbercomma(TotPM.toFixed());

        document.getElementById("GuardFC").innerHTML=numbercomma(Number(GuardrailGR2()).toFixed());
        document.getElementById("GuardUP").innerHTML="$"+numbercomma(localStorage.getItem("gg8"));
        document.getElementById("TotGuardFC").innerHTML="$"+numbercomma(TotGR.toFixed());

        document.getElementById("EndFC").innerHTML=numbercomma(Number(EndTreatmentGR9()).toFixed());
        document.getElementById("EndUP").innerHTML="$"+numbercomma(localStorage.getItem("et8"));
        document.getElementById("TotEndFC").innerHTML="$"+numbercomma(TotET.toFixed());

        document.getElementById("GRFC").innerHTML=numbercomma(Number(GRFOA()).toFixed());
        document.getElementById("GRUP").innerHTML="$"+numbercomma(localStorage.getItem("gr8"));
        document.getElementById("TotGRFC").innerHTML="$"+numbercomma(TotGRF.toFixed());

        document.getElementById("TrafficSSubTot").innerHTML="$"+numbercomma(SubTot.toFixed());
        document.getElementById("TrafCon").innerHTML="%"+numbercomma(localStorage.getItem("TSPercent"));
        document.getElementById("TrafficSContin").innerHTML="$"+numbercomma(Cont.toFixed());
       return [TotPS,TotPM,TotGR,TotET,TotGRF,SubTot,Cont];
}
function BridgeItems()
{
   var TotNS = NSBridge()*localStorage.getItem("ns9");
       TotDB = DemolitionExistingBridge()*localStorage.getItem("de9");
      SubTot = TotNS+TotDB;
        Cont = (localStorage.getItem("BPercent")*SubTot)/100;
        document.getElementById("NSFC").innerHTML=numbercomma(NSBridge().toFixed());
        document.getElementById("NSUP").innerHTML="$"+numbercomma(localStorage.getItem("ns9"));
        document.getElementById("TotNSFC").innerHTML="$"+numbercomma(TotNS.toFixed());

        document.getElementById("DemoFC").innerHTML=numbercomma(DemolitionExistingBridge().toFixed());
        document.getElementById("DemoUP").innerHTML="$"+numbercomma(localStorage.getItem("de9"));
        document.getElementById("TotDemoFC").innerHTML="$"+numbercomma(TotDB.toFixed());

        document.getElementById("BridgeSubTot").innerHTML="$"+numbercomma(SubTot.toFixed());
        document.getElementById("BridCon").innerHTML="%"+numbercomma(localStorage.getItem("BPercent"));
        document.getElementById("BridgeContin").innerHTML="$"+numbercomma(Cont.toFixed());
       return [TotNS,TotDB,SubTot,Cont];
}
function StreamWetlandMitigationItems()
{
   var TotSM = StreamMitigation()*localStorage.getItem("sm0");
       TotWM = WetlandMitigation()*localStorage.getItem("wm0");
        document.getElementById("StreamFC").innerHTML=numbercomma(Number(StreamMitigation()).toFixed());
        document.getElementById("StreamUP").innerHTML="$"+numbercomma(localStorage.getItem("sm0"));
        document.getElementById("TotStreamFC").innerHTML="$"+numbercomma(TotSM.toFixed());

        document.getElementById("WetlandFC").innerHTML=numbercomma(Number(WetlandMitigation()).toFixed());
        document.getElementById("WetlandUP").innerHTML="$"+numbercomma(localStorage.getItem("wm0"));
        document.getElementById("TotWetlandFC").innerHTML="$"+numbercomma(TotWM.toFixed());
       return [TotSM,TotWM];
}
function MiscellaneousItems() {
    var TotMisc1=localStorage.getItem("misc1quan")*localStorage.getItem("misc1pric");
        TotMisc2=localStorage.getItem("misc2quan")*localStorage.getItem("misc2pric");
        TotMisc3=localStorage.getItem("misc3quan")*localStorage.getItem("misc3pric");
        TotMisc4=localStorage.getItem("misc4quan")*localStorage.getItem("misc4pric");
        TotMisc5=localStorage.getItem("misc5quan")*localStorage.getItem("misc5pric");
        TotMisc=TotMisc1+TotMisc2+TotMisc3+TotMisc4+TotMisc5;

        document.getElementById("MiscI1I").innerHTML=MiscFiller(localStorage.getItem("misc1item"));
        document.getElementById("MiscI1Qu").innerHTML=MiscFiller(localStorage.getItem("misc1unit"));
        document.getElementById("MiscI1FC").innerHTML=numbercomma(Number(localStorage.getItem("misc1quan")));
        document.getElementById("MiscI1UP").innerHTML="$"+numbercomma(Number(localStorage.getItem("misc1pric")));
        document.getElementById("TotMiscI1FC").innerHTML="$"+numbercomma(TotMisc1.toFixed());

        document.getElementById("MiscI2I").innerHTML=MiscFiller(localStorage.getItem("misc2item"));
        document.getElementById("MiscI2Qu").innerHTML=MiscFiller(localStorage.getItem("misc2unit"));
        document.getElementById("MiscI2FC").innerHTML=numbercomma(Number(localStorage.getItem("misc2quan")));
        document.getElementById("MiscI2UP").innerHTML="$"+numbercomma(Number(localStorage.getItem("misc2pric")));
        document.getElementById("TotMiscI2FC").innerHTML="$"+numbercomma(TotMisc2.toFixed());

        document.getElementById("MiscI3I").innerHTML=MiscFiller(localStorage.getItem("misc3item"));
        document.getElementById("MiscI3Qu").innerHTML=MiscFiller(localStorage.getItem("misc3unit"));
        document.getElementById("MiscI3FC").innerHTML=numbercomma(Number(localStorage.getItem("misc3quan")));
        document.getElementById("MiscI3UP").innerHTML="$"+numbercomma(Number(localStorage.getItem("misc3pric")));
        document.getElementById("TotMiscI3FC").innerHTML="$"+numbercomma(TotMisc3.toFixed());

        document.getElementById("MiscI4I").innerHTML=MiscFiller(localStorage.getItem("misc4item"));
        document.getElementById("MiscI4Qu").innerHTML=MiscFiller(localStorage.getItem("misc4unit"));
        document.getElementById("MiscI4FC").innerHTML=numbercomma(Number(localStorage.getItem("misc4quan")));
        document.getElementById("MiscI4UP").innerHTML="$"+numbercomma(Number(localStorage.getItem("misc4pric")));
        document.getElementById("TotMiscI4FC").innerHTML="$"+numbercomma(TotMisc4.toFixed());

        document.getElementById("MiscI5I").innerHTML=MiscFiller(localStorage.getItem("misc5item"));
        document.getElementById("MiscI5Qu").innerHTML=MiscFiller(localStorage.getItem("misc5unit"));
        document.getElementById("MiscI5FC").innerHTML=numbercomma(Number(localStorage.getItem("misc5quan")));
        document.getElementById("MiscI5UP").innerHTML="$"+numbercomma(Number(localStorage.getItem("misc5pric")));
        document.getElementById("TotMiscI5FC").innerHTML="$"+numbercomma(TotMisc5.toFixed());

        return TotMisc;
}
//
//
//
// <================= Grand Totals =================>
//
//
//
function SubGrandTotals()
{   
    var GrandSubTotal = parseFloat(GradingItems()[6],10)+parseFloat(DrainageItems()[6],10)+parseFloat(PavementItems()[5],10)+parseFloat(IncidentalItems()[4],10)+parseFloat(ProtectiveItems()[3],10)+parseFloat(ErosionItems()[4],10)+parseFloat(UtilItems()[1],10)+parseFloat(TrafficandSafetyItems()[5],10)+parseFloat(BridgeItems()[2],10)+parseFloat(StreamWetlandMitigationItems()[0],10)+parseFloat(StreamWetlandMitigationItems()[1],10)+parseFloat(MiscellaneousItems(),10);
              ContTot = parseFloat(GradingItems()[7],10)+parseFloat(DrainageItems()[7],10)+parseFloat(PavementItems()[6],10)+parseFloat(IncidentalItems()[5],10)+parseFloat(ProtectiveItems()[4],10)+parseFloat(ErosionItems()[5],10)+parseFloat(UtilItems()[2],10)+parseFloat(TrafficandSafetyItems()[6],10)+parseFloat(BridgeItems()[3],10);
            ConSurvey = Math.ceil((GrandSubTotal*0.015)/1000)*1000;
    if (GrandSubTotal <= 1000000) {
        var Mobile = ((GrandSubTotal-200000)*0.075)+20000;
    } else {
        var Mobile = ((GrandSubTotal-1000000)*0.05)+80000;
    }
    var    PreGrandTot = GrandSubTotal+ContTot+ConSurvey+Mobile;

    document.getElementById("MobileFC").innerHTML="$"+numbercomma(Mobile.toFixed());
    document.getElementById("TotMobileFC").innerHTML="$"+numbercomma(Mobile.toFixed());
    document.getElementById("ConstructFC").innerHTML="$"+numbercomma(ConSurvey.toFixed());
    document.getElementById("TotConstructFC").innerHTML="$"+numbercomma(ConSurvey.toFixed());
    document.getElementById("ContingencyFC").innerHTML="$"+numbercomma(ContTot.toFixed());
    document.getElementById("SubTotalsFC").innerHTML="$"+numbercomma(GrandSubTotal.toFixed());
    document.getElementById("PreGrandTotalsFC").innerHTML="$"+numbercomma(PreGrandTot.toFixed());   

    return [Mobile,ConSurvey,ContTot,GrandSubTotal,PreGrandTot];

}
function CEIContigency()
{
    var CEI = SubGrandTotals()[4]*(localStorage.getItem("pcei")/100);
    if (SubGrandTotals()[4] < 5000000) {
        var ContinTier = "Tier I (5%)";
            ProContin = SubGrandTotals()[3]*0.05;
    } else {
        var ContinTier = "Tier II (10%)";
            ProContin = SubGrandTotals()[3]*0.1;
    }
    document.getElementById("MainPercent").innerHTML=localStorage.getItem("pcei")+"%";
    document.getElementById("CEIPercentSum").innerHTML="$"+numbercomma(CEI.toFixed());
    document.getElementById("TierNum").innerHTML=ContinTier;
    document.getElementById("ProjectContin").innerHTML="$"+numbercomma(ProContin.toFixed(2));
    return [ContinTier,CEI,ProContin]
}
function GrandTotal()
{
var CurtYear = localStorage.getItem("CurrentYear");
    PropYear = localStorage.getItem("ProposedAdDateYear");
    FinalGrandTotal=Math.ceil(((CEIContigency()[1]+CEIContigency()[2]+SubGrandTotals()[4])*(Math.pow((1+0.015),(PropYear-CurtYear))))/10000)*10000;
    curtime()
    document.getElementById("ProjectNum").innerHTML=localStorage.getItem("projectnum");
    document.getElementById("UPCid").innerHTML=localStorage.getItem("upcid");
    document.getElementById("Estname").innerHTML=localStorage.getItem("estname");
    document.getElementById("GrandtotalFC").innerHTML="$"+numbercomma(FinalGrandTotal);
    MiscellaneousItems();
    return FinalGrandTotal;
}
//
//
//
// <================= Miscellaneous functions =================>
//
//
//
function numbercomma (num) {
    if (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else {
        return 0;
    }
}

function MiscFiller (Tex) {
    if (Tex==false) 
    {
        return 'Not Entered';
    }
}
function curtime() {
    var CurrentTime= new Date();
    document.getElementById('time').innerHTML = CurrentTime;
    return CurrentTime;
}
window.onload = function () {
    $("#calc").click( function () {
        GrandTotal();
    })
    $("#prnt").click(function () {
        window.print()
    })
}