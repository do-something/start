(function() {

  define(['jquery'], function() {
    if (window.console) {
      console.log('be from code_p58.js');
    }
    return $('button#clone').on('click', function() {
      return $('.clone').append($(this).clone());
    });
  });

}).call(this);
