define ['jquery'], ($)->
    $('.product-image img').on 
        mouseenter : ->
            $('.info').after '<p class="tool-tip">Tool tip: ' + $(this).attr('title') + '</p>',
        mouseleave : ->
            $('.tool-tip').remove()

    $('.add-to-cart').on
        mousedown: ->
            $(this).css 'border', '3px solid red',
        mouseup: ->
            $(this).css 'border', '1px solid #A6A899'