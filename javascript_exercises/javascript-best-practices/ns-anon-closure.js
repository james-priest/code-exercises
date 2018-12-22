/**
 * Anonymous Closures - Making data & methods private using the Module Pattern 
 * So far we've seen modules that only have public properties.. 
 * what if we wanted some stuff to be accessible only to the module?
 *
 * First decide which properties should be public and which should be private
 * Then... have public methods signal private methods to update/modify private data
 */

var ARMORY = {
    // should be private - module's internal data
    weaponList: [ ' * list of weapon Objects * ' ], // these are modified only by internal methods
    armorList: [ ' * list of armor Objects * ' ],
    
    // should be public - external code can make requests
    makeWeaponRequest: function() { }, // these access methods below
    makeArmorRequest: function() { },
    
    // should be private - only module should access these
    removeWeapon: function() { }, // these access data above
    replaceWeapon: function() { },
    removeArmor: function() { },
    replaceArmor: function() { }
};

// Step 1 - Wrap entire set of properties in an IIFE
var ARMORY = ( function() { 
    // props go here...
} )(); // <--- these last parens indicate the Function Expression should be immediately executed, therefore, an IIFE

// Step 2 - Make desired private props into local executable code
var ARMORY = ( function() {
    var weaponList = [ ' * list of weapon Objects * ' ]; // these become local vars for IIFE's scope,
    var armorList = [ ' * list of armor Objects * ' ]; // and therefore, are private
    
    makeWeaponRequest: function() { },
    makeArmorRequest: function() { },

    var removeWeapon = function() { }; // these become local vars which now belong to the IIFE's scope
    var replaceWeapon = function() { }; // instead of the namespace, and are, therefore, private
    var removeArmor = function() { };
    var replaceArmor = function() { };
} )();

// Step 3 - Pull all private values and methods to the top of the function (for easy reference & good code organization)
var ARMORY = ( function() {
    var weaponList = [ ' * list of weapon Objects * ' ]; // these become local vars for IIFE's scope,
    var armorList = [ ' * list of armor Objects * ' ]; // and therefore, are private

    var removeWeapon = function() { }; // these become local vars which now belong to the IIFE's scope
    var replaceWeapon = function() { }; // instead of the namespace, and are, therefore, private
    var removeArmor = function() { };
    var replaceArmor = function() { };

    makeWeaponRequest: function() { },
    makeArmorRequest: function() { },  
} )();

// Step 4 - Here's the money: To make some properties public, return an object
// Add the public properties to their own object which, when returned, becomes the ARMORY namespace
var ARMORY = ( function() {
    var weaponList = [ ' * list of weapon Objects * ' ]; // these become local vars for IIFE's scope,
    var armorList = [ ' * list of armor Objects * ' ]; // and therefore, are private

    var removeWeapon = function() { }; // these become local vars which now belong to the IIFE's scope
    var replaceWeapon = function() { }; // instead of the namespace, and are, therefore, private
    var removeArmor = function() { };
    var replaceArmor = function() { };

    return {
        makeWeaponRequest: function() { }, // because the FE is immediately called, the returned object
        makeArmorRequest: function() { } // will be handed immediately to the ARMORY variable and become a namespace 
    };
} )();

/**
 * Closure now produces our desired private methods and values
 * Everything with a var is "bound down" within the scope of the returned namespace object.
 *
 * Notice that none of our function's local variables are ever properties with the returned
 * namespace object..
 *
 * ..but they are there nonetheless, visible to, and able to be referenced by, ONLY the members
 * of the local namespace scope!
 */

var mySword = ARMORY.makeWeaponRequest( "Excalibur" );
/**
 * makeWeaponRequest() calls an invisible removeWeapon() which, if some conditions are met,
 * deletes and retrieves an object from an invisible weaponList.
 * weaponList returns that object to the removeWeapon() function, which then returns the object
 * for use to the scope of WeaponRequest()
 */

/**
 * In short...
 * Private properties are created in the local scope of the function expression.
 * Public properties are built within the object which is then returned to become the namespace.
 * Access to private data is thus possible only because of closure within the larger module
 */