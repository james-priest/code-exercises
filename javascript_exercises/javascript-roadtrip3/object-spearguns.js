// require console log shorthand functions
const log = require( '../cl.js' );

var rockSpearguns = {
    Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
    Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
    Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
    Firefork: {barbs: 6, weight: 8, heft: "overhand"},
    "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};
  
function listGuns( guns ) {
    for ( var speargun in guns ) {
        //console.log( guns[ speargun ].heft );
        // This required starting with the guns object, 
        // then using the key(speargun) to reference an individual object within the guns object, 
        // and then referencing the specific property of that individual object
        log.cl( "Behold! " + speargun + ", with " + guns[speargun].heft + " heft!" );
    }
}

listGuns( rockSpearguns );
