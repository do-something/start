require.config({
  urlArgs: 'rand=' + (new Date()).getTime(), // for development
  baseUrl: '/static/js',
  paths: {
    // Backbone
    'backbone': '../components/backbone/backbone-min',
    'backbone.collectionbinder': '../components/Backbone.ModelBinder/Backbone.CollectionBinder.min',
    'backbone.modelbinder': '../components/Backbone.ModelBinder/Backbone.ModelBinder.min',

    // jQuery
    'jquery': '../components/jquery/jquery',
    'jquery.center': '../libs/jquery.center/jquery.center',
    'jquery.masonry': '../components/jquery-masonry/jquery.masonry.min',
    'jquery.tubular': '../libs/jquery.tubular/js/jquery.tubular.1.0',
    'jquery-url': '../components/js-url/jquery/jquery-url',
    'bigtext': '../libs/bigtext/bigtext',
    'imagesloaded': '../components/imagesloaded/jquery.imagesloaded.min',
    'okvideo': '../components/okvideo/src/okvideo',
    'social-likes': '../components/social-likes/social-likes.min',

    // RequireJS
    'domReady': '../components/requirejs-domready/domReady',
    'text': '../components/requirejs-text/text',

    // Vanilla JavaScript
    'alertify': '../components/alertify/alertify',
    'moment': '../components/moment/min/moment.min',
    'mousetrap': '../components/mousetrap/mousetrap',
    'underscore': '../components/underscore/underscore-min'
  },
  shim: {
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'backbone.collectionbinder': ['backbone'],
    'backbone.modelbinder': ['backbone'],

    'jquery.center': ['jquery'],
    'jquery.masonry': ['jquery'],
    'jquery.tubular': ['jquery'],
    'jquery-url': ['jquery'],
    'bigtext': ['jquery'],
    'imagesloaded': ['jquery'],
    'okvideo': ['jquery'],
    'social-likes': ['jquery'],

    'alertify': {
      'exports': 'alertify'
    },
    'moment': {
      'exports': 'moment'
    },
    'mousetrap': {
      'exports': 'Mousetrap'
    },
    'underscore': {
      'exports': '_'
    }
  }
});
