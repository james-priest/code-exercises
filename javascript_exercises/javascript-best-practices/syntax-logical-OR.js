const log = require('../cl.js');

// Logical OR will find the very first non-falsy value
// var a = obj || {};
// var b = arr || [];
// var c = str || "";
// var d = num || 0;

// Logical operators can make conditional assignments event shorter than ternaries
// FALSY: undefined, 0, ""
// If all values are falsy then it will take the last value examined - WFT??? this is true
// var result1 = undefined || ""; // ""
// var result1 = "" || undefined; // undefined


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