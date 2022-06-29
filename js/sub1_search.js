$(function(){
$("#myinput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".search_filter").filter(function () {
      $(this).parents('.game_box_box').toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    
  });
  $("#myinput").click(function () {
    $(this).css('outline', 'none');
  });

  $('.search_icon').click(function () {
    $('#search').stop().animate({width:'100%' });
    
    $('#search input').fadeIn();
    $(this).stop().animate({transform:translateX('1000px') });
  });

  
  $('#filters>ul>li').click(function () {

$('#filters>ul>li').removeClass('clicked');
$(this).addClass('clicked')
});


    });