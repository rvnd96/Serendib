$(document).ready(function() {
    var elements = $('.animate-on-scroll');
    
    $(window).scroll(function() {
        elements.each(function() {
            var element = $(this);
            if (isElementInViewport(element[0])) {
                element.addClass('animated');
            } else {
                element.removeClass('animated');
            }
        });
    });
});

function isElementInViewport(element) {
    try {
        var rect = element.getBoundingClientRect();
    } catch (error) {
        console.error("Error getting boundingClientRect:", error);
    }
    var viewHeight = $(window).height();
    return !(rect.bottom < 0 || rect.top > viewHeight);
}



