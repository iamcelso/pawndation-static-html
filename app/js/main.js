(function ($) {
    $(document).ready(function () {

        $body = $('body');
        $hamburgerMenu = $('.hamburger');
        $navigation = $('nav');
        $mobileNavigation = $('.mobile-navigation');
        $navigationHeight = $navigation.height();

        const baseUrl =  window.location.origin;

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

        $('.custom-pawn.image-slider').owlCarousel({
            items: 3,
            autoplay: false,
            loop: true,
            nav: true,
            dots: false,
            center: true,
            lazyLoad:true,
            mouseDrag: false,
            responsive:{
                0:{
                    items:1,
                    mouseDrag: true
                },
                768:{
                    items: 3,
                    mouseDrag: false
                }
            }
        });

        $(window).on('resize',function (){          
            $navigationHeight = $navigation.height();

            $('nav').css('position', 'absolute');
            $mobileNavigation.css('top', $navigationHeight);
            
            $('#builtOurKennelTabs').removeChildren({
                 0:{
                    display: 3
                 },
                 359:{
                    display: 4
                 },
                 768: {
                     display: 8
                 }
            });

        });
        
        $('.hamburger').on('click',function() {
          animateMobileNavigation(this);
        });

        $(document).on('click', '#hamburger', function() {
            animateMobileNavigation();
            $hamburgerMenu.removeClass('is-active');
        });

        $(window).scroll(function(){
            $('nav').setElementFixed({
                offset: 50,
                resolutionTobeFixed: 768,
                style: {position : 'absolute', background: '#2e40a0'}
            })

            $('#countingNumberContainer').animteCountingNumbers();
        });

        $('.brand-container').click(function(){
            $(location).attr('href', baseUrl);
        });

        $('.btn.pawn.adopt').click(function(){
           $(location).attr('href',`${baseUrl}${$(this).data('link')}`);
        });
        
    });
})(jQuery);
