const log = require( '../cl.js' );
const m = require( './modules/knight.js' );

function Armor( location ) {
    this.location = location;
}
Armor.prototype = {
    putOn: function() {
        console.log( "Your armor is on." );
    }
};

function LeatherArmor( bodyStyle, numBuckles, numSpaulders ) {
    this.bodyStyle = bodyStyle;
    this.numBuckles = numBuckles;
    this.numSpaulders = numSpaulders;
}
LeatherArmor.prototype = Object.create( Armor.prototype );

function ChainMail( metal, linkDiameter, hasHood, skirtLength ) {
    this.metal = metal;
    this.linkDiameter = linkDiameter;
    this.hasHood = hasHood;
    this.skirtLength = skirtLength;
}
ChainMail.prototype = Object.create( Armor.prototype );

var arm1 = new LeatherArmor( "big", 2, 2 );
var arm2 = new ChainMail( "steel", "2cm", false, 42 );
var arm3 = new LeatherArmor( "med", 3, 4 );
var arm4 = new ChainMail( "bronze", "3cm", true, 40 );
var knight1 = new m.Knight( "John", 1 );
var knight2 = new m.Knight( "Rick", 2 );
var kingsMail = new ChainMail( "gold", 2, true, 36 );


var armorList = [ arm1, arm2, arm3, arm4 ]; // Armory's mixed up list of all armor objects
var newbs = [ knight1, knight2 ]; // List of Knight objects

// the instanceof operator helps identify objects
// Use this operator to ensure you're examining precisely the type of object that your code expects

function assignKnightsArmor( knights, armorAvail ) {
    var x = knights.length;
    var y = armorAvail.length;
    for ( var i = 0; i < x; i++ ) {
        for ( var j = 0; j < y; j++ ) {
            if ( armorAvail[ j ] instanceof ChainMail ) {
                knights[ i ].armor = armorAvail.splice( j, 1 )[ 0 ];
                y--;
                break;
            }
        }
    }
}

log.cll( "armorList.length before", armorList.length );
assignKnightsArmor( newbs, armorList );
log.cll( "armorList.length after", armorList.length );
// console.log( armorList );

// This is useful if you need to make sure an object has access to properties before you try and call them
log.cll( "kingsMail instanceof Armor", kingsMail instanceof Armor );
