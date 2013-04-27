define ['jquery'], ($)->
    #重载验证码
    # fleshVerify = ->
        # docment.getElementById("verifyImg").src = "/index/verify/" + time
    $('#verifyImg').click -> 
        time = new Date().getTime()
        $(this).attr('src', "/index/verify/" + time)

