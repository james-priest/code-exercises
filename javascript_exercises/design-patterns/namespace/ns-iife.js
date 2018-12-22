/**
 * Namespace object using Singleton Pattern
 * or combining Singleton and Namespace Patterns
 * Remember, a Singleton allows for one (and only one) instance of an
 * object to be created.
 */

var myApp = myApp || {};

// Here's an example of the use of an IIFE, an anonymous function 
// expression that has a set of parentheses at the end of it, which 
// indicates you want to execute the function.
// The anonymous function expression is wrapped in parentheses to tell
// the JavaScript interpreter that the function isn't only being defined;
// it is also being executed when the file is loaded.

// IIFE used to immediately create the myApp namespace
// in which Car and Truck are public but vehicleCount, vehicles, and
// repair are private.

(function() {
    this.myApp = this.myApp || {};  // Singleton Pattern
    var ns = this.myApp;            // assign ns as an alias

    var vehicleCount = 5;           // private
    var vehicles = [];              // private

    ns.Car = function () { };       // public
    ns.Truck = function () { };     // public
    
    var repair = {                  // private
        description: "changed spark plugs",
        cost: 100
    };
} ());

// 'var' keyword in the scope of the IIFE creates a private variable
// 'ns' sets variable as a property of myApp and makes it public
// Not using 'var' or 'ns' would be creating a variable in the global scope

// For clarity we might want to write private members with an underscore

(function() {
    this.myApp = this.myApp || {};  // Singleton Pattern
    var ns = this.myApp;            // assign ns as a shorthand

    var _vehicleCount = 5;          // private
    var _vehicles = [];             // private

    ns.Car = function () { };       // public
    ns.Truck = function () { };     // public
    
    var _repair = {                  // private
        description: "changed spark plugs",
        cost: 100
    };
} ());
