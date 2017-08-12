/**
 * Object literal that creates a function property and uses 
 * recursive setTimeout, variable hoisting, and a closure to access variables
 * in outer scope. In other words, the closure is used to pass variable
 * context to the inner function.
 */
var user = {
    firstName: "John",
    lastName: "Doe",
    pauseReps: 4,
    pauseTime: 2000,

    walksIntoABar: function() {
        if(!this.introduced) {
            this.introduced = true;
            return this._setupJoke();
        } else {
            return this._punchLine();
        }
    },
    sayName: function () {
        return "Hi my name is " + this.firstName + " " + this.lastName + " and I have a joke.";
    },
    sgetJokeSetup: function() {
        return "What's invisible and smells like carrots...";
    },
    setupPause: function () {
        var pauseRep = this.pauseReps;
        var pauseTime = this.pauseTime;
        var punchLine = this.punchLine;

        function timeoutHandler() {
            if (pauseRep == 0) {
                console.log(punchLine());
                return;
            } else {
                console.log(".");

                pauseRep--;
                setTimeout(timeoutHandler, pauseTime);
                // https://stackoverflow.com/questions/25889950/settimeout-and-recursive-function-with-parameters
            }
        }
       
        timeoutHandler();
    },
    punchLine: function() {
        return "bunny farts.😲😂😐";
    }
};

// console.log(user);
var someGuy = user;

console.clear();
//console.log(someGuy.sayName());
console.log();
console.log(someGuy.getJokeSetup()); 
someGuy.setupPause();
