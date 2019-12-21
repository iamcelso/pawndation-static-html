let isCountingNumberAlreadyShow = false;


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

function animteCountingNumbers(selector){
    if($(document).find(selector).length > 0 ){
        if($(selector).isInViewport() && !isCountingNumberAlreadyShow){
            isCountingNumberAlreadyShow = true;
            $(selector).children().each(function(){
                const element = $(this).find('[data-count]')
                let count  = element.text();                   
                count = parseInt(count);

                animateValue(element,1 , count, 2000);
            });
        }
    }
}

$.fn.isInViewport = function() {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
  
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

$.fn.removeChildren = function(...value){
    const settings = value[0];
    const elements  = $(this).children();

    objectKeys = Object.keys(settings);
    
    for(i = 0; i < objectKeys.length; i++){
        if(+objectKeys[i] <= $(window).width()){
            const itemsToShow = elements.filter(`:lt(${settings[objectKeys[i]].display})`);

            itemsToShow.show();
            elements.not(itemsToShow).hide();
        }
    }
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(function() {
        current += increment;
        element.text(current)

        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}