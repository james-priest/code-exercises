const log = require('../cl.js');
/**
 * Changing a Bound Value I

The Cold Closures Cove devs are troubled by the amount of the warnings that have been coming back lately. Some obstacles have resulted in many warnings, while others have not.

They’d like you modify the warningMaker function to internally count the number of times a particular warning has been issued.

In order to accomplish this, you’ll need to set up a count variable and figure out how to increment it appropriately within the context of your functions.

Lastly, add that count to the alert message. The format of the message should match the following: */

function warningMaker(obstacle) {
    var count = 0;
    var zones = [];
    return function (number, location) {
        count++;
        var list = "";
        zones.push([location, number]);
        var newArray = zones.map(function (item) { list += item[0] + " (" + item[1] + "); "; });
        console.log("Beware! There have been " + obstacle +
            " sightings in the Cove today!\n" +
            number + " have been spotted at the " +
            location + "!");
        console.log("This is alert #" + count + " today for " + obstacle + " danger.");
        console.log("The current danger zones are: " + list);
    };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert = warningMaker("polar bear");
var icebergAlert = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert = warningMaker("snow yeti");

// call the two functions here
log.cld("Penguin");
killerPenguinAlert(6, "Ice Caves");
log.cld("Yeti");
snowYetiAlert(1, "Blizzard Beach");
log.cld("Penguin");
killerPenguinAlert(2, "Venice Beach");
