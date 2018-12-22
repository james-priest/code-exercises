/**
 * Scope chain in closure
 * from http://jstherightway.org/#must-see
 * YouTube video: Arindam Paul - JavaScript VM Internals, Event Loop, Async and Scope Chains
 * 
 */

// blocking process in single threaded mode
function process(num) {
    // function to delay
    delay();
    console.log(num);
}

// Synchronous
console.log("sync process");
[1, 2, 3, 4, 5, 6].forEach(function (i) {
    process(i);
});

// Asynchronous
// console.log("async process");
// [1, 2, 3, 3, 4, 5, 6].forEach(function (i) {
//     setTimeout(function () {
//         process(i);
//     }, 0);
// });

var count = 0;
function delay() {
    count = count + 1;
    //console.log("delay " + count);
}
/*
in terminal use node ./synchronous-process.js
*/