/**
 * Detect browser capabilities for use in CSS and scripts
 *
 * Must be concatenated and minified before use in a production environment.
 *
 * Consider inlining to prevent delays in page load.
 **/

/* Remove no-js class */

(function () {

    "use strict";

    var classedElement = document.documentElement;

    classedElement.className = classedElement.className.replace(/(?:^|\s)no-js(?!\S)/, '');

}());
