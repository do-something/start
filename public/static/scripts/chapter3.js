(function() {

  define(['jquery', 'bootstrap'], function($) {
    var a;
    $('h6').css('font-size', '22px');
    $('#hide-sidebar').click(function() {
      return $('#sidebar').toggle();
    });
    $('#html').html('$("#html").html(<a href="#">a</a>)');
    $('#text').text('$("#text").text(<a href="#">a</a>)');
    $('#class').click(function(e) {
      return $(this).toggleClass('icon-music');
    });
    return a = 22;
  });

}).call(this);
