/**
 * Object Literal
 *https://stackoverflow.com/questions/8219008/call-functions-from-function-inside-an-object-object-literal
 */

/**
 * NOTE: An object literal is only a *declaration*. It will not run the code
 * behind a function. For that you need to either explicitly call the function
 * or use an IIFE to Immediately Invoke the Function Expression.
 * Functions will not run unless called, and a property cannot be assigned the
 * result of a function unless that function is explicity called (executed)
 * through code as in the following:
 */

var runApp = {
    init: function () {
        this.run()
    },
    run: function () {
        console.log("It's running!");
    }
};

runApp.init();  // We call init() in order for the code to execute

// The other option is to use an IIFE - see global-instance-iife.js
