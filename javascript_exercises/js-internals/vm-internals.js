var a = 2;              // Global Scope (Window)
b = 2;                  // a    2
                        // f    ---------> Lambda "f"
function f(z) {         // b    1 (created at runtime)
    b = 3;              // ---------------------------
    c = 4;
    var d = 6;          // Local execution scope for f()
    e = 1;              // z
                        // d
    function g() {      // g    ---------> Lambda "g"
        var e = 0;      // e      (line 17 - variable hosting)
        d = 3*d;        // ---------------------------
        return d;
    }

    return  g();
    var e; // variable hoisting
}

f(1); //18