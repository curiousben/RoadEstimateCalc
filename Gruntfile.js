module.exports=function (grunt) 
{
	grunt.initConfig({
		uglify: {
			options: {
				manage: true
			},
			minipagecompress: {
				files: {
					'build/js/minipages.min.js' :['js/Minipages/*.js']
				}
			},
			minipagespecialmodcompress:{
				files: {
					'build/js/minipage.contingency.min.js' :['js/Minipage_Special_Mods/contingency.sliders.js'],
					'build/js/minipage.proposedroadway.min.js' :['js/Minipage_Special_Mods/proposedroadway.slider.js','js/Minipages/*.js'],
					'build/js/minipage.unitprices.min.js' :['js/Minipage_Special_Mods/unitprices.slider.js','js/Minipage_Special_Mods/unitprices.regionalprices.js','js/Minipages/*.js'],
					'build/js/minipage.traffic.min.js' :['js/Minipage_Special_Mods/traffic.window.resize.js','js/Minipages/*.js'],
					'build/js/minipage.miscellaneous.min.js' :['js/Minipage_Special_Mods/miscellaneous.window.resize.js','js/Minipages/*.js'],
					'build/js/createupdaterecord.min.js' :['js/Minipage_Special_Mods/createupdaterecord.js'],
					'build/js/retrieverecord.min.js' :['js/Minipage_Special_Mods/retrieverecord.js']
				}
			},
			braincompress: {
				files: {
					'build/js/receipt.min.js':['js/Receipt/*.js']
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
			minipagescripts: {
				files: ['js/Minipages/*.js'],
				tasks: ['uglify:minipagecompress']
			},
			minipagescriptsother: {
				files: ['js/Minipage_Special_Mods/*.js'],
				tasks: ['uglify:minipagespecialmodcompress']
			},
			brainsscripts: {
				files: ['js/Receipt/*.js'],
				tasks: ['uglify:braincompress']
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