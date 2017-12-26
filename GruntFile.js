
/* Tutorial */
/*
module.exports = function(grunt) {
    grunt.registerTask("speak", function(){
        console.log("I am speaking.");
    });

    grunt.registerTask("yell", function(){
        console.log("I am YELLING!");
    });

    grunt.registerTask("default",["speak", "yell"]);

};
*/


module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            task1: {
                options: {
                    sizes: [{
                        rename: false,
                        width: "100%",
                        quality: 90
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{jpg,gif,png}'],
                    cwd: 'img_src',
                    dest: 'img'
                }, {
                    expand: true,
                    src: ['*.{jpg,gif,png}'],
                    cwd: 'views/img_src',
                    dest: 'views/images'
                }]
            }
        },
        clean: {
            dev: {
                src: ['img', "views/images"]
            },
        },
        mkdir: {
            dev: {
                options: {
                    create: ['img', "views/images"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask("default", ["clean", "mkdir", "responsive_images"]);
};