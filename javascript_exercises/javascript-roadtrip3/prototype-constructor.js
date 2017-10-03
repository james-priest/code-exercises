// require console log shorthand functions
const log = require( '../cl.js' );

// https://www.w3schools.com/js/js_object_prototypes.asp

// The constructor function is the prototype for Person objects.
// It is considered good practice to name constructor function with an upper-case first letter.
function Person(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
}
var myFather = new Person("Bob", "Priest", 78, "brown");
var myMother = new Person("Gladys", "Priest", 75, "brown");

// function expression - constructors can be function expressions too
// var myFriend = function (first, last, age, eyeColor) {
//     this.first = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyeColor;
// };

// myFriend("Joe", "Smith", 25, "brown");


log.cll("myFather instanceof Object", myFather instanceof Object);
log.cll("myFather instance of Person", myFather instanceof Person);
log.cll("myMother instanceof Person", myMother instanceof Person);
log.cl("");
log.cll("Object.prototype.isPrototypeOf(Person)", Object.prototype.isPrototypeOf(Person));
log.cll("Person.prototype.isPrototypeOf(myFather)", Person.prototype.isPrototypeOf(myFather));
log.cll("Person.isPrototypeOf(myFather)", Person.isPrototypeOf(myFather));
