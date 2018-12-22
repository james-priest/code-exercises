/**
 * [x] 1. setTimeout in IIFE
 * [x] 2. setTimeout in a func of an obj literal
 * [x] 3. setTimeout in function expression
 */

// 1. IIFE - GOOD:
var reps = 3;

(function doStuff() {
    if (reps == 0)
        return;
    console.log(reps);

    reps--;
    setTimeout(doStuff, 1000);
})();

// 2. obj lit - BAD:
var obj = {
    rep: 5,
    doStuff: function () {
        if (this.rep == 0) {
            return;
        } else {
            console.log(this.rep);
            this.rep--;
            setTimeout(this.doStuff, 1000);
        }
           
        
    }
};

// var inst = obj;
// inst.doStuff();

// 2. obj lit GOOD:
var obj2 = {
    count: 3,
    repeat: function () {
        // bring vars down here so inner function can contain the variable count in it's closure scope
        var enclosedCount = this.count;
        
        function doSomething() {
            if (enclosedCount == 0) {
                return;
            } else {
                console.log(enclosedCount);
                enclosedCount--;
                setTimeout(doSomething, 1000);
            }
        }

        doSomething();
    }
};

// var inst = obj2;
// inst.repeat();

// 3. Function expression
var myFunc = function () {
    
    var outer = 3;

    function doStuff() {
        var inner = 3;
        if (outer == 0) {
            return;
        } else {
            for (; inner> 0; inner--) {
                console.log("in: " + inner);
            }
            console.log("outer: " + outer);
            outer--;
            setTimeout(doStuff, 1000);
        }
        
    }

    doStuff();
    return "done"; // occurs after first loop completes. Use Async?
};

var doIt = myFunc();
console.log(doIt);