// require console log shorthand functions
const log = require( '../cl.js' );

/**
 * Now that there are so many fence posts everywhere, the cowboy-devs have noticed a significant drain on their memory resources. They’d like you to take a look around the Fencepost constructor and see if there’s anything you can add to a prototype, so that every fence post doesn’t have to carry around everything that it could get from just one place.

The current Fencepost constructor is provided in the challenge editor, with some additions that the cowboy-devs have made to improve functionality of the fence post objects.

Your job is to identify the portions of the constructor that should be available to all fence posts, and put those in a prototype for fence posts. Your answer should include both the modified constructor as well as the newly designed prototype for that constructor.

function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
  this.removeRope = function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  };
  this.movePost = function(x, y) {
    this.x = x;
    this.y = y;
  };
}
 */

// To add a new property to a prototype, you must add it to the constructor function:
function Fencepost(x, y, postNum, newProp) {
    this.x = x;
    this.y = y;
    this.postNum = postNum;
    this.newProp = newProp;
    // anything not set as a constructor parameter can be moved to prototype
}

Fencepost.prototype.connectionsTo = [];

Fencepost.prototype.sendRopeTo = function (connectedPost) {
    this.connectionsTo.push(connectedPost);
};

Fencepost.prototype.removeRope = function (removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
        if (this.connectionsTo[i].postNum != removeTo) {
            temp.push(this.connectionsTo[i]);
        }
    }
    this.connectionsTo = temp;
};

Fencepost.prototype.movePost = function (x, y) {
    this.x = x;
    this.y = y;
};

