define ['jquery'], ($)->
    $(window).on 'load', ->
        $('img').each ->
            if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)
                $(this).unbind('error').attr('src', '/assets/images/us.png')


