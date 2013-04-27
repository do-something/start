(function() {

  require(['jquery'], function($) {
    if (window.console) {
      $(console.log('Good!'));
    }
    $('a:contains("#")').on('click', function() {
      return alert('a:contains("#")');
    });
    return $('a[href="#"]').on('click', function() {
      return alert('a[href="#"]');
    });
  });

}).call(this);
