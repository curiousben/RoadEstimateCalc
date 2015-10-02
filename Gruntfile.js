module.exports=function (grunt) 
{
	grunt.initConfig({
		uglify: {
			options: {
				manage: true
			},
			minipagecompress: {
				files: {
					'build/js/minipages.min.js': ['js/Minipages/*.js']
				}
			},
			minipagecompressothers:{
				files: {
					'build/js/contingency.sliders.min.js': ['js/MinipagesOther/contingency.sliders.js'],
					'build/js/proposedroadway.slider.min.js': ['js/MinipagesOther/proposedroadway.slider.js'],
					'build/js/unitprices.slider.min.js' :['js/MinipagesOther/unitprices.slider.js'],
					'build/js/databasedata.min.js' :['js/MinipagesOther/databasedata.js'],
					'build/js/global.min.js' :['js/MinipagesOther/global.js']
				}
			},
			braincompress: {
				files: {
					'build/js/receipt.min.js':['js/Receipt/*.js']
				}
			}
		},
		watch: {
			minipagescripts: {
				files: ['js/Minipages/*.js'],
				tasks: ['uglify:minipagecompress']
			},
			minipagescriptsother: {
				files: ['js/MinipagesOther/*.js'],
				tasks: ['uglify:minipagecompressothers']
			},
			brainsscripts: {
				files: ['js/Receipt/*.js'],
				tasks: ['uglify:braincompress']
			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify','watch']);
};