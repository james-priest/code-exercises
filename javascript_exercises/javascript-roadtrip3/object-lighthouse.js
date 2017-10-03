// require console log shorthand functions
const log = require( '../cl.js' );

var superBlinders = [
    ["Firelight", 4000],
    ["Solar Death Ray", 6000],
    ["Supernova", 12000]
];

var lighthouseRock = {
    gateClosed: true,
    bulbs: [200, 500, 750],
    capacity: 30,
    secretPassageTo: "Underwater Outpost"
};
/**
 * The ranger-devs want to upgrade Lighthouse Rock with new super-blinding light bulbs and remove the old existing bulbs.

The new superBlinders array and lighthouseRock object are provided. Each index of the superBlinders array contains a bulb name and its wattage within a sub-array.

1. Completely remove the existing bulbs property from the lighthouseRock object.
2. Add a weaponBulbs property to lighthouseRock and assign the superBlinders array as a value.
3. Log the name value of the bulb with the highest wattage to the console. Use the correct index from the weaponBulbs property of the lighthouseRock object to access the correct name value.
 */
// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
log.cll("lighthouseRock.weaponBulbs[2][0]", lighthouseRock.weaponBulbs[2][0]);

log.cl("Create numRangers property");
lighthouseRock.numRangers = 0;

function addRanger(location, name, skillz, station) {
    // increment the number of rangers property
    location.numRangers++;
    // add the ranger<number> property and assign a ranger object
    location["ranger" + location.numRangers] = { name: name, skillz: skillz, station: station };
}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
log.cll("lighthouseRock.ranger1", lighthouseRock.ranger1);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
log.cll("lighthouseRock.ranger2", lighthouseRock.ranger2);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);
log.cll("lighthouseRock.ranger3", lighthouseRock.ranger3);

/**
 * We need to assign each of the ranger-devs to a super-blinding light bulb based on their station number. So we’re building a function that creates an alert message for the ranger-devs in the following format:
 * Avast, me hearties!
There be Pirates nearby! Stations!
<name>, man the <superblinder>!
<name>, man the <superblinder>!
<name>, man the <superblinder>!

 * We’ve created a dontPanic function for you that already contains the alert message. Your job is to finish building the list string:
1. Create a for loop to loop through all of the rangers at the location, using the numRangers property to keep track.
2. Inside the loop, begin by using the correct property to append the name of the current ranger to the list.
3. Also, concatenate the text between the ranger name and the superblinder so that it matches the format above.
4. Lastly, add the name of the correct super-blinding light bulb from the weaponBulbs array to the list. In order to retrieve the name of the correct bulb, you’ll need to use the ranger’s station number.
 */

function dontPanic(location) {
    var list = "Avast, me hearties!\n" +
        "  There be Pirates nearby! Stations!\n  ";

    // loop through the rangers and append to list
    for (var i = 1; i <= location.numRangers; i++) {
        // log.cll("location[\"ranger\" + i].station", location["ranger" + i].station);
        // log.cll("  location[\"ranger\" + i].name", location["ranger" + i].name);
        
        // list += location["ranger" + i].name + ", man the " + location.weaponBulbs[location["ranger" + i].station - 1][0] + "!\n  "; 
        var name = location["ranger" + i].name;
        var superBlinder = location.weaponBulbs[location["ranger" + i].station - 1][0];
        list += name + ", man the " + superBlinder + "!\n  "; 
    }

    log.cll("list", list);
}

dontPanic(lighthouseRock);

log.cll("lighthouseRock", lighthouseRock);