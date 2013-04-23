#global define 
define ['jquery', 'bootstrap'], ($)->
    $('h6').css('font-size', '22px')
    $('#hide-sidebar').click ->
        $('#sidebar').toggle()
    $('#html').html('$("#html").html(<a href="#">a</a>)')
    $('#text').text('$("#text").text(<a href="#">a</a>)')
    $('#class').click (e)->
        $(this).toggleClass('icon-music')
    a = 22