(function ($) {
    $(document).ready(function () {

        $body = $('body');
        $hamburgerMenu = $('.hamburger');
        $navigation = $('nav');
        $mobileNavigation = $('.mobile-navigation');
        $navigationHeight = $navigation.height();
        
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
            $hamburgerMenu.removeClass('is-active');
            $navigationHeight = $navigation.height();

            $('nav').css('position', 'absolute');
            $mobileNavigation.css('top', $navigationHeight);
        });
        
        $('.hamburger').on('click',function() {
          animateMobileNavigation(this);
        });

        $(document).on('click', '#hamburger', function() {
            animateMobileNavigation();
            $hamburgerMenu.removeClass('is-active');
        });

        $(window).scroll(function(){
            setElementFixed('nav', 50 ,768 , {position : 'absolute', background: '#2e40a0'});
        });

//----------------------------------------------------------

        function setElementFixed(element, offset, resolutionTobeFixed, styles ={}){
            if($(window).width() <= resolutionTobeFixed){
                if($(window).scrollTop() >= offset){
                    
                    if($(element).css('position') != 'fixed'){                        
                        $(element).css({
                            ...styles,
                            position : 'fixed',
                            zIndex: 9999,
                            transform: 'translateY(-50px)',
                            '-webkit-transform': 'translateY(-50px)'                  
                        });
                        
                        $(element).animate({
                            opacity: 1,
                            transform: 'translateY(0)',
                            '-webkit-transform': 'translateY(0)'
                        })
                    }
                }
                else{                    
                    if($(element).css('position') != styles.position){                      
                        $(element).css({
                            ...styles,
                            background : 'none',
                            opacity: 1
                        });
                    }
                }
            }
        }

        function animateMobileNavigation(selector){
            $(selector).toggleClass('is-active');            
            const isElementActive = $(selector).hasClass('is-active');
            
            if(isElementActive){

                $mobileNavigation.css({
                    opacity: 0,
                    display: 'initial',
                    top: $navigationHeight,
                    transform: 'translateY(50px)',
                    '-webkit-transform': 'translateY(50px)'
                });

                $mobileNavigation.animate({
                    opacity: 1,
                    transform: 'translateY(0)',
                    '-webkit-transform': 'translateY(0)'
                });
            }else{                
              $mobileNavigation.animate({
                opacity: 0,                
                transform: 'translateY(50px)',
                display: 'none',
              });

            }
            
        }
    });
})(jQuery);
