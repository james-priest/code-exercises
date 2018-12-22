const log = require( '../cl.js' );

// We want to be able to control program flow after run-time errors occur

// var alarm = "Dragons approach";

try { // A try block is like a test zone for your code
    alert( alarm ); // if all goes smoothly here we're good to go
} catch(error) { // if something goes wrong, the try block "throws" an error message to the catch block
    log.cl( "Uh oh...\n" + error ); // as a param object this error can be used in  messaging or conditions
}
