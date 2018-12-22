/**
 * Reasons to create a namespace for your code
 * http://robdodson.me/javascript-design-patterns-singleton/
 */

function login() {  
    // do some login stuffs
}
function logout() {  
    // do some logout stuffs
}
function addToCart() {  
    // blah, blah blah...
}

// This is bad because...
// 1. Our functions are polluting the global space
// 2. They're in danger of being overwritten

// We fix by creating one global object which our
// code can branch off of.

var NAMESPACE = {};

NAMESPACE.login = function () {
    // do some login stuffs
};
NAMESPACE.logout = function () {
    // do some logout stuffs
};
NAMESPACE.addToCart = function () {
    // blah, blah blah...
};