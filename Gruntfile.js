module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      files: {
        "src": "less/screen.less",
        "dest": "css/screen.css"
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        flatten: true,
        src: "components/bootstrap/less/*.less",
        dest: "less/bootstrap/"
      },
      js: {
        expand: true,
        flatten: true,
        src: "components/jquery/jquery.js",
        dest: "js/lib/"
      }
    },

    watch: {
      css: {
        files: "less/**/*.less",
        tasks: ["less"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
};