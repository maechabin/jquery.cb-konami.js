module.exports = function (grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    uglify: {
      dist: {
        files: {
          'jquery.cbkonami.min.js': 'jquery.cbkonami.js'
        }
      }
    },

    watch: {
      js: {
        files: ['jquery.cbkonami.js'],
        tasks: ['uglify']
      }
    },

    jshint: {
      all: ['jquery.cbkonami.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('hint', ['jshint']);

};