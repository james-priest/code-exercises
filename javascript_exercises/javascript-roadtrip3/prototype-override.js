// require console log shorthand functions
const log = require( '../cl.js' );

var cities = [ [ "Kansas City", 464310 ], [ "Topeka", 127939 ], [ "Lenexa", 49398 ] ];
var Tornado = function( category, affectedAreas, windGust ) {
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};

var twister = new Tornado( "F5", cities, 220 );
// valueOf() return the object
log.cll( "twister.valueOf()", twister.valueOf() );

Tornado.prototype.valueOf = function() {
    var sum = 0;
    for ( var i = 0; i < this.affectedAreas.length; i++ ) {
        sum += this.affectedAreas[ i ][ 1 ];
    }
    return sum;
};
// now valueOf() will return the sum of population
log.cll( "twister.valueOf()", twister.valueOf() ); // 641647

cities.push( [ "Olathe", 130045 ] );
// now valueOf() update the population number 
log.cll( "twister.valueOf()", twister.valueOf() ); // 771692

Tornado.prototype.toString = function() {
    var list = "";
    for ( var i = 0; i < this.affectedAreas.length; i++ ) {
        if ( i < this.affectedAreas.length - 1 ) {
            list = list + this.affectedAreas[ i ][ 0 ] + ", ";
        } else {
            list = list + "and " + this.affectedAreas[ i ][ 0 ];
        }
    }
    return "This tornado has been classified as an " + this.category +
        ", with wind gusts up to " + this.windGust + " mph. Affected areas are: " +
        list + ", potentially affecting a population of " + this.valueOf() + ".";
};
// no toString() will show a list of cities
log.cll( "twister.toSting()", twister.toString() ); // This tornado has been classified as an F5, with wind gusts up to 220 mph. Affected areas are: Kansas City, Topeka, Lenexa, and Olathe, potentially affecting a population of 771692.

log.cl( "" );
/**
 * prototype in constructor
 * These all access the prototype in the object constructor
 * Each line is equivalent to one another
 */
log.cll( "twister.constructor.prototype", twister.constructor.prototype );  // Tornado { valueOf: [Function], toString: [Function] }
log.cll( "twister.__proto__", twister.__proto__ );                          // Tornado { valueOf: [Function], toString: [Function] }
log.cll( "Object.getPrototypeOf(twister)", Object.getPrototypeOf(twister)); // Tornado { valueOf: [Function], toString: [Function] }
log.cl( "" );
/**
 * hasOwnProperty()
 * 
 */
Object.prototype.findOwnerOfProperty = function( propname ) {
    var currentObject = this;
    while ( currentObject != null ) {
        if ( currentObject.hasOwnProperty( propname ) ) {
            return currentObject;
        } else {
            // Otherwise, set currently examined Object to be the previously examined Object's prototype
            currentObject = Object.getPrototypeOf( currentObject );
        }
    }
    return "No property found!";
};

log.cll( "twister.findOwnerOfProperty( \"valueOf\" )", twister.findOwnerOfProperty( "valueOf" ) );
log.cll( "twister.findOwnerOfProperty( \"goToOz\" )", twister.findOwnerOfProperty( "goToOz" ) );