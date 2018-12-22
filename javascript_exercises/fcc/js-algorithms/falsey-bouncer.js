/**
 * Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    // ES6
    //var newArr = arr.filter(item => Boolean(item));
    var newArr = arr.filter(function (item) {
        return Boolean(item);
    });
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([1, null, NaN, 2, undefined]));