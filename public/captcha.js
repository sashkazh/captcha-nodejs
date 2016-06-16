$(function(){
    $("#back").submit(function(){
        event.preventDefault();
    })

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
    })
})