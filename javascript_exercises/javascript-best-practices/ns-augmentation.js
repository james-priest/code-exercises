/**
 * Augmentation
 * Provides extra properties for existing modules
 * In a separate file we'll keep a function which will add values or functionality to our existing Armory.
 */

// Step 1 - Add a parameter for the immediately invoked function wrapper (IIFE).
// We can create as many parameters as there are globals to import
var wartime = true;

var ARMORY = ( function( war ) { // war parameter is created
    var weaponList = [ ' * list of weapon Objects * ' ];
    var armorList = [ ' * list of armor Objects * ' ];

    var removeWeapon = function() { }; 
    var replaceWeapon = function() { }; 
    var removeArmor = function() { };
    var replaceArmor = function() { };

    return {
        makeWeaponRequest: function() { 
            if ( war ) { var civWeaponry = true; } // `war` param is used by `makeWeaponRequest()` public property 
        }, 
        makeArmorRequest: function() { }
    };
} )( wartime ); // Pass all globals to IIFEs using calling parens!

ARMORY = ( function( oldNS ) { // import oldNS
    var oilBarrels = 1000;
    var catapults = [ "Stoneslinger", "Rockrain", "The Giant's Arm" ];
    oldNS.assignCatapult = function( regiment ) {
        // hooks up a regiment with a catapult and oil barrels!  
    };
    return oldNS;
} )( ARMORY );

// We add some new private values and public functionality and then return the modified module.
// Once we've added our new private values and new public functionality on the existing object
// we then return the modified module with an extra private property as well as the new closures 
// ( oilBarrels & catapults ).

// BEWARE: Previous private data WILL NOT be accessible to the new properties
// Augmented props will have access to new private state, but not to the previous module's closed data.
// Any new properties will have NO access to the private data from the earlier closure.
// The earlier public properties however will retain the reference

// BEST PRACTICE: Group file contents around needed data