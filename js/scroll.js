$(function(){
    $(window).scroll(function(){
        var ws=$(this).scrollTop();
        var art_button=$('.art_button').offset().top;
        if(ws>art_button-900){
            $('.art_button').css('transform','scaleY(1)');
            $('.art_image').css('transform','scaleY(1)');
        }
       
        var icon1=$('header').offset().top;
        if(ws>icon1+500){
            $('.icon').css('transform','scaleY(1)');
        }

        var and=$('.android_box').offset().top;
        if(ws>and-850){
            $('.android_box').css('transform','scaleY(1)');
        }

        var art_img=$('.art_img').offset().top;
        if(ws>art_img-600){
            $('.art_img1').css('transform','scaleY(1)');
            $('.art_img2').css('transform','scaleY(1)');
            $('.art_img3').css('transform','scaleY(1)');
        }

        var stay=$('.news').offset().top;
        if(ws>stay+100){
            $('.stay').css('transform','scaleY(1)');
        }
    });
});