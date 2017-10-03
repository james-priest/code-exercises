// require console log shorthand functions
const log = require( '../cl.js' );

var rockSpearguns = {
    Sharpshooter: { barbs: 2, weight: 10, heft: "overhand" },
    Pokepistol: { barbs: 4, weight: 8, heft: "shoulder" },
    Javelinjet: { barbs: 4, weight: 12, heft: "waist" },
    Firefork: { barbs: 6, weight: 8, heft: "overhand" },
    "The Impaler": { barbs: 1, weight: 30, heft: "chest" }
};
  
// function listGuns( guns ) {
//     for ( var speargun in guns ) {
//         //console.log( guns[ speargun ].heft );
//         // This required starting with the guns object, 
//         // then using the key(speargun) to reference an individual object within the guns object, 
//         // and then referencing the specific property of that individual object
//         log.cl( "Behold! " + speargun + ", with " + guns[speargun].heft + " heft!" );
//     }
// }

// listGuns( rockSpearguns );

// Bracket notation creates a 'listGuns' property on the rockSpearguns object 
rockSpearguns[ "listGuns" ] = function() {
    for ( var property in this ) {
        //console.log( this[ property ].heft );
        // This required starting with the 'this' object, 
        // then using the key/property to reference an individual object within the 'this' object, 
        // and then referencing the specific property of that individual object
        if ( this[ property ]["heft"] !== undefined ) {
            log.cl( "Behold! " + property + ", with " + this[ property ].heft + " heft!" );
        }
    }
};

// use bracket notation...
// rockSpearguns.listGuns();
rockSpearguns["listGuns"]();