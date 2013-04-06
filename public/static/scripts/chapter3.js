(function() {

  define(['jquery', 'bootstrap'], function($) {
    $('h6').css('font-size', '22px');
    return $('#hide-sidebar').click(function() {
      return $('#sidebar').toggle();
    });
  });

}).call(this);
