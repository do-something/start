define ['jquery'], ($)->
    $(window).on 'beforeunload', ->
        'You want to leave?'

