const log = require( '../cl.js' );

var firstRegimentNewbs = [ "Grimble Horsehead", "Jack winterborn", "Bunder Ropefist", "Ernst Breadbaker" ];
var firstRegimentKnight = []; // tons of Knight object...

console.time( "Time to add " + firstRegimentNewbs.length + " Knights" );
for ( var i = 0, x = firstRegimentNewbs.length; i < x; i++ ){
    // Option 1
    // var newGuy = new Knight( firstRegimentNewbs[ i ], 1 );
    // firstRegimentKnight.push( newGuy ); // 0.896ms

    // Option 2
    firstRegimentKnight.push( new Knight( firstRegimentNewbs[ i ], 1 ) ); // 0.595ms
}
console.timeEnd( "Time to add " + firstRegimentNewbs.length + " Knights" );



// switch is a conditional for multiple possibilities
// switch has fallthrough so think of case as a label where code execution *starts*
// case can be moved
function Knight( name, regiment ) {
    this.name = name;
    this.regiment = regiment;
    switch ( regiment ) {
        case 1:
            this.weapon = "Broadsword";
            break;
        case 2:
            this.weapon = "Claymore";
            break;
        case 3:
            this.weapon = "Longsword";
            break;
        case 5:
            this.weapon = "War Hammer";
            break;
        case 6:
            this.weapon = "Battle Axe";
            break;
        case 4:
        case 7:
        case 8:
            this.weapon = "Morning Star";
            break;
        case "King":
            this.weapon = "Excalibur";
            break;
        default:
            console.log( name + " has an incorrect regiment, Master Armourer! No weapon assigned!" );
    }
}

// var soldier = new Knight( "Timothy", 2 );
// log.cll( "soldier", soldier );

// var king = new Knight( "Arthur", "King" );
// log.cll( "king.weapon", king.weapon );

// var soldier3 = new Knight( "Jerome", 1 );
// log.cll( "soldier3", soldier3 );


