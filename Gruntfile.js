module.exports=function (grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				manage: false
			},
			minipagecompress: {
				files: {
					'build/js/minipages.min.js': ['js/localmemory.js','js/minipages.mechanisms.js']
				}
			},
			braincompress: {
				files: {
					'build/js/receipt.min.js':['js/brains.js','js/PDFDriver.js','js/receipt.mechanisms.js']
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
				files: ['js/localmemory.js','js/minipages.mechanisms.js'],
				tasks: ['uglify:minipagecompress']
			},
			brainsscripts: {
				files: ['js/brains.js','js/PDFDriver.js','js/receipt.mechanisms.js'],
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