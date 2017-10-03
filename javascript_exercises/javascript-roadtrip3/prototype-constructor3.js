// require console log shorthand functions
const log = require( '../cl.js' );

/**
 * Now the cowboy-devs are so excited about their robotic fence posts that they’ve decided to make a constructor function for fence posts, to which they can pass a few parameters and get back a new instance of a post.

Your job is to take the existing genericPost and rebuild all of its properties inside a single Fencepost constructor.

For this challenge, you need to use only dot notation.
 */
var genericPost = {
    x: 0,
    y: 0,
    postNum: undefined,
    connectionsTo: undefined,
    sendRopeTo: function (connectedPost) {
        if (this.connectionsTo == undefined) {
            var postArray = [];
            postArray.push(connectedPost);
            this.connectionsTo = postArray;
        } else {
            this.connectionsTo.push(connectedPost);
        }
    }
};

/**
 *
1. Create a Fencepost function and pass in parameters for x, y, and postNum.
2. Inside the function, use this to assign those parameters to property names that shadow the ones in genericPost.
3. Rather than passing in connectionsTo as a parameter, initialize that property to an empty array value inside the function.
4. Then, add sendRopeTo as a method inside the Fencepost function.
5. Since the function already expects an array to be present, we no longer need a conditional to check for an undefined value. Remove the conditional statements and modify the sendRopeTo method so that it takes in connectedPost as a parameter, and then pushes connectedPost onto the connectionsTo array.
 */
function Fencepost(x, y, postNum) {
    this.x = x;
    this.y = y;
    this.postNum = postNum;
    this.connectionsTo = [];

    this.sendRopeTo = function (connectedPost) {
        this.connectionsTo.push(connectedPost);
    };
}

/**
 * Now that we’ve got a Fencepost constructor function, let’s create some posts! The cowboy-devs need three new posts for the Plains:

x: -3,
y: 4,
postNum: 18

x: 5,
y: -1,
postNum: 19

x: -2,
y: 10,
postNum: 20
Use your Fencepost constructor function to create these new posts. Name each of your posts post<number> with the correct number from the postNum property.

Then, connect them with the sendRopeTo function using the following criteria, and remember that one connection requires ropes to be sent from both posts:

1. If two posts both have even-numbered y coordinates, they should be connected.
2. If two posts both have odd-numbered x coordinates, they should be connected.
 */
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);