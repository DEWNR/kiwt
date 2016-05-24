var sh = $('.site-header');

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
        width: '70%',
        height: '70%',
    });

});
