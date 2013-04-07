module.exports = function(grunt) {
    'use strict';

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: "<%= grunt.file.readJSON('package.json') %>",
        meta: {
            rootDir: '.',
            publicDir: 'public',
            appDir: 'app',
            distDir: '<%= meta.publicDir %>/dist',
            staticDir: '<%= meta.publicDir %>/static',
            tmpDir: '<%= meta.publicDir %>/.tmp',
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %>'
        },
        watch: {
            coffee: {
                files: ['<%= meta.staticDir %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:watch']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= meta.staticDir %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:watch']
            }
        },
        clean: {
            dist: ["<%= meta.distDir %>", "<%= meta.tmpDir %>"],
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= meta.staticDir %>/scripts',
                    src: '*.coffee',
                    dest: '<%= meta.tmpDir %>/scripts',
                    ext: '.js'
                }]
            },
            watch: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= meta.staticDir %>/scripts',
                    src: '*.coffee',
                    dest: '<%= meta.staticDir %>/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.tmpDir %>/spec',
                    src: '*.coffee',
                    dest: 'test/spec'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= meta.staticDir %>/styles',
                cssDir: '<%= meta.tmpDir %>/styles',
                imagesDir: '<%= meta.staticDir %>/images',
                javascriptsDir: '<%= meta.staticDir %>/scripts',
                fontsDir: '<%= meta.staticDir %>/styles/fonts',
                importPath: '<%= meta.staticDir %>/components',
                relativeAssets: true
            },
            dist: {},
            watch: {
                options: {
                    cssDir: '<%= meta.staticDir %>/styles',
                }
            }
        },
        requirejs: {
            dist: {
                options: {
                    // appDir: '<%= meta.staticDir %>/scripts',
                    baseUrl: '<%= meta.staticDir %>/scripts',
                    optimize: 'uglify',
                    // optimize: 'none', // for development
                    dir: '<%= meta.tmpDir %>/scripts',
                    mainConfigFile: '<%= meta.staticDir %>/scripts/config.js',
                    modules: [{
                        name: 'main'
                    }, {
                        name: 'sjm'
                    }],
                    logLevel: 0,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    inlineText: true,
                    uglify2: {
                        // //Example of a specialized config. If you are fine
                        // //with the default options, no need to specify
                        // //any of these properties.
                        // output: {
                        //     beautify: true
                        // },
                        // compress: {
                        //     sequences: false,
                        //     global_defs: {
                        //         DEBUG: false
                        //     }
                        // },
                        // warnings: true,
                        // mangle: false
                    }
                }
            }
        },
        useminPrepare: {
            html: [
                '<%= meta.appDir %>/Tpl/Public/footer.html',
                '<%= meta.appDir %>/Tpl/Jquery/footer.html'],
            options: {
                dest: '<%= meta.distDir %>'
            }
        },
        usemin: {
            html: ['<%= meta.distDir %>/{,*/}*.html', '<%= meta.distDir %>/app/Tpl/{,**/}*.html'],
            css: ['<%= meta.distDir %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= meta.distDir %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.staticDir %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= meta.distDir %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= meta.distDir %>/styles/main.css': ['<%= meta.staticDir %>/styles/{,*/}*.css']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= meta.staticDir %>',
                    src: '*.html',
                    dest: '<%= meta.distDir %>'
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= meta.staticDir %>/scripts/{,*/}*.js',
                '!<%= meta.staticDir %>/scripts/vendor/*',
                'test/spec/{,*/}*.js']
        },
        concat: {
            dist: {
                files: {
                    '<%= meta.distDir %>/scripts/main.js': ['<%= meta.tmpDir %>/scripts/vendor/require.js', '<%= meta.tmpDir %>/scripts/main.js'],
                    '<%= meta.distDir %>/scripts/sjm.js': ['<%= meta.tmpDir %>/scripts/vendor/require.js', '<%= meta.tmpDir %>/scripts/sjm.js']
                }
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%= meta.distDir %>/scripts/vendor/jquery.js': ['<%= meta.staticDir %>/components/jquery/jquery.js'],
                    '<%= meta.distDir %>/scripts/vendor/modernizr.js': ['<%= meta.staticDir %>/components/modernizr/modernizr.js'],
                    '<%= meta.distDir %>/scripts/vendor/bootstrap-ie.js': ['<%= meta.staticDir %>/scripts/vendor/bootstrap-ie.js'],
                    '<%= meta.tmpDir %>/scripts/vendor/require.js': ['<%= meta.staticDir %>/components/requirejs/require.js'],
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= meta.staticDir %>',
                    dest: '<%= meta.distDir %>',
                    src: [
                        '*.{ico,txt,yaml,php}', // html by htmlmin task
                    '.htaccess']
                }, {
                    expand: true,
                    dot: true,
                    dest: '<%= meta.distDir %>',
                    src: [
                        'app/**',
                        'thinkphp/core/ThinkPHP/**',
                        'thinkphp/core/thinkphp-extend/Extend/Engine/**']
                }]
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'compass',
        // 'useminPrepare',
        'requirejs',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'usemin']);

    grunt.registerTask('default', [
        'jshint',
        'build']);

};