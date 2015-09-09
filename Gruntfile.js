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
					'build/js/proposedroadway.slider.min.js': ['js/MinipagesOther/proposedroadway.slider.js']
				}
			},
			braincompress: {
				files: {
					'build/js/receipt.min.js':['js/Receipt/*.js']
				}
			}
		},
		sass:{
			dist:{
				options:{
					style: 'compressed'
				},
				files:{
					'build/css/style.css':'sass/minipages.scss'
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
			sass: {
				files: ['sass/partials/*.scss','sass/minipages.scss'],
				tasks: ['sass']
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['uglify','sass','watch']);
};