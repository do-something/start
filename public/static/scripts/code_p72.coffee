define ['jquery'], ($)->
    $('.toggle').on 'click', ->
        $('.report').toggle()
        $('.toggle').toggle()