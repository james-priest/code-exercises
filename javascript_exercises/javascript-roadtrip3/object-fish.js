// require console log shorthand functions
const log = require( '../cl.js' );

var aquarium = {
    Nemo: { type: "fish", species: "clownfish", length: 3.7 },
    Marlin: { type: "fish", species: "clownfish", length: 4.1 },
    Dory: { type: "fish", species: "blue tang", length: 6.2 },
    Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
    "Coral Castle": { type: "environment", material: "coquina", moves: false },
    "Dragon Statue": { type: "environment", material: "plastic", moves: false },
    addCritter: function (name, type, species, length) {
        this[name] = { type: type, species: species, length: length };
    }
};

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);
aquarium.takeOut = function (name) {
    this[name].name = name; 
    var temp = this[name];
    delete this[name];
    return temp;
};

var fishOutOfWater = aquarium.takeOut("Marlin");
log.cll("fishOutOfWater", fishOutOfWater);

var toy = aquarium.takeOut("Dragon Statue");
log.cll("toy", toy);

log.cll("aquarium", aquarium);