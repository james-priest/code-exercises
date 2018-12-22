/**
 * Singleton Pattern
 * from Learning JavaScript Design Patterns - Addy Osmani
 *https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */
// Singleton can take on many (10 or more) different forms.
// In its simplest form, it can be an object literal grouped together with
// its related methods and properties: 

var mySingleton1 = {
    property1: "something",
    property2: "something else",

    method1: function() {
        console.log("Hi");
    }
};

var mySingA = mySingleton1;

// an object literal by itself does not prevent us from overwriting the
// global variable... we are even able to re-declare the variable without
// JavaScript throwing an error or halting execution.

mySingleton1 = {
    prop1: "something changed",
};

var mySingB = mySingleton1;

console.log("mySingA:", mySingA);
console.log("mySingB:", mySingB);
console.log("Immutable?", mySingA === mySingB); // false