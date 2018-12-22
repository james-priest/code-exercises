// require console log shorthand functions
const log = require( '../cl.js' );

/**
 * The cowboy-devs have asked for an improved toString method for their fence posts. Here is an example of the string message they want to generate:

Fence post #10:
Connected to posts:
11
12
13
Distance from ranch: 5 yards

1. Begin by creating a function to override the toString method on the Fencepost prototype. The function won’t need to take any parameters.
2. Inside the function, initialize a list variable to an empty string. We can use list to keep track of connected posts.
3. Loop through the connectionsTo array with a for loop (e.g., for (var i = 0; i < this.connectionsTo.length; i++))
4. Inside your for loop, concatenate the postNum property of each item in the connectionsTo array on to the list string.
5. Lastly, return a string message in the format above with the correct output:
    - The postNum of the current post (e.g., Fence post #10)
    - The message Connected to posts: followed by each postNum value from the items in the connectionsTo array, one per line
    - The output of calling valueOf() for the current post (e.g., Distance from ranch: 5 yards)

    The constructor and all of your previous prototype additions are provided for you as a reference for property names and procedures. 
 */

function Fencepost( x, y, postNum ) {
    this.x = x;
    this.y = y;
    this.postNum = postNum;
    this.connectionsTo = [];
}

Fencepost.prototype = {
    sendRopeTo: function( connectedPost ) {
        this.connectionsTo.push( connectedPost );
    },
    removeRope: function( removeTo ) {
        var temp = [];
        for ( var i = 0; i < this.connectionsTo.length; i++ ) {
            if ( this.connectionsTo[ i ].postNum != removeTo ) {
                temp.push( this.connectionsTo[ i ] );
            }
        }
        this.connectionsTo = temp;
    },
    movePost: function( x, y ) {
        this.x = x;
        this.y = y;
    },
    valueOf: function() {
        return Math.sqrt( this.x * this.x +
            this.y * this.y );
    }
};

// override the toString method
Fencepost.prototype.toString = function() {
    var list = "";
    for ( var i = 0; i < this.connectionsTo.length; i++ ) {
        list += this.connectionsTo[i].postNum + "\n";
    }
    return "Fence post #" + this.postNum + ":\n" +
        "Connected to posts:\n" + list +
        "Distance from ranch: " + this.valueOf() + " yards";
};

var post10 = new Fencepost( 2, 1, 10 );
var post11 = new Fencepost( 2, 2, 11 );
var post12 = new Fencepost( 3, 1, 11 );
var post13 = new Fencepost( 4, 2, 13 );

post10.sendRopeTo( post11 );
post10.sendRopeTo( post12 );
post10.sendRopeTo( post13 );
// post11.sendRopeTo( post10 );
// post12.sendRopeTo( post10 );
// post13.sendRopeTo( post10 );

log.cll( "post1.toString()", post10.toString() );