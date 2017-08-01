/**
 * Singleton Pattern
 * from Learning JavaScript Design Patterns - Addy Osmani
 *https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */

// With JavaScript, singletons serve as a namespace provider
// which isolate implementation code from the global namespace so-as to provide // a single point of access for functions.

var mySingleton2 = (function () {
    // Instance stores a reference to the Singleton
    var instance;
    
    function init() {
        // Singleton

        //Private methods and variables
        function privateMethod() {
            console.log("I am private");
        }
        var privateVariable = "I'm also private";
        var privateRandomNumber = Math.random();
        return {
            // Public methods and variables
            publicMethod: function () {
                console.log("The public can see me!");
            },
            publicProperty: "I'm also public",
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    }

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();   // function is executed and object returned during execution phase

var myBadSingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        // Singleton

        var privateRandomNumber = Math.random();
        return {
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    }

    return {
        // Always create a new Singleton instance
        getInstance: function () {
            instance = init();
            return instance;
        }
    };
})();

// Usage
var singleA = mySingleton2.getInstance();
var singleB = mySingleton2.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); //true

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber()); //false

