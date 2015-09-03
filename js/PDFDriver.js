$('#pdfdown').click(function(event) 
{
var roadestimate = 
     {
         content: [
                     { text: 'Estimate Receipt', style: 'subheader' },
                     '(This is not intended to be a detailed pay item breakdown. It is intended to be a tool that assists users in preparing early estimates prior to having developed plans. TRNSPRT should be utilites by the PFI stage.)',
                     {
                             table: 
                             {
                                     body: 
                                     [
                                             [{ text: 'Receipt Table', style: 'tableHeader', colSpan: 5, alignment: 'center' }, {}, {},{},{}],
                                             ['Project', { text: ''+localStorage.getItem("projectnum")+'', colSpan: 4 }, '','',''],
                                             ['UPC',{ text: ''+localStorage.getItem("upcid")+'', colSpan: 4 }, '','',''],
                                             ['Date',{ text: ''+curtime()+'', colSpan: 4 }, '','',''],
                                             ['Name',{ text: ''+localStorage.getItem("estname")+'', colSpan: 4 }, '','',''],
                                             [{ text: 'Mobilization and Construction Survey', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Mobilization','LS','1','$'+numbercomma(SubGrandTotals()[0].toFixed())+'','$'+numbercomma(SubGrandTotals()[0].toFixed())+''],
                                             ['Construction Surveying','LS','1','$'+numbercomma(SubGrandTotals()[1].toFixed())+'','$'+numbercomma(SubGrandTotals()[1].toFixed())+''],
                                             [{ text: 'Grading Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Clearing and Grubbing','Acre',''+numbercomma(ClearingGrubbing().toFixed())+'','$'+numbercomma(localStorage.getItem("cr1"))+'','$'+numbercomma(GradingItems()[0].toFixed())+''],
                                             ['Regular Excavation','CY',''+numbercomma(AnticipatedRegularExcavation().toFixed())+'','$'+numbercomma(localStorage.getItem("re1"))+'','$'+numbercomma(GradingItems()[1].toFixed())+''],
                                             ['Borrow Excavation','CY',''+numbercomma(AnticipatedBowExcavation().toFixed())+'','$'+numbercomma(localStorage.getItem("be1"))+'','$'+numbercomma(GradingItems()[2].toFixed())+''],
                                             ["Unsuitable Mat'l.",'CY',''+numbercomma(AnticipatedUnsuitableMat().toFixed())+'','$'+numbercomma(localStorage.getItem("um1"))+'','$'+numbercomma(GradingItems()[3].toFixed())+''],
                                             ['Backfill Stone (No.1) For Unsuitable Matl. Areas','Tons',''+numbercomma(BackFillStoneNoOne().toFixed())+'','$'+numbercomma(localStorage.getItem("bs1"))+'','$'+numbercomma(GradingItems()[4].toFixed())+''],
                                             ['Dry Riprap','Tons',''+numbercomma(DryRipRap().toFixed())+'','$'+numbercomma(localStorage.getItem("dr1"))+'','$'+numbercomma(GradingItems()[5].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(GradingItems()[6].toFixed())+''],
                                             ['Grading Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(GradingItems()[7].toFixed())+''],
                                             [{ text: 'Drainage Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Concrete Box Culvert','LS','1','$'+numbercomma(Number(ConcreteBoxCulvert()).toFixed())+'','$'+numbercomma(DrainageItems()[0].toFixed())+''],
                                             ['Pipes Under 36"','LF',''+numbercomma(Number(PipesUnderThreeSixInfc()).toFixed())+'','$'+numbercomma(localStorage.getItem("pu2"))+'','$'+numbercomma(DrainageItems()[1].toFixed())+''],
                                             ['Pipes Over 36"','LF',''+numbercomma(Number(PipesOverThreeSixInfc()).toFixed())+'','$'+numbercomma(localStorage.getItem("po2"))+'','$'+numbercomma(DrainageItems()[2].toFixed())+''],
                                             ['End Walls for Pipe Over 36"','EA',''+numbercomma(Number(EndWallsPipesOverThreeSixfc()).toFixed())+'','$'+numbercomma(localStorage.getItem("ew2"))+'','$'+numbercomma(DrainageItems()[3].toFixed())+''],
                                             ['Drop Inlets','EA',''+numbercomma(Number(DropInletsfc()).toFixed())+'','$'+numbercomma(localStorage.getItem("di2"))+'','$'+numbercomma(DrainageItems()[4].toFixed())+''],
                                             ['Curb and Gutter','LF',''+numbercomma(Number(CurbGutterfc()).toFixed())+'','$'+numbercomma(localStorage.getItem("cg2"))+'','$'+numbercomma(DrainageItems()[5].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(DrainageItems()[6].toFixed())+''],
                                             ['Drainage Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(DrainageItems()[7].toFixed())+''],
                                             [{ text: 'Pavement Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Surface Course','Tons',''+numbercomma(SurfaceCourse().toFixed())+'','$'+numbercomma(localStorage.getItem("sc3"))+'','$'+numbercomma(PavementItems()[0].toFixed())+''],
                                             ['Intermediate Course','Tons',''+numbercomma(IntermediateCourse().toFixed())+'','$'+numbercomma(localStorage.getItem("ic3"))+'','$'+numbercomma(PavementItems()[1].toFixed())+''],
                                             ['Base Course','Tons',''+numbercomma(BaseCourse().toFixed())+'','$'+numbercomma(localStorage.getItem("bc3"))+'','$'+numbercomma(PavementItems()[2].toFixed())+''],
                                             ['Subbase Course','Tons',''+numbercomma(SubbaseCourse().toFixed())+'','$'+numbercomma(localStorage.getItem("sbc3"))+'','$'+numbercomma(PavementItems()[3].toFixed())+''],
                                             ['No.1 Stone','Tons',''+numbercomma(NoOneStone().toFixed())+'','$'+numbercomma(localStorage.getItem("ns3"))+'','$'+numbercomma(PavementItems()[4].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(PavementItems()[5].toFixed())+''],
                                             ['Pavement Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(PavementItems()[6].toFixed())+''],
                                             [{ text: 'Incidental Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Retaining Walls (Conc)','CY',''+numbercomma(RetainingWalls().toFixed())+'','$'+numbercomma(localStorage.getItem("rw4"))+'','$'+numbercomma(IncidentalItems()[0].toFixed())+''],
                                             ['Rural Private Entrance','EA',''+numbercomma(Number(PrivEnt()).toFixed())+'','$'+numbercomma(localStorage.getItem("rp4"))+'','$'+numbercomma(IncidentalItems()[1].toFixed())+''],
                                             ['Urban Private Entrance','EA',''+numbercomma(Number(UrbEnt()).toFixed())+'','$'+numbercomma(localStorage.getItem("up4"))+'','$'+numbercomma(IncidentalItems()[2].toFixed())+''],
                                             ['Commercial Entrance','EA',''+numbercomma(Number(CommEnt()).toFixed())+'','$'+numbercomma(localStorage.getItem("ce4"))+'','$'+numbercomma(IncidentalItems()[3].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(IncidentalItems()[4].toFixed())+''],
                                             ['Incidental Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(IncidentalItems()[5].toFixed())+''],
                                             [{ text: 'Protective Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Maintenance of Traffic (Lump Sum)','LS','1','$'+numbercomma(MainofTraffic().toFixed())+'','$'+numbercomma(ProtectiveItems()[0].toFixed())+''],
                                             ['Field Office','MO',''+numbercomma(Number(FieldOffice()).toFixed())+'','$'+numbercomma(localStorage.getItem("fo5"))+'','$'+numbercomma(ProtectiveItems()[1].toFixed())+''],
                                             ['Sidewalk','SY',''+numbercomma(Sidewalk().toFixed())+'','$'+numbercomma(localStorage.getItem("s5"))+'','$'+numbercomma(ProtectiveItems()[2].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(ProtectiveItems()[3].toFixed())+''],
                                             ['Protective Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(ProtectiveItems()[4].toFixed())+''],
                                             [{ text: 'Erosion Control', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Storm Water Management Facility','EA',''+numbercomma(Number(StormWaterManageFac()[0]).toFixed())+'','$'+numbercomma(Number(StormWaterManageFac()[1]).toFixed())+'','$'+numbercomma(ErosionItems()[0].toFixed())+''],
                                             ['Seeding','LB',''+numbercomma(Seeding().toFixed())+'','$'+numbercomma(localStorage.getItem("s6"))+'','$'+numbercomma(ErosionItems()[1].toFixed())+''],
                                             ['Temporary Silt Fence','LF',''+numbercomma(TempSiltFence().toFixed())+'','$'+numbercomma(localStorage.getItem("ts6"))+'','$'+numbercomma(ErosionItems()[2].toFixed())+''],
                                             ['Check Dams TY I or TY II','EA',''+numbercomma(CheckDamsTYlOrTYll().toFixed())+'','$'+numbercomma(localStorage.getItem("cd6"))+'','$'+numbercomma(ErosionItems()[3].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(ErosionItems()[4].toFixed())+''],
                                             ['Erosion Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(ErosionItems()[5].toFixed())+''],
                                             [{ text: 'Utilities', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Below Ground Utilities (Lump Sum $$$$)','LF',''+numbercomma(BelowGroundUtilities().toFixed())+'','$'+numbercomma(localStorage.getItem("bg7"))+'','$'+numbercomma(UtilItems()[0].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(UtilItems()[1].toFixed())+''],
                                             ['Utilities Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(UtilItems()[2].toFixed())+''],
                                             [{ text: 'Traffic and Safety', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Permanent Signal (Lump Sum)','EA',''+numbercomma(Number(PermanentSignal()).toFixed())+'','$'+numbercomma(localStorage.getItem("ps8"))+'','$'+numbercomma(TrafficandSafetyItems()[0].toFixed())+''],
                                             ['Pavement Markings (If Applicable)','LF',''+numbercomma(PavementMarkings().toFixed())+'','$'+numbercomma(localStorage.getItem("pm8"))+'','$'+numbercomma(TrafficandSafetyItems()[1].toFixed())+''],
                                             ['Guardrail GR-2','LF',''+numbercomma(Number(GuardrailGR2()).toFixed())+'','$'+numbercomma(localStorage.getItem("gg8"))+'','$'+numbercomma(TrafficandSafetyItems()[2].toFixed())+''],
                                             ['End Treatment GR-9','EA',''+numbercomma(Number(EndTreatmentGR9()).toFixed())+'','$'+numbercomma(localStorage.getItem("et8"))+'','$'+numbercomma(TrafficandSafetyItems()[3].toFixed())+''],
                                             ["GR-FOA's If Bridge Is On Project",'EA',''+numbercomma(Number(GRFOA()).toFixed())+'','$'+numbercomma(localStorage.getItem("gr8"))+'','$'+numbercomma(TrafficandSafetyItems()[4].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(TrafficandSafetyItems()[5].toFixed())+''],
                                             ['Traffic and Safety Items Contingency',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(TrafficandSafetyItems()[6].toFixed())+''],
                                             [{ text: 'Bridge', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['NS Bridge (Lump Sum $)(Use $300 Per Square Foot)','SF',''+numbercomma(NSBridge().toFixed())+'','$'+numbercomma(localStorage.getItem("ns9"))+'','$'+numbercomma(BridgeItems()[0].toFixed())+''],
                                             ['Demolition of Existing Bridge','LS',''+numbercomma(DemolitionExistingBridge().toFixed())+'','$'+numbercomma(localStorage.getItem("de9"))+'','$'+numbercomma(BridgeItems()[1].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numbercomma(BridgeItems()[2].toFixed())+''],
                                             ['Bridge Items Contingenc',{ colSpan: 3, text:'%5.00'},'','','$'+numbercomma(BridgeItems()[3].toFixed())+''],
                                             [{ text: 'Stream/Wetland Mitigation that is included in Construction', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Stream Mitigation','LF',''+numbercomma(Number(StreamMitigation()).toFixed())+'','$'+numbercomma(localStorage.getItem("sm0"))+'','$'+numbercomma(StreamWetlandMitigationItems()[0].toFixed())+''],
                                             ['Wetland Mitigation','ACRE',''+numbercomma(Number(WetlandMitigation()).toFixed())+'','$'+numbercomma(localStorage.getItem("wm0"))+'','$'+numbercomma(StreamWetlandMitigationItems()[1].toFixed())+''],
                                             [{ text: 'Sub-Totals', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader',colSpan:4 ,alignment: 'center'},{},{},{},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],                                                                                
                                             [{ colSpan: 4, text: 'Contingency-Totals'},'','','','$'+numbercomma(SubGrandTotals()[2].toFixed())+''],
                                             [{ colSpan: 4, text: 'Sub-Totals'},'','','','$'+numbercomma(SubGrandTotals()[3].toFixed())+''],
                                             [{ colSpan: 4, text: 'Total'},'','','','$'+numbercomma(SubGrandTotals()[4].toFixed())+''],
                                             [{ text: 'CEI and Contingency Totals', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],                                        
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Percentage', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],                                        
                                             ['CEI of at least 20% as a lump Sum Item','LS','1',''+numbercomma(localStorage.getItem("pcei"))+'%','$'+numbercomma(CEIContigency()[1].toFixed())+''],
                                             ['Project Contingency',{ colSpan: 3,text: ''+CEIContigency()[0]+''},'','','$'+numbercomma(CEIContigency()[2].toFixed())+''],
                                             [{ text: 'GrandTotal', style: 'tableHeader', colSpan: 4, alignment: 'center' },{},{},{},{text:'$'+numbercomma(GrandTotal())+''}]
                                     ]
                             }
                     },
                 ],
         styles: 
         {
             header: 
             {
                 fontSize: 18,
                 bold: true,
                 margin: [0, 0, 0, 10]
             },
             subheader: 
             {
                 fontSize: 16,
                 bold: true,
                 margin: [0, 10, 0, 5]
             },
             tableExample: 
             {
                 margin: [0, 5, 0, 15]
             },
             tableHeader: 
             {
                 bold: true,
                 fontSize: 13,
                 color: 'black'
             }
         },

         
     }
     pdfMake.createPdf(roadestimate).download(localStorage.getItem("projectnum")+'.pdf');
});
