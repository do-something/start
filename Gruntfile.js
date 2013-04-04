module.exports = function(grunt) {
    'use strict';

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: "<%= grunt.file.readJSON('package.json') %>",
        meta: {
            publicDir: 'public',
            appDir:'app',
            thinkphpDir:'thinkphp',
            distDir: '<%= meta.publicDir %>/dist',
            staticDir: '<%= meta.publicDir %>/static',
            tmpDir: '<%= meta.publicDir %>/.tmp',
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %>'
        },
        watch:{

        },
        clean:{
            dist: ["<%= meta.distDir %>", "<%= meta.tmpDir %>"],
        },
        coffee:{

        },
        compass:{

        },
        concat:{

        },
        requirejs:{

        },
        usemin:{
            html: ['<%= meta.distDir %>/{,*/}*.html', '<%= meta.distDir %>/thinkphp/Tpl/{,**/}*.html'],
            css: ['<%= meta.distDir %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= meta.distDir %>']
            }
        },
        imagemin:{

        },
        cssmin:{

        },
        htmlmin:{

        },
        copy:{
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= meta.staticDir %>',
                    dest: '<%= meta.distDir %>',
                    src: [
                        '*.{ico,txt,yaml,php,html}',
                        '.htaccess',
                        '<%= meta.appDir %>/Tpl/{,**/}*.{php,tpl,html}',
                        '<%= meta.thinkphpDir %>/core/ThinkPHP/**',
                        '<%= meta.thinkphpDir %>/core/thinkphp/thinkphp-extend/Extend/Engine/**'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('default', [
        'copy'
    ]);
};
