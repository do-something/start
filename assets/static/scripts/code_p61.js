(function() {

  define(['jquery'], function($) {
    return $(window).on('beforeunload', function() {
      return 'You want to leave?';
    });
  });

}).call(this);
