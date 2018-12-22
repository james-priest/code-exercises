const log = require('../cl.js');

// Logical AND will take the first falsy value or the rightmost truthy value 

// if one falsy exists anywhere in short-circuit it will take the first falsy 
// var a = undefined && 42; // takes undefined because it already found a false which can't make true with an &&
// var b = 0 && ["Sweet", "array"]; // takes 0 since it's the first falsy.
// var c = "" && {}; // takes "" since it's the first falsy
// var d = 2 || 1; // takes 1 as the last truthy
// var e = "King" && "Arthur"; // Arthur - last truthy
// var f = "Arthur" && "King"; // King - last truthy

// "AND" is useful in contingent assignments where one thing must be true before second item is assigned

// pass sword into armory.addSword(sword) function; if sword exists, use it, otherwise assign empty array.
var armory = {
    addSword: function( sword ) {
        // this.swords = this.swords ? this.swords : [];
        this.swords = this.swords || []; // when used in assignment OR operator will select first not "falsy" value
        // add sword to existing or new empty this.swords array.
        this.swords.push( sword );
    }
};

armory.addSword( "Broadsword" );

log.cll( "armory.swords", armory.swords );

armory.addSword( "Katana" );
armory.addSword( "Claymore" );
armory.addSword( "Scimitar" );

log.cll( "armory.swords", armory.swords );

armory.retrieveSword = function( request ) {
    return ( this.swords.indexOf( request ) >= 0 ) ? // is the request sword in the array?
        this.swords.splice( this.swords.indexOf( request ), 1 )[ 0 ] : // if so, splice array and returned request sword
        log.cl( "No " + request + ", baby!" );
};

var weapon;
var isKnight = true; // only knight should get weapons; not serial killers

weapon = isKnight && armory.retrieveSword( "Katana" );
log.cll( "weapon retrieved", weapon );

var armoryIsOpen = true; 
weapon = armoryIsOpen && isKnight && armory.retrieveSword( "Claymore" );
log.cll( "weapon retrieved", weapon );

weapon = armoryIsOpen && isKnight && armory.retrieveSword( "Rapier" );
log.cll( "weapon retrieved", weapon );