(function ($) {
    $(document).ready(function () {

        $body = $('body');
        $mobileNavigation = $('#mobileNavigation');
        $hamburgerMenu = $('.hamburger');
        
        let isMenuAlreadyChangedStyle = false;

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
        
        $('.hamburger').on('click',function() {
          animateMobileNavigation(this);
        });

        $(document).on('click', '#hamburger', function() {
            animateMobileNavigation();
            $hamburgerMenu.removeClass('is-active');
        });

        $(window).scroll(function(){
            setElementFixed('nav', 576 ,768 , {position : 'absolute', background: '#2e40a0'});
        });

//----------------------------------------------------------

        function setElementFixed(element, offset, resolutionTobeFixed, styles ={}){
            if($(window).width() <= resolutionTobeFixed){
                if($(window).scrollTop() >= offset){
                    $(`${element}`).css({
                        ...styles,
                        position : 'fixed',
                        zIndex: 9999,                    
                    });                
                }
                else{
                    $(`${element}`).css({...styles,background : 'none'});
                }
            }
        }

        function animateMobileNavigation(selector){
            $(selector).toggleClass('is-active');
            
            const prependHTML = 
            `<nav class="mobile-header" style="position: absolute;top: 0;left: 0;right: 0;">
            <div class="container">
                <div class="brand-container">
                    <div class="brand"></div>
                    <div class="brand-name-container">
                        <div class="brand-name">
                            <h5>Pawndation</h5>
                        </div>
                        <small>Animal Shelter</small>
                    </div>
                </div>  
                <button id="hamburger" class="hamburger hamburger--spin is-active" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
    
                </div>      
            </nav>`;

            $mobileNavigation.show();
            $body.css('overflow', 'hidden');
            $mobileWidth = 576;

            if($(selector).hasClass('is-active')){
                if($( window ).width() <= $mobileWidth){
                    const width = $(window).width();
                
                    $mobileNavigation.css({
                        'width' : width,
                        'transform' : `translateX(${width}px)`,
                        'padding-top' : '100px'
                    });
                    
                    $mobileNavigation.prepend(prependHTML);                
                    $body.animate({
                        transform: `translateX(-${width})`,
                    });

                
                }else{
                    const isMobileNavigationHasHeader = $mobileNavigation.find('nav').hasClass('mobile-header');

                    $mobileNavigation.css({
                        'padding-top' : '25px'
                    });
                    if(isMobileNavigationHasHeader){                        
                        $mobileNavigation = $('.mobile-header').detach();
                    }                    
                    $body.animate({
                        transform: 'translateX(-250px)',                    
                    });   
                }             
                
            }else{   
                $body.css('overflow', 'auto');                
                $body.animate({
                        transform: 'translateX(0)'
                },400);

                setTimeout(function(){
                    $mobileNavigation.hide();                    
                },500);
            }
        }
    });
})(jQuery);
