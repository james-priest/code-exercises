/**
 * Testing JSLint, JSHint, & ESLint
 * Blog Post: https://mdcox.net/posts/static-checking-jslint-jshint-eslint.html
 */

// 'use strict'; // jslint says to use the function form

// good function 
function addTwo(first, second) {
    "use strict";
    return first + second;
}