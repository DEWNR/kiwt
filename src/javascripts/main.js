var sh = $('.site-header');

$(window).scroll(function() {
    // parallax();

    if($(this).scrollTop() > 51) {
        sh.addClass('is-fixed');
    } else {
        sh.removeClass('is-fixed');
    }
});
