/**
 * Build Import
 * First, import the explorerAnswer global by passing it as a parameter at the very bottom.
 * Then, pass answer as the parameter to the function keyword at the top. 
 * Lastly, replace explorerAnswer with answer inside the local function scope.
 */
var explorerAnswer = "asdf";

var LEXICALLAKE = ( function(answer, foundShore) {

    var depth = 400;
    var fish = 1200;
    var unknownSleepers = 3;

    return {
        getFish: function() {
            return fish;
        },
        getDepth: function() {
            return depth;
        },
        getSleepers: function() {
            return unknownSleepers;
        },
        awakenSleeper: function() {
            alert( 'Far below, in the deep, something awakens. Row faster.' );
        },
        summonBoat: function() {
            if ( answer === 'agnostic' ) {
                alert( 'The boat fades into view.' );
            } else {
                alert( '...the lake is silent.' );
            }
        },
        stopSleeper: function() {
            if ( foundShore === true ) {
                console.log( "That which has awoken shall now return to slumber." );
            } else {
                console.log( " A sleeper cometh. Abandon hope." );
            }
        }
    };
} )( explorerAnswer, madeItAcross );

// Your import ensures clarity of scope within a module.
// By using a parameter, you protect the global data that might have been overwritten.
// All imported data becomes locally scoped to the anonymous function, to be used in the closure.
// Thus, when compared with searching the entire scope chain, imports are both clearer & faster.