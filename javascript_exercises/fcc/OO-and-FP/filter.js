/**
 * The filter method is used to iterate through an array and filter out elements where a given condition is not true.

filter is passed a callback function which takes the current value (we've called that val) as an argument.

Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

The following code is an example of using filter to remove array elements that are equal to five:

Note: We omit the second and third arguments since we only need the value 
 */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array1 = array.filter(function (val) {
    // return val !== 5;
    return !(val % 2); //even number
});

console.log(array);
console.log(array1);

// Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.
var oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = oldArray.filter(function (val) {
    return val < 6;
});

console.log(newArray);

// ES6
var newArray2 = oldArray.filter(val => !(val < 6));
console.log(newArray2);