/**
 * Namespace Patterns
 * Object literal notation
 * from Learning JavaScript Design Patterns - Addy Osmani
 *https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing
 */

// Object literal notation contains a collection of key:value pairs
// We can define and organize our code in an easily readable structure.

var myApplication = {
    // As we've seen, we can easily define functionality for
    // this object literal..
    getInfo: function () {
        //...
    },

    // but we can also populate it to support
    // further object namespaces containing anything
    // anything we wish:
    models: {},
    views: {
        pages: {}
    },
    collections: {}
};

// We can also add properties directly to the namespace after the fact.

myApplication.foo = function () {
    return "bar";
};

myApplication.utils = {
    toString: function () {
        //...
    },
    export: function () {
        //...
    }
};