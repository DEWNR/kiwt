/* = Browser compatibility warnings = */

(function () {

    "use strict";

    var isMajor, isMinor, majorHTML, minorHTML, target = "body";


    // Check for major issues with browser compatibility

    isMajor = !Modernizr.backgroundsize || !Modernizr.inlinesvg || !Modernizr.generatedcontent || !Modernizr.boxsizing;


    // Check for minor issues with browser compatiblity

    isMinor = !Modernizr.rgba || !Modernizr.opacity || !Modernizr.cssgradients || !Modernizr.fontface || !Modernizr.csstransitions;


    // Set the corresponding warning messages

    majorHTML = '<div class="box  box--small  color-scheme--danger"><div class="wrapper"><strong class="color-scheme__highlight">Warning!</strong> The browser you&rsquo;re using is not able display this site correctly. <a href="http://whatbrowser.org/">Upgrade your browser</a> for a better experience.</div></div>';

    minorHTML = '<div class="box  box--small  color-scheme--warning"><div class="wrapper"><strong class="color-scheme__highlight">Warning!</strong> The browser you&rsquo;re using does not support all the features of this site. <a href="http://whatbrowser.org/">Upgrade your browser</a> for a better experience.</div></div>';


    // Add the warning to the DOM, if required

    if (isMajor) {

        $(target).prepend(majorHTML);

    } else if (isMinor) {

        $(target).prepend(minorHTML);

    }

}());


var sh = $('.site-header');
var height = screen.height / 2;

$(window).scroll(function() {
    if($(this).scrollTop() > 51) {
        sh.addClass('is-fixed');
    } else {
        sh.removeClass('is-fixed');
    }
});


$(function() {

    $('.tabpanel').each(function(index){
        var dayNumber = index + 1;

        $(this).attr('id', 'day-' + dayNumber).prepend( '<div class="tabpanel__accordion-title">Day ' + dayNumber + '</div>' );

    });

    $('.tabpanel__accordion-title').on('click', function(event){
        $(this).toggleClass('tabpanel__accordion-title--opened').siblings('.tabpanel__accordion-content').toggleClass('tabpanel__accordion-content--opened');
    });


    $('.menu-toggle').on('touchstart click', function(event){
        $('.site-header__mobilenavigation').toggleClass('site-header__mobilenavigation--active');

        event.preventDefault();
    })


    // split article column ground into two
    $('.article-cards--columns').columnize({
        columns: 2,
        lastNeverTallest: false,
        doneFunc: function(){
            $('.first.column .article-card').last().height($('.first.column .article-card').last().height() + ($('.last.column').height() - $('.first.column').height()));
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
    var target = null;

    // collect all the tabs
    var tabs = $('.tablist__tab').on('click', function () {

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
