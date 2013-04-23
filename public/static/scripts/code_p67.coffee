define ['jquery'], ($)->
    $('button').bind 'click', alertMe

alertMe = ->
    alert "hello world"