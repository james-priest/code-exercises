/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()
 */
function getIndexToIns(arr, num) {
    // var pos;
    arr.sort(function (a, b) {
        return a - b; 
    });
    for (var i = 0; i <= arr.length; i++){
        if (num <= arr[i]) {
            arr.splice(i, 0, num);
            return i;
        }
    }
    return arr.push(num) - 1;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));