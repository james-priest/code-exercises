// require console log shorthand functions
const log = require( '../cl.js' );
// const util = require('util');

/**
 * Object.create(obj);
 * creates a new object with  the specified prototype object & properties
*/

var shoe = { size: 6, gender: "women", construction: "slipper" }; // object literal

var magicShoe = Object.create(shoe); // creates magicShoe with prototype & props of shoe

magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;

log.cll("magicShoe", magicShoe);
log.cll("Object.getPrototypeOf( magicShoes )", Object.getPrototypeOf(magicShoe));

log.cl("");

log.cll("shoe.isPrototypeOf( magicShoe )", shoe.isPrototypeOf( magicShoe ));  // true
log.cll("Object.prototype.isPrototypeOf( shoe )", Object.prototype.isPrototypeOf(shoe)); //true
log.cll("Object.prototype.isPrototypeOf( magicShoe )", Object.prototype.isPrototypeOf(magicShoe)); // true
log.cll("Object.isPrototypeOf( shoe )", Object.isPrototypeOf(shoe)); //false
log.cl("");
log.cll("shoe instanceof Object", shoe instanceof Object); //true
log.cll("magicShoe instanceof Object", magicShoe instanceof Object); //true

// log.cll("magicShoe instanceof shoe", magicShoe instanceof shoe);

