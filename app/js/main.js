(function ($) {
    $(document).ready(function () {

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


        $('.hamburger').click(function(){
            $(this).toggleClass('is-active');

            if($(this).hasClass('is-active')){
                $('body').animate({});
            }
        });

    });
})(jQuery);
