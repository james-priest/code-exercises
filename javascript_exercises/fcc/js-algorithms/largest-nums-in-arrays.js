/**
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
 */
function largestOfFour(arr) {
    var newArray = [];
    
    for (var i = 0; i < arr.length; i++) {
        var innerBig;
        innerBig = arr[i].reduce(function (prevVal, currVal) {
            return (currVal > prevVal) ? currVal : prevVal;
        });
        // console.log(innerBig);
        newArray.push(innerBig);
    }
    return newArray;
}

var x = largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

console.log(x);