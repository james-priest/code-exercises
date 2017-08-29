/**
 * You can use the method sort to easily sort the values in an array alphabetically or numerically.

Unlike the previous array methods we have been looking at, sort actually alters the array in place. However, it also returns this sorted array.

sort can be passed a compare function as a callback. The compare function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.

If no compare (callback) function is passed in, it will convert the values to strings and sort alphabetically.

Here is an example of using sort with a compare function that will sort the elements from smallest to largest number:
 */
var array = [1, 12, 3, 21, 2];

array.sort();

console.log(array); // converts to char and sorts alphabetically

var array1 =  [1, 12, 3, 21, 2];
array1.sort(function (a, b) {
    return a - b; // sorts from smallest to largest
});
console.log(array1);

var array2 = [1, 12, 3, 21, 2];
array2.sort(function (a, b) {
    return b - a; // sorts from largest to smallest
});
console.log(array2);
