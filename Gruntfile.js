const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.registerTask("speak", function() {
        console.log("Hello World!");
    });

    grunt.registerTask("suzy", function() {
        console.log("I LOVE YOU SUZY!");
    });

    grunt.registerTask("moss", function() {
        console.log("0118 999 88199 9119 725 3");
    });

    grunt.registerTask("mouse", ['suzy', 'moss']);

    grunt.initConfig({
        concat: {
          js: {
            src: ['static/js/main.js'],
            dest: 'build/static/js/scripts.js',
          },
        },
        watch: {
            js: {
              files: 'static/js/*.js',
              tasks: ['concat'],
            },
            css: {
                files: 'static/css/*.scss',
                tasks: ['buildsass'],
              },
          },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'build/static/css/styles.css': 'static/css/styles.scss'
                },
            },
        },
        copy: {
            main: {
              files: [
                // includes files within path
                {expand: true, src: ['static/fonts/**'], dest: 'build/static/fonts/'},
                {expand: true, src: ['static/images/**'], dest: 'build/static/images/'},
              ],
            },
          },
      });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('build', ['concat', 'sass', 'copy']);
    grunt.registerTask('buildsass', ['sass']);
    grunt.registerTask('watchsass', ['sass', 'watch']);

};