(function ($) {
    $(document).ready(function () {

        $body = $('body');
        $mobileNavigation = $('#mobileNavigation');
        $hamburgerMenu = $('.hamburger');

        $('.featured-items').owlCarousel({
            items: 3,
            autoplay: false,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            center: true,
            lazyLoad:true,
            mouseDrag: true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2,
                    center: false,
                },
                992:{
                    items: 3
                }
                
            }
        });

        $(window).on('resize',function (){
            $body.animate({
                transform: 'translateX(0)'
            });
            
            $mobileNavigation.hide();
            $hamburgerMenu.removeClass('is-active');
        });
        
        $('.hamburger').click(function(){
           $(this).toggleClass('is-active');
           $mobileNavigation.show();

            if($(this).hasClass('is-active')){

                $body.animate({
                    transform: 'translateX(-250px)'
                });
                $mobileNavigation.animate({
                    transform: 'translateX(250px)'
                });

            }else{
                
                $body.animate({
                    transform: 'translateX(0)'
                });
                $mobileNavigation.animate({
                    transform: 'translateX(250px)'
                });
                }
        });
    });
})(jQuery);
