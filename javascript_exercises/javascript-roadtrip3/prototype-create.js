// require console log shorthand functions
const log = require( '../cl.js' );
// const util = require('util');

/**
 * Object.create(obj);
 * creates a new object with  the specified prototype object & properties
*/

var shoe = { size: 6, gender: "women", construction: "slipper" }; // object literal

var magicShoe = Object.create(shoe); // creates magicShoe with prototype & props of shoe

magicShoe.jewels = "ruby"; // add new properties
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;

log.cll("shoe", shoe); // outputs shoe props
log.cll("magicShoe", magicShoe); // outputs magicShoe props only
log.cll("Object.getPrototypeOf( magicShoes )", Object.getPrototypeOf(magicShoe)); // outputs shoe prototype props

// log.cl("");

log.cll("shoe.isPrototypeOf( magicShoe )", shoe.isPrototypeOf( magicShoe ));  // true
// log.cll("Object.prototype.isPrototypeOf( shoe )", Object.prototype.isPrototypeOf(shoe)); // true
// log.cll("Object.prototype.isPrototypeOf( magicShoe )", Object.prototype.isPrototypeOf(magicShoe)); // true
// log.cll("Object.isPrototypeOf( shoe )", Object.isPrototypeOf(shoe)); // false
log.cl("");
// log.cll("shoe instanceof Object", shoe instanceof Object); // true
// log.cll( "magicShoe instanceof Object", magicShoe instanceof Object ); // true


/**
 * Difference between isPrototypeOf and instanceof
 *
 * https://stackoverflow.com/questions/18343545/javascript-isprototypeof-vs-instanceof-usage
 * instanceof is used in cases where a constructor function was used to create the object.
 * if no constructor function exists then isPrototypeOf is used to check if an object (shoe)
 * exists in another object's (magicShoe) prototype chain. A prototype chain looks like this:
 * Object ---> shoe ---> magicShoe
 */
log.cll("shoe.isPrototypeOf( magicShoe )", shoe.isPrototypeOf( magicShoe ));  // true
log.cll("magicShoe instanceof shoe", magicShoe instanceof shoe); // TypeError - shoe is not callable

