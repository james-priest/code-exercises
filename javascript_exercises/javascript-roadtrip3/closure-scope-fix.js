const log = require('../cl.js');
// Loops with closures: A Cautionary Tale
// Closures bind values at the very last moment

function assignTorpedo(name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++) { // way before torpedoAssignment is returned, the i loop counter reached 8
        if (passengerArray[i] == name) {
            torpedoAssignment = function () {
                console.log("Ahoy, " + name + "!");
                console.log("Man your post at Torpedo #" + (i + 1));
            };
        }
    }
    return torpedoAssignment; //This is when the closure occurs
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);

log.cld("This is wrong.");
giveAssignment();

// Solution #1
// Return immediately when match is made - this works because i value was not allowed to progress
function assignTorpedo1(name, passengerArray) {
    for (var i = 0; i < passengerArray.length; i++) { // way before torpedoAssignment is returned, the i loop counter reached 8
        if (passengerArray[i] == name) {
            return function () {
                console.log("Ahoy, " + name + "!");
                console.log("Man your post at Torpedo #" + (i + 1));
            };
        }
    }
}

log.cld("This is correct. Function returned immediately when match is made in loop");
// assignTorpedo1("Chewie", subPassengers)();
var giveAssignment1 = assignTorpedo1("Chewie", subPassengers);
giveAssignment1();


// Solution #2
// External function deals only with passengerArray and returned function deals with specific name
function makeTorpedoAssigner(passengerArray) { // only pass in external function
    
    return function (name) { // internal function deals with specific name
        for (var i = 0; i < passengerArray.length; i++) { // since loop is inside the returned function, i will come directly from that local scope
            if (passengerArray[i] == name) {
                console.log("Ahoy, " + name + "!");
                console.log("Man your post at Torpedo #" + (i + 1));
            }
        }
    };
}

log.cld("This is correct. Because loop happens INSIDE of returned function therefore i maintains its local scope.");
var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Chewie");
getTorpedoFor("R2-D2");