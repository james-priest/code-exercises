/**
 * Namespace object using Singleton Pattern
 * or combining Singleton and Namespace Patterns
 * Remember, a Singleton allows for one (and only one) instance of an
 * object to be created.
 *
 * Taken from https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing
 */

// Option 1
var myApp = myApp || {};

// Option 2
if (!myApp) { myApp = {}; }

// Option 3 - useful only in a parameter/argument scenario
window.myApp || (window.myApp = {});

// Option 4 - jQuery plug-in
var myApplication = $.fn.myApplication = function () { };

// Option 5 - Long form (unnecessary)
var myApplication = myApplication === undefined ? {} : myApplication;