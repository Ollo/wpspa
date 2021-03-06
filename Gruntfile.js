// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks

module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Tasks

      // grunt-contrib-sass
      // requires you to have Ruby and Sass but is more stable
      sass: {
        dist: {
          options: {
            style: 'compressed',
            loadPath: 'scss/*.scss',
            sourcemap: true,
            quiet: true,
          },
          files: { // Dictionary of files
            'assets/css/main.css': 'assets/scss/main.scss', // 'destination': 'source'
            // 'css/additional.css': 'additional.scss' // if needed
          },
        },
      },

      connect: {
        server: {
          options: {
            port: 9000,
            livereload: true,
            open: true,
          }
        }
      },

      watch: {

        html: {
          files: [
            '*.html',
          ],
          options: {
            livereload: true,
          },
        },

        sass: {
          files: [
            '**/*.scss',
          ],

          //tasks: ['compass'],
          tasks: ['sass'],
        },

        css: {
          files: [
            'css/*.css',
          ],

          options: {
            livereload: true, // reload the css not the sass changes
          },
        },

        scripts: {
          files: [
            'js/*.js',
          ],
          options: {
            livereload: true,
          },
        },

        images: {
          files: [
            'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
          ],
          options: {
            livereload: true,
          },
        },
      },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch', 'sass']);
};
