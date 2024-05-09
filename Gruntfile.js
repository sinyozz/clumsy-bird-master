/*global module:false*/
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                report: 'min',
                preserveComments: 'some'
            },
            dist: {
                files: {
                    'dist/clumsy-min.js': [
                        'js/game.js',
                        'js/entities/entities.js',
                        'js/entities/HUD.js',
                        'js/screens/title.js',
                        'js/screens/play.js',
                        'js/screens/gameover.js',
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['uglify']);
};
