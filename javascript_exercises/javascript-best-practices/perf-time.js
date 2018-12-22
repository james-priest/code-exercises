const log = require( '../cl.js' );
const m = require( './modules/knight.js' ); //

var firstRegimentNewbs = [ "Grimble Horsehead", "Jack winterborn", "Bunder Ropefist", "Ernst Breadbaker" ];
var firstRegimentKnight = []; // tons of Knight object...

console.time( "Time to add " + firstRegimentNewbs.length + " Knights" );
for ( var i = 0, x = firstRegimentNewbs.length; i < x; i++ ){
    // Option 1
    // var newGuy = new module.Knight( firstRegimentNewbs[ i ], 1 );
    // firstRegimentKnight.push( newGuy ); // 0.896ms

    // Option 2
    firstRegimentKnight.push( new m.Knight( firstRegimentNewbs[ i ], 1 ) ); // 0.595ms
}
console.timeEnd( "Time to add " + firstRegimentNewbs.length + " Knights" );
