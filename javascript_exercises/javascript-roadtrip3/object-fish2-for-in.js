// require console log shorthand functions
const log = require( '../cl.js' );

// Enumeration with for-in loop
var aquarium = {
    Nemo: { type: "fish", species: "clownfish", length: 3.7 },
    Dory: { type: "fish", species: "blue tang", length: 6.2 },
    Bubbles: { type: 'fish', species: 'yellow tang', length: 5.6 },
    Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
    "Coral Castle": { type: "environment", material: "coquina", moves: false },
    addCritter: function (name, type, species, length) {
        this[name] = { type: type, species: species, length: length };
    },
    takeOut: function (name) {
        this[name].name = name; 
        var temp = this[name];
        delete this[name];
        return temp;
    },
    fishCount: function () {
        var fishNum = 0;
        for ( var key in this ) {
            if ( this[ key ].type == "fish" ) {
                fishNum++;
            }
        }
        return fishNum;
    }
};

// aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);
// var fishOutOfWater = aquarium.takeOut("Marlin");
// log.cll("fishOutOfWater", fishOutOfWater);

log.cll("aquarium", aquarium);

/**
 * This fish counter really should be a part of the aquarium
 * We added it above and will add it outside the object literal declaration thru code below.
 */
// var getNumFish = function() {
//     var numFish = 0;
//     for ( var key in aquarium ) { // key represents every single enumerable property in the object
//         //log.cll( key, aquarium[ key ] ); // outputs each of the property names (not values)
//         if ( aquarium[ key ].type == "fish" ) {
//             log.cll( key, aquarium[ key ] );
//             numFish++;
//         }
//     }
//     return numFish;
// };
// log.cl();
// log.cll('getNumFish()',getNumFish());

log.cl();
log.cll( "aquarium.fishCount()", aquarium.fishCount() );

aquarium.getFishCount = function() {
    var fishCount = 0;
    for ( var key in this ) {
        if ( this[ key ].type == "fish" ) {
            fishCount++;
        }
    }
    return fishCount;
};

log.cl();
log.cll( "aquarium.getFishCount()", aquarium.getFishCount() );

var poorDory = aquarium.takeOut( "Dory" );
log.cll( "aquarium.takeOut( \"Dory\" )", poorDory );
log.cll( "aquarium.getFishCount()", aquarium.getFishCount() );
