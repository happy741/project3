
                $(function() {
                $('#input1').click(function(){
                    $(this).css('outline','none');
                });

                $('.overlay_menu>li').click(function(){
                    $('.overlay_sub').stop().slideUp();
                    $(this).find('.overlay_sub').stop().slideToggle();
                   
                });
                
            });

            function openNav() {
                document.getElementById("myNav").style.width = "230%";
                document.getElementById("myNav").style.height = "130%";
                
                }
                function closeNav() {
                document.getElementById("myNav").style.width = "0%";
                document.getElementById("myNav").style.height = "0%";
                document.getElementsByClassName("close_2").style.display = "none";
              
                }