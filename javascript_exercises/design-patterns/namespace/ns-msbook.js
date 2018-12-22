/**
 * Namespace Implementation
 * from Programming in HTML5 with JavaScript and CSS - Glen Johnson - pg.276
 */

// Without using the namespace pattern the following code pollutes the global
// namespace by creating five global entries 

var vehicleCount = 5;

var vehicles = new Array();

function Car() { }
function Truck() { }

var repair = {
    description: "changed spark plugs",
    cost: 100
};

// We fix this by creating a single object as my application's global
// namespace. It's created to contain the five previous items. 
// It is the only entry in the global namespace. It's both the name of the 
// application and the app's root namespace.

// BAD:
// risks overwriting myApp if already declared elsewhere
var myApp = {};

// GOOD:
// this creates new object or returns the existing one
var myApp = myApp || {};

myApp.vehicleCount = 5;

myApp.vehicles = new Array();

myApp.Car = function () { };
myApp.Truck = function () { };

myApp.repair = {
    description: "changed spark plugs",
    cost: 100
};
