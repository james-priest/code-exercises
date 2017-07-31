/**
 * This app's global namespace - it gets rid of global namespace pollution by
 * creating a single global object to which all functions and variables are
 * assigned. We use the namespace pattern.
 * Object literal syntax is used to create an empty object which is assigned
 * to arrayMethodsApp. Everything else is added to arrayMethodsApp.
 * If this app has many js files we can ensure the namespace object is created
 * only once by using the Singleton pattern with js coalescence:
 * var myApp = myApp || {};
 * Additionally, we can make some members public and some private by using
 * the Singleton pattern along with an IIFE (Immediately Invoking Function
 * Expression) construct -
 *
 * (function() {
 *      this.myApp = this.myApp || {};  // singleton pattern
 *      var ns = this.myApp;            // 'ns' to save typing 'this.myApp'
 *
 *      var _methodCount = 5;           // private member
 *      var _hiddenArray = new Array(); // private member
 *
 *      ns.pubCount = 5;                // public member
 *      ns.pubFunc = function () {}     // public member
 * }());
 * 
 * See Programming in HTML5 with JavaScript and CSS - Glen Johnson - pg.277
 */
var arrayMethodsApp = arrayMethodsApp || {};