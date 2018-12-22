/**
 * Global imports
 * For clearer, faster globals in modules, use imports
 * While devs may still need to review code, importing globals creates faster local variables
 * that are more clear in source.
 * This also avoids the compiler having to go up the entire scope chain for each global reference
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
} )(wartime); // Pass all globals to IIFEs using calling parens!