(function ($) {
    $(document).ready(function () {

        $body = $('body');
        $hamburgerMenu = $('.hamburger');
        $navigation = $('nav');
        $navigationBorderColor = $('nav').css('border-bottom-color');
        $navigationHeight = $('nav').height();
        
        const cloneMobileNavigation = $('.mobile-navigation').clone();        

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
            $('nav').css('position', 'absolute');
            $('.mobile-navigation').remove();
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
                $navigation.append(cloneMobileNavigation);        
                $navigation.css('border-color', 'transparent');

                $('.mobile-navigation').css({
                    opacity: 0,
                    transform: 'translateY(50px)',
                    '-webkit-transform': 'translateY(50px)'
                });

                $('.mobile-navigation').animate({
                    opacity: 1,
                    transform: 'translateY(0)',
                    '-webkit-transform': 'translateY(0)'
                });
            }else{                
                //------------------------
                $navigation.css('height', 'auto');

                $('.mobile-navigation').css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $('.mobile-navigation').animate({
                    opacity: 0,
                    transform: 'translateY(50px)',
                    '-webkit-transform': 'translateY(50px)'
                });

                $navigation.animate({
                   height: $navigationHeight
                },500);
            }
            
        }
    });
})(jQuery);
