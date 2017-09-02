/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
 */

function destroyer(arr) {
    // console.log("arguments[0]",arguments[0]);
    // console.log("arguments[1]",arguments[1]);
    // console.log("arguments[2]", arguments[2]);
    var arg = [];

    for (var i = 1; i < arguments.length; i++) {
        console.log("arguments[" + i + "]", arguments[i]);
        arg.push(arguments[i]);
    }
    // console.log("arguments.length:", arguments.length);

    return  arr.filter(function (item) {
        console.log("item:", item);
        for (var i = 0; i < arg.length; i++){
            console.log("arg[i]", arg[i]);
            if (item === arg[i]) {
                return false;               
            }
        }
        return true;
    });
}

console.log(destroyer([1, 2, 3,1,2,3], 2, 3));