const log = require( '../cl.js' );

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
        // case 4:
        //     this.weapon = "Mace";
        //     break;
        case 5:
            this.weapon = "War Hammer";
            break;
        case 6:
            this.weapon = "Battle Axe";
            break;
        case 4:
        case 7:
            // this.weapon = "Halberd";
            // break;
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

var soldier = new Knight( "Timothy", 2 );
log.cll( "soldier", soldier );

var king = new Knight( "Arthur", "King" );
log.cll( "king.weapon", king.weapon );

var soldier3 = new Knight( "Jerome", 13 );
log.cll( "soldier3", soldier3 );

// fallthrough with hierarchical code execution is for an accumulation of code execution
// start with least common and move to most common
function ceremonialDagger( knight, rank ) {
    this.length = 8;
    this.owner = knight;
    switch ( rank ) {
        case "King": this.diamonds = 1;
        case "High Constable": this.amethyst = 2;
        case "Field Marshal": this.sapphires = 4;
        case "Captain": this.emeralds = 1;
        case "Knight": this.rubies = 6;
    }
}
var knightDagger = new ceremonialDagger( "Jerome", "Knight" );
log.cll( "knightDagger", knightDagger );

var marshalsDagger = new ceremonialDagger( "Timothy", "Field Marshal" );
log.cll( "marshalsDagger", marshalsDagger );
