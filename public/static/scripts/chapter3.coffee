#global define 
define ['jquery', 'bootstrap'], ($)->
    $('h6').css('font-size', '22px')
    $('#hide-sidebar').click ->
        $('#sidebar').toggle()

