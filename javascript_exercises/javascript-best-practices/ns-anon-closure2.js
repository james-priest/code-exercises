/**
 * Take an object literal and create a CAVESOFCLARITY module
 * where treasureChests is made private through anonymous closure
 */

// Step 0 - Original object literal
var CAVESOFCLARITY = {
    stalactites: 4235,
    stalagmites: 3924,
    bats: 345,
    SECRET: {
        treasureChests: 3,
        openChest: function() {
            this.treasureChests--;
            alert( 'DA DADADA DAAAAAAA!' );
        }
    }
};

// Step 1 Convert CAVESOFCLARITY from an object to a Function Expression
// Inside the function, return an object that contains ALL of the original data
var CAVESOFCLARITY = function() {

    return {
        stalactites: 4235,
        stalagmites: 3924,
        bats: 345,
        SECRET: {
            treasureChests: 3,
            openChest: function() {
                this.treasureChests--;
                alert( 'DA DADADA DAAAAAAA!' );
            }
        }
    };
};

// Step 2 - In order for CAVESOFCLARITY to be initialized to the result of our closure,
// make it an immediately invoked closure
var CAVESOFCLARITY = ( function() {

    return {
        stalactites: 4235,
        stalagmites: 3924,
        bats: 345,
        SECRET: {
            treasureChests: 3,
            openChest: function() {
                this.treasureChests--;
                alert( 'DA DADADA DAAAAAAA!' );
            }
        }
    };
} )(); // this is done by wrapping with parens and adding parens at end to execute the function wrapper

// Step 3 - Make treasureChests property private by moving it above the return statement and
// turn it into a locally declared variable. Lastly, remove `this` so treasureChests is decremented properly
var CAVESOFCLARITY = ( function() {

    var treasureChests = 3;

    return {
        stalactites: 4235,
        stalagmites: 3924,
        bats: 345,
        SECRET: {
            openChest: function() {
                treasureChests--;
                alert( 'DA DADADA DAAAAAAA!' );
            }
        }
    };
} )();

// Step 4 - Make `bats` private
var CAVESOFCLARITY = ( function() {

    var treasureChests = 3;
    var bats: 345; // since this isn't accessed through public methods, it no longer holds any functional purpose 

    return {
        stalactites: 4235,
        stalagmites: 3924,
        SECRET: {
            openChest: function() {
                treasureChests--;
                alert( 'DA DADADA DAAAAAAA!' );
            }
        }
    };
} )();

// Step 5 - make a public method getBats() to make sure `bats` is referenceable
var CAVESOFCLARITY = ( function() {

    var treasureChests = 3;
    var bats: 345;

    return {
        stalactites: 4235,
        stalagmites: 3924,
        SECRET: {
            openChest: function() {
                treasureChests--;
                alert( 'DA DADADA DAAAAAAA!' );
            }
        },
        getBats: function() {
            return bats;
        }
    };
} )();

// What enable the CAVESOFCLARITY variable to immediately contain the object
// that serves as our module rather than a function is:
// The parentheses that immediately invoke the function!

// Private properties are created in the local scope of the function expression.
// Public properties are built within the object which is then returned
// to become the namespace.
// Access to private data is thus possible only because of closure within
// the larger module.