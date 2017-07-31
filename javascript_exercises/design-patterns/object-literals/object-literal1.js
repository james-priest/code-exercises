/**
 * An object literal Singleton taken from
 * http://robdodson.me/javascript-design-patterns-singleton/
 */

var user = {
    firstName: "John",
    lastName: "Doe",
    sayName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(user);

// If you've ever written an object literal then you've created a Singleton.
// The most famous Singleton is: $.
// To put it another way, ever notice how you can use jQuery anywhere in your // app after you've included it on the page...? Boom! Singleton!

// Usage
var someGuy = user;

console.log(someGuy.sayName());