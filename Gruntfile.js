module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      social_buttons: {
        src: 'social-buttons/social-buttons.js',
        dest: 'social-buttons/social-buttons.min.js'
      },
      social_buttons_fa: {
        src: 'social-buttons-fa/social-buttons-fa.js',
        dest: 'social-buttons-fa/social-buttons-fa.min.js'
      },
      social_buttons_bootstrap: {
        src: 'social-buttons-bootstrap/social-buttons-bootstrap.js',
        dest: 'social-buttons-bootstrap/social-buttons-bootstrap.min.js'
      },
      social_buttons_pages: {
        src: 'social-buttons-pages/social-buttons-pages.js',
        dest: 'social-buttons-pages/social-buttons-pages.min.js'
      },
      social_buttons_share: {
        src: 'social-buttons-share/social-buttons-share.js',
        dest: 'social-buttons-share/social-buttons-share.min.js'
      },
      social_buttons_wide: {
        src: 'social-buttons-wide/social-buttons-wide.js',
        dest: 'social-buttons-wide/social-buttons-wide.min.js'
      }
    },
    cssmin: {
      social_buttons: {
        expand: true,
        cwd: 'social-buttons/',
        src: ['social-buttons.css'],
        dest: 'social-buttons/',
        ext: '.min.css'
      },
      social_buttons_fa: {
        expand: true,
        cwd: 'social-buttons-fa/',
        src: ['social-buttons-fa.css'],
        dest: 'social-buttons-fa/',
        ext: '.min.css'
      },
      social_buttons_bootstrap: {
        expand: true,
        cwd: 'social-buttons-bootstrap/',
        src: ['social-buttons-bootstrap.css'],
        dest: 'social-buttons-bootstrap/',
        ext: '.min.css'
      },
      social_buttons_pages: {
        expand: true,
        cwd: 'social-buttons-pages/',
        src: ['social-buttons-pages.css'],
        dest: 'social-buttons-pages/',
        ext: '.min.css'
      },
      social_buttons_share: {
        expand: true,
        cwd: 'social-buttons-share/',
        src: ['social-buttons-share.css'],
        dest: 'social-buttons-share/',
        ext: '.min.css'
      },
      social_buttons_wide: {
        expand: true,
        cwd: 'social-buttons-wide/',
        src: ['social-buttons-wide.css'],
        dest: 'social-buttons-wide/',
        ext: '.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['minify']);
  grunt.registerTask('minify', ['uglify', 'cssmin']);
};
