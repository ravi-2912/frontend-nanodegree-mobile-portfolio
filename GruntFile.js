
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
                        quality: 85
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{jpg,gif,png}'],
                    cwd: 'img_src',
                    dest: 'img'
                }, {
                    expand: true,
                    src: ["pizza.png"],
                    cwd: "views/img_src",
                    dest: "views/images"
                }]
            },
            task2: {
                options: {
                    sizes: [{
                        width: 540,
                        quality: 85
                    }, {
                        width: 360,
                        quality: 85
                    }, {
                        width: 100,
                        quality: 85
                    }]
                },
                files: [{
                    expand: true,
                    src: ['pizzeria.jpg'],
                    cwd: 'views/img_src',
                    dest: 'views/images'
                }]
            },
            task3: {
                options: {
                    sizes: [{
                        width: 100,
                        quality: 85
                    }]
                },
                files: [{
                    expand: true,
                    src: ['pizza.png'],
                    cwd: 'views/img_src',
                    dest: 'views/images'
                }]
            }
        },
        clean: {
            dev: {
                src: ['img', "views/images", "dist"]
            },
            pizzaviews: {
                src: ["dist/views"]
            }
        },
        mkdir: {
            dev: {
                options: {
                    create: ['img', "views/images", "dist"]
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/js/perfmatters.min.js': ['js/perfmatters.js']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'index.html',
                    'dist/project-2048.html': 'project-2048.html',
                    'dist/project-mobile.html': 'project-mobile.html',
                    'dist/project-webperf.html': 'project-webperf.html',
                }
            },
        },
        concat: {
            dist: {
                src: ['css/style.min.css', 'css/print.min.css'],
                dest: 'dist/css/styles.min.css',
            }
        },
        copy: {
            main: {
                expand: true,
                src: ['img/*', 'views/**', 'ngrok.exe'],
                dest: 'dist/',
            },
            pizzaviews: {
                expand: true,
                src: ['views/**'],
                dest: 'dist/',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');

   
   grunt.registerTask("minify-html", ["htmlmin"]);
   grunt.registerTask("copy-pizza", ["clean:pizzaviews", "copy:pizzaviews"]);
   grunt.registerTask("minify-css", ["cssmin", "concat"]);
   grunt.registerTask("default", ["clean", "mkdir", "responsive_images", "uglify", "minify-css", "htmlmin", "copy"]);

};