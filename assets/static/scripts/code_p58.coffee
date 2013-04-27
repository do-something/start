define ['jquery'], ->
    if window.console
        console.log('be from code_p58.js')
    $('button#clone').on 'click', ->
        $('.clone').append $(this).clone()

