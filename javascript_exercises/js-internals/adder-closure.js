/**
 * Scope chain in closure
 * from http://jstherightway.org/
 * YouTube video: Arindam Paul - JavaScript VM Internals, Eventloop, Async and * Scopechains
 * 
 */
function makeAdder(n) {
    var inc = n;
    var sum = 0;
    return function add() {
        sum = sum + inc;
        return sum;
    };
}

var adder3 = makeAdder(3);

// reference to a different scope chain altogether
var adder2 = makeAdder(2);

console.log("adder3(): " + adder3());
console.log("adder3(): " + adder3());
console.log("adder3(): " + adder3());
console.log("adder2(): " + adder2());
console.log("adder2(): " + adder2());
console.log("adder2(): " + adder2());
/*
in console we can make this call
> adder3()
< 3
> adder3()
< 6
> adder3()
< 9
> console.dir(adder3)
*/

/*
in terminal use node ./adder-closure.js
*/