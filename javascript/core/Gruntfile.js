module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    jshint : {
      options : {
        curly : true,
        bitwise : false,
        camelcase : true,
        eqeqeq : true,
        forin : true,
        immed : true,
        latedef : true,
        newcap : true,
        noarg : true,
        noempty : true,
        nonew : true,
        plusplus : false,
        indent : 2,
        undef : true,
        quotmark : 'single',
        unused : true,
        strict : true,
        trailing : true,
        globals : {
          require : false,
          module : true,
          describe : false,
          it : false
        }
      },
      all : [ 'Gruntfile.js', 'src/**/*.js', 'test/**/*.js' ]
    },
    browserify : {
      dist  : {
        files: {
          'build/browser.js': 'src/**/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['jshint', 'browserify']);
};