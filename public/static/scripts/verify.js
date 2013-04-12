(function() {

  define(['jquery'], function($) {
    return $('#verifyImg').click(function() {
      var time;
      time = new Date().getTime();
      return $(this).attr('src', "/index/verify/" + time);
    });
  });

}).call(this);
