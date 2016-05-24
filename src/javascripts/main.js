var sh = $('.site-header');
var height = screen.height / 2;

$(window).scroll(function() {
    // parallax();

    if($(this).scrollTop() > 51) {
        sh.addClass('is-fixed');
    } else {
        sh.removeClass('is-fixed');
    }
});


$(function() {

    $('.fancybox').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    $('.fancybox--video').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        type: 'iframe',
       'width': 16/9. * height,
       'height': height,
       'autoDimensions': false
    });

});
