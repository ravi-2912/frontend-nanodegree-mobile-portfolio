module.exports = function (grunt) {

    //var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        responsive_images: {
            main: {
                options: {
                    sizes: [{
                        rename: false,
                        width: "100%",
                        quality: 80
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{jpg,gif,png}'],
                    cwd: 'img_src',
                    dest: 'img'
                }, ]
            },
            pizzeria: {
                options: {
                    sizes: [{
                        width: 540,
                        quality: 80
                    }, {
                        width: 360,
                        quality: 80
                    }, {
                        width: 100,
                        quality: 80
                    }]
                },
                files: [{
                    expand: true,
                    src: ['pizzeria.jpg'],
                    cwd: 'views/img_src',
                    dest: 'views/images'
                }]
            },
            pizza: {
                options: {
                    sizes: [{
                        width: 100,
                        quality: 80
                    }, {
                        rename: false,
                        width: "100%",
                        quality: 80
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
            dist: {
                src: "dist"
            },
            images: {
                src: ['img', "views/images"]
            },
        },
        mkdir: {
            images: {
                options: {
                    create: ['img', "views/images"]
                }
            },
            dist: {
                options: {
                    create: ["dist", "dist/css", "dist/js", "dist/img", "dist/views",  "dist/views/css",  "dist/views/js",  "dist/views/images"]
                }
            }
        },
        cssmin: {
            target: {
                options: {
                    mergeIntoShorthands: false,
                    roundingPrecision: -1
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                },{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/views/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/js/perfmatters.min.js': 'js/perfmatters.js',
                    'dist/views/js/main.min.js': 'views/js/main.js'
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
                    'dist/views/pizza.html': 'views/pizza.html'
                }
            },
        },
        concat: {
            dist: {
                files: {
                    'dist/css/styles.min.css': ['css/style.min.css', 'css/print.min.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    //use: [mozjpeg()] // Example plugin usage
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }, {
                    expand: true,
                    cwd: 'views/images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/views/images/'
                }]
            }
        },
        copy: {
            ngrok: {
                files: [{
                    expand: true,
                    src: 'ngrok.exe',
                    dest: 'dist/'
                }]
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

    grunt.registerTask("optim-images", ["clean:images", "responsive_images"]);
    grunt.registerTask("clean-dist", ["clean:dist"]);
    grunt.registerTask("clean-img", ["clean:images"]);
    grunt.registerTask("clean-all", ["clean"]);
    grunt.registerTask("mkdir-dist", ["mkdir:dist"]);
    grunt.registerTask("mkdir-img", ["mkdir:images"]);
    grunt.registerTask("mkdir-all", ["mkdir"]);
    grunt.registerTask("minify-css", ["cssmin", "concat"]);
    grunt.registerTask("minify-html", ["htmlmin"]);
    grunt.registerTask("minify-js", ["uglify"]);
    grunt.registerTask("minify-img", ["imagemin"]);
    grunt.registerTask("copy-dist", ["copy:dist"]);
    grunt.registerTask("copy-ngrok", ["copy:ngrok"]);

    grunt.registerTask("default", ["clean-all", "optim-images", "mkdir-all", "minify-css", "minify-js", "minify-html", "minify-img", "copy"]);

};