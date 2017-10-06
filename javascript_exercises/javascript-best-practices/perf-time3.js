const log = require( '../cl.js' );

var rightNow = +new Date();
var endTime = +new Date();
var elapsedTime = endTime - rightNow;


console.log( elapsedTime );
// console.log( +rightNow ); // is equivalent to console.log(new Number (rightNow));

function SpeedTest( testImplement, testParams, repetitions ) {
    this.testImplement = testImplement;
    this.testParams = testParams;
    this.repetitions = repetitions || 10000;
    this.average = 0;
}

SpeedTest.prototype = {
    startTest: function() {
        var beginTime, endTime, sumTimes = 0;
        for ( var i = 0, x = this.repetitions; i < x; i++ ) {
            beginTime = +new Date();
            this.testImplement( this.testParams );
            endTime = +new Date();
            sumTimes += endTime - beginTime;
        }
        this.average = sumTimes / this.repetitions;
        return console.log( "Average execution across " + this.repetitions + ": " + this.average );
    }
};

var firstRegimentNewbs = [ "Grimble Horsehead", "Jack Winterborn", "Bunder Ropefist", "Ernst Breadbaker" ];
var firstRegimentKnight = []; // tons of Knight object...
var listsForTests = [ firstRegimentNewbs, firstRegimentKnight ]; // This is the list of array that test code needs to operate

var noBP = function( listOfParams ) { // no Best Practice code
    for ( var i = 0; i < listOfParams[0].length; i++ ) {
        var newGuy = new Knight( listOfParams[0][ i ], 1 );
        listOfParams[1].push( newGuy );
    }
};
var BP = function( listOfParams ) { // Best Practice code
    for ( var i = 0, x = listOfParams[ 0 ].length; i < x; i++ ) {
        listOfParams[1].push( new Knight( listOfParams[0][ i ], 1 ) );
    }
};

// Tests occur here
var noBPTest = new SpeedTest( noBP, listsForTests, 100000 ); // Create the SpeedTest object
noBPTest.startTest(); // run it!

var BPTest = new SpeedTest( BP, listsForTests, 100000 ); // Create the SpeedTest object
BPTest.startTest(); // run it!

// Knight object used for tests
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