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

module.exports=function (grunt) 
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner:'/*\n*\n* DISCLAIMER:\n* The contents of this web application do not nessarily reflect the offical \n* views or policies of the Virginia Department of Transportation, the \n* Commonwealth Transportation Board, or the Federal Highway Administration.\n* This web app does not constitue a standard, specification, or regulation.\n* Any inclusion of manufacturer names, trade names, or trademarksis for \n* identification purposes only and is not to be considered an endorsement.\n*\n*/\n\n/* <%= pkg.name %> v<%= pkg.version %> | 2015 Virginia Transportation Research Council */\n',
				mangle:false
			},
			InputErrorCompress: {
				files: {
					'build/js/inputerror.min.js' :['development/universal.mechanisms.inputerror.js']
				}
			},
			PageInputCompress: {
				files: {
					'build/js/pageinput.min.js' :['development/pageinput/*.js','development/universal.mechanisms.inputerror.js']
				}
			},
			PageInputContingencyCompress:{
				files: {
					'build/js/pageinput.contingency.min.js' :['development/pageinput/Addons/Sliders/pageinput.silders.contingency.mechanisms.js','development/pageinput/Addons/Sliders/pageinput.sliders.contingency.switchs.js']
				}
			},
			PageInputProposedRoadwayCompress: {
				files: {
					'build/js/pageinput.proposedroadway.min.js' :['development/pageinput/Addons/Sliders/pageinput.sliders.proposedroadway.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js']
				}
			},
			PageInputUnitPricesCompress: {
				files: {
					'build/js/pageinput.unitprices.min.js' :['development/pageinput/Addons/Sliders/pageinput.sliders.unitprices.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js']
				}
			},
			PageInputTrafficCompress: {
				files: {
					'build/js/pageinput.traffic.min.js' :['development/pageinput/Addons/Windowresize/pageinput.windowresize.traffic.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js']
				}
			},
			PageInputMiscellaneousCompress: {
				files: {
					'build/js/pageinput.miscellaneous.min.js' :['development/pageinput/Addons/Windowresize/pageinput.windowresize.miscellaneous.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js']
				}
			},
			DatabaseInputCompress:{
				files: {
					'build/js/database.createupdate.min.js' :['development/database/database.mechanisms.createupdate.js','development/database/database.switchs.createupdate.js'],
					'build/js/database.retrieverecord.min.js' :['development/database/database.retrieverecord.js']

				}
			},
			BrainCompress: {
				files: {
					'build/js/receipt.min.js':['development/receipt/*.js','development/universal.mechanisms.inputerror.js']
				}
			}
		},
		sass:{
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'build/css/style.css' : ['scss/style.scss']
				}
			}
		},
		watch: {
			inputerrorscripts:{
				files:['development/universal.mechanisms.inputerror.js'],
				tasks:['uglify:InputErrorCompress']
			},
			pageinputscripts: {
				files: ['development/pageinput/*.js','development/universal.mechanisms.inputerror.js'],
				tasks: ['uglify:PageInputCompress']
			},
			contingencyscripts: {
				files: ['development/pageinput/Addons/Sliders/pageinput.silders.contingency.mechanisms.js','development/pageinput/Addons/Sliders/pageinput.sliders.contingency.switchs.js'],
				tasks: ['uglify:PageInputContingencyCompress']
			},
			proposedroadwayscripts: {
				files: ['development/pageinput/Addons/Sliders/pageinput.sliders.proposedroadway.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js'],
				tasks: ['uglify:PageInputProposedRoadwayCompress']
			},
			unitpricesscripts: {
				files: ['development/pageinput/Addons/Sliders/pageinput.sliders.unitprices.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js'],
				tasks: ['uglify:PageInputUnitPricesCompress']
			},
			trafficscripts: {
				files: ['development/pageinput/Addons/Windowresize/pageinput.windowresize.traffic.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js'],
				tasks: ['uglify:PageInputTrafficCompress']
			},
			miscellaneousscripts: {
				files: ['development/pageinput/Addons/Windowresize/pageinput.windowresize.miscellaneous.mechanisms.js','development/pageinput/*.js','development/universal.mechanisms.inputerror.js'],
				tasks: ['uglify:PageInputMiscellaneousCompress']
			},
			databasescripts: {
				files: ['development/database/*.js'],
				tasks: ['uglify:DatabaseInputCompress']
			},
			brainsscripts: {
				files: ['development/receipt/*.js'],
				tasks: ['uglify:BrainCompress']
			},
			sasscompile: {
				files: ['scss/style.scss','scss/partials/**/*.scss'],
				tasks: ['sass']
			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['uglify','sass','watch']);
};