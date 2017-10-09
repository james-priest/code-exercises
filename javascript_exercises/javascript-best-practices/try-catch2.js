const log = require( '../cl.js' );
const obj = require( './modules/knight.js' );

// var list = 21; // wrong type
// var list = "Susie"; wrong type
var list = [ "James Priest" ]; //works

var result;
try {
    var newHallOfFame = [ "Dask Frostring", "Render Tallborn" ];

    if ( list === undefined ) {
        throw new ReferenceError();
    }
    if ( ( list instanceof Array ) === false ) {
        throw new TypeError();
    }

    result = list.concat( newHallOfFame ) ;
} catch ( error ) {
    // if list doesn't exist then we get a ReferenceError
    // if concat doesn't exist then we get TypeError
    if ( error instanceof ReferenceError ) {
        log.cll( "The HoF roster does not exist as \"list\"!", error );
    }
    if ( error instanceof TypeError ) {
        log.cll( "Alas, list exists, but is not an array!", error );
    }
} finally { // this execute regardless of error or not
    log.cll( "result", result );
}