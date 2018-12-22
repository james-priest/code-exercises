/**
 * Scope chain in closure
 * from http://jstherightway.org/
 * YouTube video: Arindam Paul - JavaScript VM Internals, Eventloop, Async and * Scopechains
 * 
 */

// recursive timeout
var sec = 0;
var interval = 2;
setTimeout(function timeout() {
    sec = sec + interval;
    console.log("Hi " + sec);
    setTimeout(timeout, 2000);
}, 2000);

/*
in terminal use node ./looped-setTimeout.js
*/