const log = require('../cl.js');

/**
 * SignalFire Object
 * 
 * We will look at removing each method out of this object so that it is not recreated for each SignalFire object.
 * We give all common methods that a "class" of objects will use to the constructor's prototype
 *
 * @param {any} ID 
 * @param {any} startingLogs 
 */
function SignalFire( ID, startingLogs ) {
    this.fireID = ID;
    this.logsLeft = startingLogs;
}
// function SignalFire( ID, startingLogs ) {
//     this.fireID = ID;
//     this.logsLeft = startingLogs;
//     this.addLogs = function( numLogs ) {
//         this.logsLeft += numLogs;    
//     };

//     this.lightFire = function() {
//         console.log( "Whoooosh!" );
//     };

//     this.smokeSignal = function( message ) {
//         if ( this.logsLeft < this.message.length / 10 ) {
//             console.log( "Not enough fuel to send the current message!" );
//         } else {
//             this.lightFire();
//             var x = this.message.length;
//             for ( var i = 0; i < x; i++ ) {
//                 console.log( "(((" + this.message[ i ] + ")))" );
//                 if ( i % 10 == 0 && i != 0 ) {
//                     this.logsLeft--;
//                 }
//             }
//         }
//     };
// }

// Now all of these methods will be inherited by every SignalFire object
SignalFire.prototype = {
    addLogs: function( numLogs ) {
        this.logsLeft += numLogs;
    },

    lightFire: function() {
        console.log( "Whoooosh!" );
    },

    smokeSignal: function( message ) {
        if ( this.logsLeft < message.length / 10 ) {
            console.log( "Not enough fuel to send the current message!" );
        } else {
            this.lightFire();
            var x = message.length;
            for ( var i = 0; i < x; i++ ) {
                console.log( "(((" + message[ i ] + ")))" );
                if ( i % 10 == 0 && i != 0 ) {
                    this.logsLeft--;
                }
            }
        }
    }
};

var fireOne = new SignalFire( 1, 20 );
var fireTwo = new SignalFire( 2, 18 );
var fireThree = new SignalFire( 3, 24 );

// Each object is accessing the methods contained in the prototype object
fireOne.addLogs( 8 );
fireTwo.addLogs( 10 );
fireThree.addLogs( 4 );

fireThree.smokeSignal( "Goblins" );