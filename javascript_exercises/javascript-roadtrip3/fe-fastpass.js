const log = require( '../cl.js' );

// two-dimensional array of rides - ride name and wait time for each
var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55],
    ["Cedar Coaster", 20], ["Ferris Wheel of Firs", 90]];

// Fast passes available right now in order of availability
var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers"];
log.cll("fastPassQueue", fastPassQueue); //
// log.cll("length", fastPassQueue.length); // length 3

//remove from queue - shift
var firstFastPass = fastPassQueue.shift();
log.cll("shift", firstFastPass);
log.cll("fastPassQueue", fastPassQueue); // 
// log.cll("fastPassQueue length", fastPassQueue.length); // length 3

// add to queue - push
fastPassQueue.push("Cedar Coaster");
log.cll("push", "Cedar Coaster");
log.cll("fastPassQueue", fastPassQueue);
// log.cll("length", fastPassQueue.length); // length 4

/**
 * buildTicket function
 * 
 * @param {any} allRides array of rides and their wait times
 * @param {any} passRides array of the next available Fast Pass rides
 * @param {any} pick The ride our customer wants a ticket for
 */
function buildTicket(allRides, passRides, pick) {
    if (passRides[0] == pick) {
        var pass = passRides.shift();
        return function () { console.log("Quick! You've got a Fast Pass to " + pass + "!"); };
        // we are treating the function as an expression and returning it directly. no var needed. 
    } else {
        for (var i = 0; i < allRides.length; i++) {
            if (allRides[i][0] == pick) {
                return function () {
                    console.log("A ticket is printing for " + pick + "! " +
                        "Your wait time is about " + allRides[i][1] + " minutes.");
                };
            }
        }
    }
}

var wantsRide = "Birch Bumpers";
log.cll("wants", wantsRide);
var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();

wantsRide = "Pines Plunge";
log.cll("wants", wantsRide);
ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();

// IIFE
wantsRide = "Birch Bumpers";
log.cll("wants", wantsRide);
buildTicket(parkRides, fastPassQueue, wantsRide)();
// The above works because what is returned from buildTicket is a Function Expression 

/*
// Here we're returning a function expression 
select userChoice {
    case 1:
        return function () { alert("You selected the Vines of Doom!"); };
        break;
    case 2:
        return function () { alert("Looks like you want the Lake of Despair!"); };
        break;
    case 3:
        return function () { alert("The Caves of Catastrophe!"); };
}*/