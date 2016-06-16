$(function(){
    $("#back").submit(function(){
        event.preventDefault();
    });

    $("#submit").click(function(){
        var data = {
            "src" : $("#input").val()
        };
        $.ajax({
            method: "POST",
            url: "/captcha",
            data: data
        })
            .success(function(result){
                $("h1").html(result.answ);
            })
            .fail(function(result){
                $("h1").html(result.answ);
            });
    });

    /*$("img").on('click', function () {
        $("img").hide("slow").attr("src", "/captcha.png").show("slow");
    })*/

    $('img').on('click',function(){
        //$(this)[0].src = '/captchasrc/?num='+Math.random()*9000 + 1000;
        $(this).hide().attr('src', '/captchasrc/?num='+Math.random()*9000 + 1000).show("slow");
    })

});