const log = require( '../cl.js' );

log.cll( "0.1 + 0.2", 0.1 + 0.2 );
log.cll( "(0.1 + 0.2).toFixed(1)", (0.1 + 0.2).toFixed(1) );
log.cl();


log.cll( "0.1 + 0.2 + 0.3", 0.1 + 0.2 + 0.3 );

log.cll( "0.1 + (0.2 + 0.3)", 0.1 + ( 0.2 + 0.3 ) );

// toFixed() allows us to select exact amount of decimal places to display.
// it rounds properly but returns a string; in order to use a number... we need:
// combination of toFixed() and parseFloat()
function tax( price, percent ) {
    return parseFloat(( price * percent / 100 ).toFixed( 2 ));
}

var mailedGlove = 9.85;
var armorTax = 7.5;
var total = mailedGlove + tax( mailedGlove, armorTax );
// log.cll( "tax", tax( 9.85, 7.5 ) );
log.cll( "price + tax = total", mailedGlove + " + " + tax(mailedGlove, armorTax) + " = " + total );

// parseInt() seeks the first available integer at the front of a string.
// If not at front then it returns NaN

log.cll( "parseInt(\"88adf\")", parseInt( "88adf" ) );
log.cll( "parseInt(\"adf88\")", parseInt( "adf88" ) );
log.cll( "parseInt(\"66.33\")", parseInt( "66.33" ) );

// parseInt() will accept octal, hex, & decimal
// use a radix value to ensure correct parsing
log.cll( "parseInt(\"21\", 8)", parseInt( "21", 8 ) );
log.cll( "parseInt(\"21\", 10)", parseInt( "21", 10 ) );
log.cll( "parseInt(\"21\", 16)", parseInt( "21", 16 ) );

// NaN
// typeof NaN; // "number"; that's why we have to check !isNaN(data)
// NaN === NaN; // false
// isNaN( "42" ); // false
// if unsure about data type, but highly reliant on a Number, use typeof AND isNaN() together
function isThisActuallyANumber( data ) {
    return ( typeof data === "number" && !isNaN( data ) );
}
isThisActuallyANumber( 640 ); // true
isThisActuallyANumber( "640" ); // false
isThisActuallyANumber( NaN ); // false

// Use parse methods for leniency or Form data...
// if numerical data may show up as a string, parse data before type check and additional checks
function checkValidZip() {
    var entry = document.getElementById( "zip" ).value;
    var userZip = parseInt( entry );
    try {
        if ( isThisActuallyANumber( userZip ) ) {
            if ( userZip.toFixed( 0 ).length === 5 ) {
                return true;
            } else {
                throw new Error( "Nope!" );
            }
        }
        else {
            throw new Error( "Nope!" );
        }
    }
    catch ( e ) {
        if ( e.message === "Nope!" ) {
            alert( "Please enter a valid zip, dude." );
            return false;
        }
        // other error responses go here...
    }
}
