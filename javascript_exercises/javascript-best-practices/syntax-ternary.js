const log = require('../cl.js');

var isArthur = true;
var isKing = false;
var isArcher = true;
var weapon;
var helmet;

// full conditional code - 2 blocks
if ( isArthur ) {
    weapon = "Excalibur";
} else {
    weapon = "Longsword";
}

// ternary is condensed
// someCondition ? pickThisIfTrue : pickThisIsFalse
weapon = isArthur ? "Excalibur" : "Longsword";

log.cll( "weapon", weapon );

// embedded ternary
console.log( "Current weapon " + ( isArthur && isKing ? "Excalibur" : "Longsword" ) );

// complex conditional
isArthur && isKing ? log.cl( "Hail Arthur, King of the Britons!" ) :
    log.cl( "Charge on, ye knight, for the glory of the king!" );

// wrap multiple actions in an iife
isArthur && isKing ?
    function() {
        log.cl( "Hail, Arthur, King of the Britons!" );
        log.cl( "Current weapon: Excalibur" );
    }()
    :
    function() {
        log.cl( "Charge on, ye Knight, for the glory of the King!" );
        log.cl( "Current weapon: Longsword" );
    }();

// set multiple results
isArthur && isKing ?
    ( weapon = "Excalibur", helmet = "Goosewhite" )
    :
    ( weapon = "Longsword", helmet = "Iron Helm" );

// nested ternary
isArthur && isKing ?
    ( weapon = "Excalibur", helmet = "Goosewhite" )
    :
    isArcher ? ( weapon = "Longbow", helmet = "Mail Helm" )
        :
        ( weapon = "Longsword", helmet = "Iron Helm" );

log.cl( "Current weapon: " + weapon + "\nCurrent helmet: " + helmet );