// require console log shorthand functions
const log = require( '../cl.js' );

// https://www.w3schools.com/js/js_object_prototypes.asp

// The constructor function is the prototype for Shoe objects.
// It is considered good practice to name constructor function with an upper-case first letter.
function Shoe(shoeSize, shoeColor, forGender, constructStyle) {
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;

    // this can be done in the prototype
    // this.putOn = function () { console.log("On!"); };
    // this.takOff = function () { console.log("Off!"); };
}

// Syntax #1
Shoe.prototype = {
    putOn: function () { console.log("Your " + this.construction + " is On!"); },
    takeOff: function() { console.log("Your size " + this.size + " shoe is Off!"); }
};
// Syntax #2
Shoe.prototype.putOn = function() {
    console.log("Your " + this.construction + " is On!"); 
};
Shoe.prototype.takeOff = function() {
    console.log("Your size " + this.size + " shoe is Off!");
};
// Syntax #1 & Syntax #2 are equivalent



var beechShoe = new Shoe(10, "blue", "women", "flipflop");
beechShoe.putOn();
log.cll("beechShoe.hasOwnProperty(\"construction\")", beechShoe.hasOwnProperty("construction"));