$(document).ready(function() {
    var w = $(".art_button ul li").height();            
    $(".art_button").append("<span></span>");
    $(".art_button ul li").on("click", function() {
        var index = $(this).index(); 
        console.log(index);
        $(this).find("p").addClass("on");
        $(this).siblings().find("p").removeClass("on");
        $(".art_button span").stop().animate({
            top: index * w +80
        }, "fast", "swing");

    });
    $('.art_button ul li').eq(0).click(function(){
        $('.art_img_box2').css("background-image",'url(img/img4.jpg)')
        .css('transition','0.5s ease');
    });
    $('.art_button ul li').eq(1).click(function(){
        $('.art_img_box2').css("background-image",'url(img/img1.jpg)')
        .css('transition','0.5s ease');
    });
    $('.art_button ul li').eq(2).click(function(){
        $('.art_img_box2').css("background-image",'url(img/img5.jpeg)')
        .css('transition','0.5s ease');
    });
    $('.art_button ul li').eq(3).click(function(){
        $('.art_img_box2').css("background-image",'url(img/img6.jpg)')
        .css('transition','0.5s ease').css("background-position",'center');
    });

});