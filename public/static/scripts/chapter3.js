(function() {

  define(['jquery', 'bootstrap'], function($) {
    $('h6').css('font-size', '22px');
    $('#hide-sidebar').click(function() {
      return $('#sidebar').toggle();
    });
    $('#html').html('$("#html").html(<a href="#">a</a>)');
    return $('#text').text('$("#text").text(<a href="#">a</a>)');
  });

}).call(this);
