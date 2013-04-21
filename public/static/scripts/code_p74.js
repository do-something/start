(function() {

  define(['jquery'], function($) {
    $('.product-image img').on({
      mouseenter: function() {
        return $('.info').after('<p class="tool-tip">Tool tip: ' + $(this).attr('title') + '</p>');
      },
      mouseleave: function() {
        return $('.tool-tip').remove();
      }
    });
    return $('.add-to-cart').on({
      mousedown: function() {
        return $(this).css('border', '3px solid red');
      },
      mouseup: function() {
        return $(this).css('border', '1px solid #A6A899');
      }
    });
  });

}).call(this);
