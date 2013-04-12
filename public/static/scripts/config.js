require.config({
    paths: {
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        bootstrapIe: 'vendor/bootstrap-ie'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery.scroll':{
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        },
        bootstrap: {
            deps: ['jquery']
        },
        bootstrapIe: {
            deps: ['jquery'],
            exprots: 'jquery'
        }
    }
});

