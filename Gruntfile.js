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
				banner:'/*\n*\n* DISCLAIMER:\n* The contents of this web application do not nessarily reflect the offical \n* views or policies of the Virginia Department of Transportation, the \n* Commonwealth Transportation Board, or the Federal Highway Administration.\n* This web app does not constitue a standard, specification, or regulation.\n* Any inclusion of manufacturer names, trade names, or trademarksis for \n* identification purposes only and is not to be considered an endorsement.\n*\n*/\n\n/* <%= pkg.name %> v<%= pkg.version %> | 2015 Virginia Transportation Research Council */\n'
			},
			PageInputCompress: {
				files: {
					'build/js/pageinput.min.js' :['development/PageInput/*.js']
				}
			},
			PageInputContingencyCompress:{
				files: {
					'build/js/pageinput.contingency.min.js' :['development/PageInput/Addons/Sliders/pageinput.silders.contingency.mechanisms.js','development/PageInput/Addons/Sliders/pageinput.sliders.contingency.switchs.js']
				}
			},
			PageInputProposedRoadwayCompress: {
				files: {
					'build/js/pageinput.proposedroadway.min.js' :['development/PageInput/Addons/Sliders/pageinput.sliders.proposedroadway.mechanisms.js','development/PageInput/*.js']
				}
			},
			PageInputUnitPricesCompress: {
				files: {
					'build/js/pageinput.unitprices.min.js' :['development/PageInput/Addons/Sliders/pageinput.sliders.unitprices.mechanisms.js','development/PageInput/*.js']
				}
			},
			PageInputTrafficCompress: {
				files: {
					'build/js/pageinput.traffic.min.js' :['development/PageInput/Addons/Windowresize/pageinput.windowresize.traffic.mechanisms.js','development/PageInput/*.js']
				}
			},
			PageInputMiscellaneousCompress: {
				files: {
					'build/js/pageinput.miscellaneous.min.js' :['development/PageInput/Addons/Windowresize/pageinput.windowresize.miscellaneous.mechanisms.js','development/PageInput/*.js']
				}
			},
			DatabaseInputCompress:{
				files: {
					'build/js/pageinput.database.createupdate.min.js' :['development/DatabaseInput/databaseinput.mechanisms.createupdate.js','development/DatabaseInput/databaseinput.switchs.createupdate.js'],
					'build/js/pageinput.database.retrieverecord.min.js' :['development/DatabaseInput/databaseinput.retrieverecord.js']

				}
			},
			BrainCompress: {
				files: {
					'build/js/receipt.min.js':['development/Receipt/*.js']
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
			pageinputscripts: {
				files: ['js/PageInput/*.js'],
				tasks: ['uglify:PageInputCompress']
			},
			contingencyscripts: {
				files: ['development/PageInput/Addons/Sliders/pageinput.silders.contingency.mechanisms.js','development/PageInput/Addons/Sliders/pageinput.silders.contingency.switchs.js'],
				tasks: ['uglify:PageInputContingencyCompress']
			},
			proposedroadwayscripts: {
				files: ['development/PageInput/Addons/Sliders/pageinput.sliders.proposedroadway.mechanisms.js','js/PageInput/*.js'],
				tasks: ['uglify:PageInputProposedRoadwayCompress']
			},
			unitpricesscripts: {
				files: ['development/PageInput/Addons/Sliders/pageinput.sliders.unitprices.mechanisms.js','development/PageInput/*.js'],
				tasks: ['uglify:PageInputUnitPricesCompress']
			},
			trafficscripts: {
				files: ['development/PageInput/Addons/Windowresize/pageinput.windowresize.traffic.mechanisms.js','development/PageInput/*.js'],
				tasks: ['uglify:PageInputTrafficCompress']
			},
			miscellaneousscripts: {
				files: ['development/PageInput/Addons/Windowresize/pageinput.windowresize.miscellaneous.mechanisms.js','development/PageInput/*.js'],
				tasks: ['uglify:PageInputMiscellaneousCompress']
			},
			databasescripts: {
				files: ['development/PageInput/Database/*.js'],
				tasks: ['uglify:DatabaseInputCompress']
			},
			brainsscripts: {
				files: ['js/Receipt/*.js','js/Minipage_Special_Mods/minipages.loadedrecord.js'],
				tasks: ['uglify:BrainCompress']
			},
			sasscompile: {
				files: ['scss/style.scss','scss/partials/*.scss'],
				tasks: ['sass']
			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['uglify','sass','watch']);
};