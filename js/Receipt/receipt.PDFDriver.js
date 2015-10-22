function pdfg() 
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
                                             ['Project', { text: ''+textleftblank(localStorage.getItem("projectnum"))+'', colSpan: 4 }, '','',''],
                                             ['UPC',{ text: ''+textleftblank(localStorage.getItem("upcid"))+'', colSpan: 4 }, '','',''],
                                             ['Date',{ text: ''+curtime()+'', colSpan: 4 }, '','',''],
                                             ['Name',{ text: ''+textleftblank(localStorage.getItem("estname"))+'', colSpan: 4 }, '','',''],
                                             [{ text: 'Mobilization and Construction Survey', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Mobilization','LS','1','$'+numberleftblankcomma(SubGrandTotals()[0].toFixed())+'','$'+numberleftblankcomma(SubGrandTotals()[0].toFixed())+''],
                                             ['Construction Surveying','LS','1','$'+numberleftblankcomma(SubGrandTotals()[1].toFixed())+'','$'+numberleftblankcomma(SubGrandTotals()[1].toFixed())+''],
                                             [{ text: 'Grading Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Clearing and Grubbing','Acre',''+numberleftblankcomma(ClearingGrubbing().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("cr1"))+'','$'+numberleftblankcomma(GradingItems()[0].toFixed())+''],
                                             ['Regular Excavation','CY',''+numberleftblankcomma(AnticipatedRegularExcavation().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("re1"))+'','$'+numberleftblankcomma(GradingItems()[1].toFixed())+''],
                                             ['Borrow Excavation','CY',''+numberleftblankcomma(AnticipatedBowExcavation().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("be1"))+'','$'+numberleftblankcomma(GradingItems()[2].toFixed())+''],
                                             ["Unsuitable Mat'l.",'CY',''+numberleftblankcomma(AnticipatedUnsuitableMat().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("um1"))+'','$'+numberleftblankcomma(GradingItems()[3].toFixed())+''],
                                             ['Backfill Stone (No.1) For Unsuitable Matl. Areas','Tons',''+numberleftblankcomma(BackFillStoneNoOne().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("bs1"))+'','$'+numberleftblankcomma(GradingItems()[4].toFixed())+''],
                                             ['Dry Riprap','Tons',''+numberleftblankcomma(DryRipRap().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("dr1"))+'','$'+numberleftblankcomma(GradingItems()[5].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(GradingItems()[6].toFixed())+''],
                                             ['Grading Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("GIPercent"))+''},'','','$'+numberleftblankcomma(GradingItems()[7].toFixed())+''],
                                             [{ text: 'Drainage Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Concrete Box Culvert','LS','1','$'+numberleftblankcomma(Number(ConcreteBoxCulvert()).toFixed())+'','$'+numberleftblankcomma(DrainageItems()[0].toFixed())+''],
                                             ['Pipes Under 36"','LF',''+numberleftblankcomma(Number(PipesUnderThreeSixInfc()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("pu2"))+'','$'+numberleftblankcomma(DrainageItems()[1].toFixed())+''],
                                             ['Pipes Over 36"','LF',''+numberleftblankcomma(Number(PipesOverThreeSixInfc()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("po2"))+'','$'+numberleftblankcomma(DrainageItems()[2].toFixed())+''],
                                             ['End Walls for Pipe Over 36"','EA',''+numberleftblankcomma(Number(EndWallsPipesOverThreeSixfc()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ew2"))+'','$'+numberleftblankcomma(DrainageItems()[3].toFixed())+''],
                                             ['Drop Inlets','EA',''+numberleftblankcomma(Number(DropInletsfc()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("di2"))+'','$'+numberleftblankcomma(DrainageItems()[4].toFixed())+''],
                                             ['Curb and Gutter','LF',''+numberleftblankcomma(Number(CurbGutterfc()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("cg2"))+'','$'+numberleftblankcomma(DrainageItems()[5].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(DrainageItems()[6].toFixed())+''],
                                             ['Drainage Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("DIPercent"))+''},'','','$'+numberleftblankcomma(DrainageItems()[7].toFixed())+''],
                                             [{ text: 'Pavement Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Surface Course','Tons',''+numberleftblankcomma(SurfaceCourse().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("sc3"))+'','$'+numberleftblankcomma(PavementItems()[0].toFixed())+''],
                                             ['Intermediate Course','Tons',''+numberleftblankcomma(IntermediateCourse().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ic3"))+'','$'+numberleftblankcomma(PavementItems()[1].toFixed())+''],
                                             ['Base Course','Tons',''+numberleftblankcomma(BaseCourse().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("bc3"))+'','$'+numberleftblankcomma(PavementItems()[2].toFixed())+''],
                                             ['Subbase Course','Tons',''+numberleftblankcomma(SubbaseCourse().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("sbc3"))+'','$'+numberleftblankcomma(PavementItems()[3].toFixed())+''],
                                             ['No.1 Stone','Tons',''+numberleftblankcomma(NoOneStone().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ns3"))+'','$'+numberleftblankcomma(PavementItems()[4].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(PavementItems()[5].toFixed())+''],
                                             ['Pavement Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("PavIPercent"))+''},'','','$'+numberleftblankcomma(PavementItems()[6].toFixed())+''],
                                             [{ text: 'Incidental Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Retaining Walls (Conc)','CY',''+numberleftblankcomma(RetainingWalls().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("rw4"))+'','$'+numberleftblankcomma(IncidentalItems()[0].toFixed())+''],
                                             ['Rural Private Entrance','EA',''+numberleftblankcomma(Number(PrivEnt()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("rp4"))+'','$'+numberleftblankcomma(IncidentalItems()[1].toFixed())+''],
                                             ['Urban Private Entrance','EA',''+numberleftblankcomma(Number(UrbEnt()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("up4"))+'','$'+numberleftblankcomma(IncidentalItems()[2].toFixed())+''],
                                             ['Commercial Entrance','EA',''+numberleftblankcomma(Number(CommEnt()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ce4"))+'','$'+numberleftblankcomma(IncidentalItems()[3].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(IncidentalItems()[4].toFixed())+''],
                                             ['Incidental Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("IIPercent"))+''},'','','$'+numberleftblankcomma(IncidentalItems()[5].toFixed())+''],
                                             [{ text: 'Protective Items', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Maintenance of Traffic (Lump Sum)','LS','1','$'+numberleftblankcomma(MainofTraffic().toFixed())+'','$'+numberleftblankcomma(ProtectiveItems()[0].toFixed())+''],
                                             ['Field Office','MO',''+numberleftblankcomma(Number(FieldOffice()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("fo5"))+'','$'+numberleftblankcomma(ProtectiveItems()[1].toFixed())+''],
                                             ['Sidewalk','SY',''+numberleftblankcomma(Sidewalk().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("s5"))+'','$'+numberleftblankcomma(ProtectiveItems()[2].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(ProtectiveItems()[3].toFixed())+''],
                                             ['Protective Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("ProIPercent"))+''},'','','$'+numberleftblankcomma(ProtectiveItems()[4].toFixed())+''],
                                             [{ text: 'Erosion Control', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Storm Water Management Facility','EA',''+numberleftblankcomma(Number(StormWaterManageFac()[0]).toFixed())+'','$'+numberleftblankcomma(Number(StormWaterManageFac()[1]).toFixed())+'','$'+numberleftblankcomma(ErosionItems()[0].toFixed())+''],
                                             ['Seeding','LB',''+numberleftblankcomma(Seeding().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("s6"))+'','$'+numberleftblankcomma(ErosionItems()[1].toFixed())+''],
                                             ['Temporary Silt Fence','LF',''+numberleftblankcomma(TempSiltFence().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ts6"))+'','$'+numberleftblankcomma(ErosionItems()[2].toFixed())+''],
                                             ['Check Dams TY I or TY II','EA',''+numberleftblankcomma(CheckDamsTYlOrTYll().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("cd6"))+'','$'+numberleftblankcomma(ErosionItems()[3].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(ErosionItems()[4].toFixed())+''],
                                             ['Erosion Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("ECPercent"))+''},'','','$'+numberleftblankcomma(ErosionItems()[5].toFixed())+''],
                                             [{ text: 'Utilities', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Below Ground Utilities (Lump Sum $$$$)','LF',''+numberleftblankcomma(BelowGroundUtilities().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("bg7"))+'','$'+numberleftblankcomma(UtilItems()[0].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(UtilItems()[1].toFixed())+''],
                                             ['Utilities Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("UPercent"))+''},'','','$'+numberleftblankcomma(UtilItems()[2].toFixed())+''],
                                             [{ text: 'Traffic and Safety', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Permanent Signal (Lump Sum)','EA',''+numberleftblankcomma(Number(PermanentSignal()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ps8"))+'','$'+numberleftblankcomma(TrafficandSafetyItems()[0].toFixed())+''],
                                             ['Pavement Markings (If Applicable)','LF',''+numberleftblankcomma(PavementMarkings().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("pm8"))+'','$'+numberleftblankcomma(TrafficandSafetyItems()[1].toFixed())+''],
                                             ['Guardrail GR-2','LF',''+numberleftblankcomma(Number(GuardrailGR2()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("gg8"))+'','$'+numberleftblankcomma(TrafficandSafetyItems()[2].toFixed())+''],
                                             ['End Treatment GR-9','EA',''+numberleftblankcomma(Number(EndTreatmentGR9()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("et8"))+'','$'+numberleftblankcomma(TrafficandSafetyItems()[3].toFixed())+''],
                                             ["GR-FOA's If Bridge Is On Project",'EA',''+numberleftblankcomma(Number(GRFOA()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("gr8"))+'','$'+numberleftblankcomma(TrafficandSafetyItems()[4].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(TrafficandSafetyItems()[5].toFixed())+''],
                                             ['Traffic and Safety Items Contingency',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("TSPercent"))+''},'','','$'+numberleftblankcomma(TrafficandSafetyItems()[6].toFixed())+''],
                                             [{ text: 'Bridge', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['NS Bridge (Lump Sum $)(Use $300 Per Square Foot)','SF',''+numberleftblankcomma(NSBridge().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("ns9"))+'','$'+numberleftblankcomma(BridgeItems()[0].toFixed())+''],
                                             ['Demolition of Existing Bridge','LS',''+numberleftblankcomma(DemolitionExistingBridge().toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("de9"))+'','$'+numberleftblankcomma(BridgeItems()[1].toFixed())+''],
                                             [{ colSpan: 4, text:'Sub Total'},'','','','$'+numberleftblankcomma(BridgeItems()[2].toFixed())+''],
                                             ['Bridge Items Contingenc',{ colSpan: 3, text:''+numberleftblankContingency(localStorage.getItem("BPercent"))+''},'','','$'+numberleftblankcomma(BridgeItems()[3].toFixed())+''],
                                             [{ text: 'Stream/Wetland Mitigation that is included in Construction', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             ['Stream Mitigation','LF',''+numberleftblankcomma(Number(StreamMitigation()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("sm0"))+'','$'+numberleftblankcomma(StreamWetlandMitigationItems()[0].toFixed())+''],
                                             ['Wetland Mitigation','ACRE',''+numberleftblankcomma(Number(WetlandMitigation()).toFixed())+'','$'+numberleftblankcomma(localStorage.getItem("wm0"))+'','$'+numberleftblankcomma(StreamWetlandMitigationItems()[1].toFixed())+''],
                                             [{ text:'Miscellaneous Items' , style: 'tableHeader', colSpan: 5, alignment: 'center'},{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Unit Price', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],
                                             [''+textleftblank(localStorage.getItem("misc1item"))+'',''+textleftblank(localStorage.getItem("misc1unit"))+'',''+numberleftblankcomma(Number(localStorage.getItem("misc1quan")))+'','$'+numberleftblankcomma(Number(localStorage.getItem("misc1pric")))+'',''+"$"+numberleftblankcomma((localStorage.getItem("misc1quan")*localStorage.getItem("misc1pric")).toFixed())+''],
                                             [''+textleftblank(localStorage.getItem("misc2item"))+'',''+textleftblank(localStorage.getItem("misc2unit"))+'',''+numberleftblankcomma(Number(localStorage.getItem("misc2quan")))+'','$'+numberleftblankcomma(Number(localStorage.getItem("misc2pric")))+'',''+"$"+numberleftblankcomma((localStorage.getItem("misc2quan")*localStorage.getItem("misc2pric")).toFixed())+''],
                                             [''+textleftblank(localStorage.getItem("misc3item"))+'',''+textleftblank(localStorage.getItem("misc3unit"))+'',''+numberleftblankcomma(Number(localStorage.getItem("misc3quan")))+'','$'+numberleftblankcomma(Number(localStorage.getItem("misc3pric")))+'',''+"$"+numberleftblankcomma((localStorage.getItem("misc3quan")*localStorage.getItem("misc3pric")).toFixed())+''],
                                             [''+textleftblank(localStorage.getItem("misc4item"))+'',''+textleftblank(localStorage.getItem("misc4unit"))+'',''+numberleftblankcomma(Number(localStorage.getItem("misc4quan")))+'','$'+numberleftblankcomma(Number(localStorage.getItem("misc4pric")))+'',''+"$"+numberleftblankcomma((localStorage.getItem("misc4quan")*localStorage.getItem("misc4pric")).toFixed())+''],
                                             [''+textleftblank(localStorage.getItem("misc5item"))+'',''+textleftblank(localStorage.getItem("misc5unit"))+'',''+numberleftblankcomma(Number(localStorage.getItem("misc5quan")))+'','$'+numberleftblankcomma(Number(localStorage.getItem("misc5pric")))+'',''+"$"+numberleftblankcomma((localStorage.getItem("misc5quan")*localStorage.getItem("misc5pric")).toFixed())+''],
                                             [{ text: 'Sub-Totals', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],
                                             [{ text: 'Item', style: 'tableHeader',colSpan:4 ,alignment: 'center'},{},{},{},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],                                                                                
                                             [{ colSpan: 4, text: 'Contingency-Totals'},'','','','$'+numberleftblankcomma(SubGrandTotals()[2].toFixed())+''],
                                             [{ colSpan: 4, text: 'Sub-Totals'},'','','','$'+numberleftblankcomma(SubGrandTotals()[3].toFixed())+''],
                                             [{ colSpan: 4, text: 'Total'},'','','','$'+numberleftblankcomma(SubGrandTotals()[4].toFixed())+''],
                                             [{ text: 'CEI and Contingency Totals', style: 'tableHeader', colSpan: 5, alignment: 'center' },{},{},{},{}],                                        
                                             [{ text: 'Item', style: 'tableHeader', alignment: 'center'},{ text: 'Unit', style: 'tableHeader', alignment: 'center'}, { text: 'Quantity', style: 'tableHeader', alignment: 'center'},{ text: 'Percentage', style: 'tableHeader', alignment: 'center'},{ text: 'Amount', style: 'tableHeader', alignment: 'center'}],                                        
                                             ['CEI of at least 20% as a lump Sum Item','LS','1',''+numberleftblankcomma(localStorage.getItem("pcei"))+'%','$'+numberleftblankcomma(CEIContigency()[1].toFixed())+''],
                                             ['Project Contingency',{ colSpan: 3,text: ''+CEIContigency()[0]+''},'','','$'+numberleftblankcomma(CEIContigency()[2].toFixed())+''],
                                             [{ text: 'GrandTotal', style: 'tableHeader', colSpan: 4, alignment: 'center' },{},{},{},{text:'$'+numberleftblankcomma(GrandTotal())+''}]
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
     pdfMake.createPdf(roadestimate).download(textleftblank(localStorage.getItem("projectnum"))+'.pdf');
};