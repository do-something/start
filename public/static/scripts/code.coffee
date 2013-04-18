require ['jquery'], ($)->
    $(console.log('Good!')) if window.console
    $('a:contains("#")').on 'click', ->
        alert 'a:contains("#")'
    $('a[href="#"]').on 'click', ->
        alert 'a[href="#"]'