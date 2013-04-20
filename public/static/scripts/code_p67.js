(function() {
  var alertMe;

  define(['jquery'], function($) {
    return $('button').bind('click', alertMe);
  });

  alertMe = function() {
    return alert("hello world");
  };

}).call(this);
