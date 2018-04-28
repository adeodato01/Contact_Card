$(document).ready(function(){

    $("#formInfo").submit(function(){

        var first2 = ($("#first input").val());
        var last2 = ($("#last input").val());
        var desc2 = ($("textarea").val());

        $("#formInfo").find("input:text, textarea").val("");
        
        $(".cards").append(
            "<section class='card'>"+
                "<h2 class='idCard'>"+first2+" "+last2+"</h2>"+
                "<p class='idCard'>Click for description!</p>"+
                "<p class='hidden'>"+desc2+"</p>"+
            "</section>");

        console.log("what");

        return false;        
    })

    $(document).on('click', '.card', function(){
        $('.idCard',this).toggle();
        $('.hidden',this).toggle();
    })
})