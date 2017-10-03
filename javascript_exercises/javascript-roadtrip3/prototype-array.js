// require console log shorthand functions
const log = require( '../cl.js' );

var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];

Array.prototype.countCattle = function (kind) {
    var numKind = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i].type == kind) {
            numKind++;
        }
    }
    return numKind;
};

log.cll("canyonCows.countCattle(\"cow\")", canyonCows.countCattle("cow"));
log.cll("canyonCows.countCattle(\"calf\")", canyonCows.countCattle("calf"));

var valleyCows = [
    {name: "Danielle", type: "cow", hadCalf: null},
    {name: "Brittany", type: "cow", hadCalf: "Christina"},
    {name: "Jordan", type: "bull", hadCalf: null},
    {name: "Trevor", type: "bull", hadCalf: null},
    {name: "Christina", type: "calf", hadCalf: null},
    {name: "Lucas", type: "bull", hadCalf: null}
];
var forestCows = [
    {name: "Legolas", type: "calf", hadCalf: null},
    {name: "Gimli", type: "bull", hadCalf: null},
    {name: "Arwen", type: "cow", hadCalf: null},
    {name: "Galadriel", type: "cow", hadCalf: null},
    {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

log.cll("Add 3", canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));

/**
 * To let mother cows rest, the cowboy-devs at the Plains of Prototypes have decided only to breed cows that have not given birth to any calves yet.

Now they want to add some functionality to the Object prototype itself. They’ve asked you to build two functions, in order:

1. First, build a function called noCalvesYet, which will be added to the Object prototype.
2. If the object type is a "cow" and also had no calves, the function should return a true value. Otherwise it should return a false value.
3. Then, build a function called countForBreeding, which will be added to the Array prototype.
4. In countForBreeding start by creating a numToBreed counter variable. The following steps refer to code in countForBreeding.
5. Use a for loop to loop through all of the array values. You can use this to refer to the current list.
6. Call noCalvesYet(). If it returns true for the current array value, then that means the cows are not moms, and we can increment the numToBreed counter variable.
7. After your loop, this function should return the numToBreed count, which represents how many non-mother cows are available within any array.
 */

Object.prototype.noCalvesYet = function () {
    // log.cll(this.name,this.hadCalf);
    if (this.type == "cow" && this.hadCalf === null) {
        return true;
    } else {
        return false;
    }
};

Array.prototype.countForBreeding = function () {
    var numToBreed = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i].noCalvesYet()) {
            numToBreed++;
        }
    }
    return numToBreed;
};

log.cll("forestCows.countForBreeding()", forestCows.countForBreeding());

/**
 * It’s time to figure out which cows are in line for a first breeding. Your awesome prototype skills are making life easy on the cowboy-devs, and now they’ve asked you to use your new functions to find out how many cows from the lists below have not had calves yet.

1. Create a numPriorityCows variable, and then call your countForBreeding() function on each of the four array lists below to calculate the correct total.
2. Add an alert message with numPriorityCows in the following format:
    Herd-merger has indicated <number> cows of top breeding priority.
 */

var badlandsCows = [
    {name: "Voldemort", type: "bull", hadCalf: null},
    {name: "Maleficent", type: "cow", hadCalf: null},
    {name: "Ursula", type: "cow", hadCalf: "Draco"},
    {name: "Draco", type: "calf", hadCalf: null},
    {name: "Joker", type: "bull", hadCalf: null},
    {name: "Chucky", type: "calf", hadCalf: null},
    {name: "Samara", type: "cow", hadCalf: "Chucky"}
];

var numPriorityCows = canyonCows.countForBreeding() + valleyCows.countForBreeding() +
    forestCows.countForBreeding() + badlandsCows.countForBreeding();

log.cll("numPriorityCows", "Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");