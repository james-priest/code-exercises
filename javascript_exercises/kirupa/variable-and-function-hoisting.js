/**
 * Variable and Function Hoisting by Kirupa  
 * https://www.kirupa.com/html5/hoisting.htm
 */

// function foo() {
//   return "Yay!";
// }
// console.log(foo()); // Yay!

// console.log(foo()); // Yay!
// function foo() {
//   return "Yay!";
// }

// console.log(bar); // undefined
// var bar = 100;

var foo = function () {
    return "Yay!";
};
console.log(foo()); // Yay!

// console.log(foo()); // TypeError: foo is not a function
// var foo = function () {
//     return "Yay!";
// };
