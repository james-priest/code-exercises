/* eslint-disable */
/**
 * JavaScript VM Internals
 * http://jstherightway.org/#must-see
 */
/*
// v1
var a = 2;             // Global Scope (Window)
b = 1;                 // a | a=2    |   |
                       // f | f="λf" |---|------> Lambda "f"
function f(z) {        //   | b=1    |   | b=3    ('b' created at runtime)
    b = 3;             //   |        |   | c=4
    c = 4;             // ------------------------
    var d = 6;
    e = 1;             // Local execution scope for f()  (garbage collected)
                       // z | z=1    |   |
    function g() {     // d | d=6    |   | d=18
        var e = 0;     // g | g="λg" |---|------> Lambda "g"
        d = 3 * d;     //   | e=1    |   |
        return d;      // ------------------------
    }
                       // Local execution scope for g()  (garbage collected)
    return  g();       // e | e=0
    var e;             // ------------------------
}

f(1); //18
*/

// v2                   // Global Scope (Window)
var a = 2;              // a   | a=2    |   |
b = 1;                  // f   | f="λf" |---|------> Lambda "f"
                        // myG |        |   |------> Lambda "g"
function f(z) {         //     | b=1    |   | b=3    ('b' created at runtime)
    b = 3;              //     |        |   | c=4
    c = 4;              // ------------------------
    var d = 6;
    e = 1;             // Local execution scope for f() (NOT garbage collected)
                       // z | z=1    |   |
    function g() {     // d | d=6    |   | d=18
        var e = 0;     // g | g="λg" |---|------> Lambda "g" is not garbage collected
        d = 3 * d;     //   | e=1    |   |
        return d;
    }                  // Local execution scope for g()  (garbage collected)
                       // e | e=0
    return  g; // return function here
    var e;
}

var myG = f(1); // myG is a global reference to the function Object which is a closure
myG(); //18

