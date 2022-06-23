$(function () {
    $('.game_box1').click(function () {
        $('.main1').fadeIn();
        $('.main2').hide();
        $('.main3').hide();
        $('.main4').hide();
        $('.main5').hide();

    });

    $('.game_box2').click(function () {
        $('.main2').fadeIn();
        $('.main1').hide();
        $('.main3').hide();
        $('.main4').hide();
        $('.main5').hide();

    });

    $('.game_box3').click(function () {
        $('.main3').fadeIn();
        $('.main2').hide();
        $('.main1').hide();
        $('.main4').hide();
        $('.main5').hide();

    });

    $('.game_box4').click(function () {
        $('.main4').fadeIn();
        $('.main2').hide();
        $('.main3').hide();
        $('.main1').hide();
        $('.main5').hide();

    });

    $('.game_box5').click(function () {
        $('.main5').fadeIn();
        $('.main2').hide();
        $('.main3').hide();
        $('.main4').hide();
        $('.main1').hide();

    });

    $('.main_game_box').click(function () {

        $('.main_game_box').removeClass('click');
        $(this).addClass('click')
    });

});
