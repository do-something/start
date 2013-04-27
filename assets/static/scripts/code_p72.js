(function() {

  define(['jquery'], function($) {
    return $('.toggle').on('click', function() {
      $('.report').toggle();
      return $('.toggle').toggle();
    });
  });

}).call(this);
