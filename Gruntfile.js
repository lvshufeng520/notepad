module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'dist/index.html',
        dest: 'dist/index.html'
      }
    },
    uglify: {
      files: {
        src: ['js/*.js'],
        dest: 'dist/js'
      }
    },
    cssmin: {
      files: {
        src: ['css/*.css'],
        dest: 'dist/css'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('build', [ 'uglify', 'cssmin', 'htmlmin']);
};
