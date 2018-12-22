/**
 * An object literal Singleton 
 */
var user = {
    firstName: "John",
    lastName: "Doe",
    pause: 3,
    introduced: false,
    walksIntoABar: function() {
        if(!this.introduced) {
            this.introduced = true;
            return this._setupJoke();
        } else {
            return this._punchLine();
        }
    },
    sayName: function () {
        return "Hello patrons, my name is " + this.firstName + " " + this.lastName + " and I have a joke.";
    },
    setupJoke: function() {
        // TODO: Add dot, dot, dot to setInterval before punchline
        return "What's invisible and smells like carrots...";
    },
    setupPause: function() {
        // TODO: Add dot, dot, dot to setInterval before punchline
        //return "What's invisible and smells like carrots...";
        // (function(index){
        console.log("before 0 check:" + this.pause);
        if(this.pause == 0)
            return;
        console.log(".");
        console.log("after 0 check:" + this.pause);
        
        this.pause--;
        console.log("after increment:" + this.pause);
        setTimeout(this.setupPause, 2000);
        // })(this.pause);
    },
    punchLine: function() {
        return "bunny farts.😲😂😐";
        // TODO: use setInterval to print out dot, dot, dot, punchline 
    }
};

// console.log(user);

// If you've ever written an object literal then you've created a Singleton.
// The most famous Singleton is: $.
// To put it another way, ever notice how you can use jQuery anywhere in your
// app after you've included it on the page...? Boom! Singleton!

// Usage
var someGuy = user;

console.clear();
// console.log(someGuy.sayName());
// console.log(someGuy.walksIntoABar());
// console.log(someGuy.walksIntoABar());

// document.writeln(someGuy.sayName());
// document.writeln(someGuy.setupJoke());
// document.writeln(someGuy.punchLine());
// document.write(someGuy.setupJoke());
// console.log(someGuy.setupJoke());
someGuy.setupPause();

