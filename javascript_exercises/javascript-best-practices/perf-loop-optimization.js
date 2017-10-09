const log = require( '../cl.js' );

var treasureChest = {
    goldCoins: 10000,
    magicItem: "Crown of Speed",
    necklaces: [ "ruby", "pearl", "diamond", "sapphire", ],
    openLid: function() {
        console.log( "Creeeeak!" );
    }
};
var list = treasureChest.necklaces; // array in object is cached to variable

// js has to traverse the object chain it for each iteration - this is expensive 
log.cl( "For-loop traversing object chain each time in loop construct and body" );
for ( var i = 0; i < treasureChest.necklaces.length; i++ ) {
    log.cli( treasureChest.necklaces[ i ] );
}

// here the object chain is traversed once in the loop construct but many times in loop body
log.cl( "For-loop traversing object chain once in object construct" );
for ( var j = 0, n = treasureChest.necklaces.length; j < n; j++ ) {
    log.cli( treasureChest.necklaces[ j ] );
}

// Here the object chain is traversed once altogether
log.cl( "For-loop traversing object chain once before loop starts" );
for ( var k = 0; k < list.length; k++ ) {
    log.cli( list[ k ] );
}

//BEWARE JavaScript does not scope to block, so any variables declared in loops
// WILL be available after the loop, and may overwrite pre-existing globals!

// Stick with for-loops instead of for-in loops when goal is to reach EVERY index
// To see why, lets add a few methods onto the Array prototype

// sample prototype property method #1
Array.prototype.removeAll = function( item ) {
    var removed = [];
    for ( var i = 0, x = this.length; i < x; i++ ) {
        if ( this[ i ] === item ) {
            removed.push( item );
            this.splice( i, 1 );
        }
    }
    return removed;
};
// sample prototype property method #2
Array.prototype.countType = function( type ) {
    var count = 0;
    for ( var i = 0, x = this.length; i < x; i++ ) {
        if ( this[ i ] === type ) {
            count++;
        }
    }
    return count;
};

// Using a property approach to access indices will also add in ALL methods
// that have been added to the Array prototype.
log.cl( "For-in loop needs list.hasOwnProperty(p) in order to leave off prototype property methods " );
for ( var p in list ) {
    if ( list.hasOwnProperty(p) ) { // we have to use object.hasOwnProperty(item) to filter additional methods out 
        log.cli( list[ p ] );        
    }
}

// THEREFORE... stick with for-loop where lexical scope is not needed 
// Here the object chain is traversed once altogether
log.cl( "For-loop to test that prototype property methods aren't output - Stick with For loop OR... pure function" );
for ( var m = 0; m < list.length; m++ ) {
    log.cli( list[ m ] );
}

/**
 * for-loop - DOES NOT create lexical scope for each loop iteration
 * forEach - DOES create lexical scope for each iteration
 * for-in - iterates over the enumerable properties of an OBJECT (in original insertion order)

1. Javascript has functions as a first class citizen. each/forEach is only slower because it creates a lexical scope around each loop iteration. In practice this is usually what you want.
2. 9/10 times you really want .map. You're probably looping in order to transform data.
3. loops favor side effects over pure functions. this means reaching into other scopes, and unpredictability. .map and functional approaches are objectively easier to test
4. if you have code where you are iterating so much that a for loop performance over map is so significant, you probably need to download lodash anyways.
5. if you really, really really must loop. (note: you probably don't) do NOT evaluate length in the iterator!! that gets called every time!
6. and if you REALLY must loop a while with a -- decrementor is actually even faster. Following the guidelines of asm.js are even better than that..Again, you probably do not need this in everyday practice, the tradeoof for testability and readability is not usually worth it.

Don't use for-loops. Don't use forEach. Use pure functions with no side effects. Map, filter, reduce.
 */

// forEach()
log.cld( "forEach method" );
list.forEach( function( item, idx ) {
    log.cli( ( idx + 1 ) + " " + item);
} );

// Map()
log.cld( "map method" );
list.map( ( item, index ) => ( log.cli( ( index + 1 ) + " " + item ) ) );
