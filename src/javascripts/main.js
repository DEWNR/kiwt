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

    $('.menu-toggle').on('touchstart click', function(event) {
        $('.site-header__mobilenavigation').toggleClass('site-header__mobilenavigation--active');

        event.preventDefault();
    })


    // split article column ground into two
    $('.article-cards--columns').columnize({
        columns: 2,
        lastNeverTallest: true,
        doneFunc: function(){
            $('.last.column .article-card').last().height($('.last.column .article-card').last().height() + ($('.first.column').height() - $('.last.column').height()));
        }
    });


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

    /*global $*/

    // a temp value to cache *what* we're about to show
    var target = null;

    // collect all the tabs
    var tabs = $('.tablist__tab').on('click', function () {
      console.log('click')
      target = $(this.hash).removeAttr('id');
      if (location.hash === this.hash) {
        setTimeout(update);
      }
    }).attr('tabindex', '0');

    // get an array of the panel ids (from the anchor hash)
    var targets = tabs.map(function () {
      return this.hash;
    }).get();

    // use those ids to get a jQuery collection of panels
    var panels = $(targets.join(',')).each(function () {
      // keep a copy of what the original el.id was
      $(this).data('old-id', this.id);
    });

    function update() {
      console.log('update')
      if (target) {
        target.attr('id', target.data('old-id'));
        target = null;
      }

      var hash = window.location.hash;
      if (targets.indexOf(hash) !== -1) {
        return show(hash);
      }

      // NOTE: this was added after the article was written
      // to fix going "back" on the browser nav to an empty state
      if (!hash) {
        show();
      }
    }

    function show(id) {
      // if no value was given, let's take the first panel
      if (!id) {
        id = targets[0];
      }
      // remove the selected class from the tabs,
      // and add it back to the one the user selected
      tabs.removeClass('selected').attr('aria-selected', 'false').filter(function () {
        return (this.hash === id);
      }).addClass('selected').attr('aria-selected', 'true');

      // now hide all the panels, then filter to
      // the one we're interested in, and show it
      panels.hide().attr('aria-hidden', 'true').filter(id).show().attr('aria-hidden', 'false');
    }

    window.addEventListener('hashchange', update);

    // initialise
    if (targets.indexOf(window.location.hash) !== -1) {
      update();
    } else {
      show();
    }

});
