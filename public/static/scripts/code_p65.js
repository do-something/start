(function() {

  define(['jquery'], function($) {
    return $(window).on('load', function() {
      return $('img').each(function() {
        if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
          return $(this).unbind('error').attr('src', '/assets/images/us.png');
        }
      });
    });
  });

}).call(this);
