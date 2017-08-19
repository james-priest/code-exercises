
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
// To put it another way, ever notice how you can use jQuery anywhere in your
// app after you've included it on the page...? Boom! Singleton!

// Usage
var someGuy = user;
someGuy.sayName(); /* ? */

var a = 21;
var b = 3;

var product = a * b; /* ? */

var arr = [3,6,9,12];

for (var i = 0, len = arr.length; i < len; i++) {
    arr[i] * 22; /*?*/
}