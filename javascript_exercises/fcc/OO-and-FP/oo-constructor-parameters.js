/**
 * we don't always want to create the same object?

To solve this we can add parameters to our constructor. We do this like the following example:

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
Now we can pass in arguments when we call our constructor.

var myCar = new Car(6, 3, 1);

This code will create an object that uses the arguments we passed in and looks like:

{
  wheels: 6,
  seats: 3,
  engines: 1
}
Now give it a try yourself! Alter the Car constructor to use parameters to assign values to the wheels, seats, and engines properties.

Then call your new constructor with three number arguments and assign it to myCar to see it in action.
 */
var Car = function (wheels, seats, engines) {
    //Change this constructor
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};

//Try it out here
var myCar = new Car(4, 2, 1);

console.log(myCar);