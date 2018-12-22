/**
 * Preethi Kasireddy's blog post: What does it mean when code is “easy to reason about”?
 * URL: http://preethikasireddy.me/2016/11/28/what-does-it-mean-when-code-is-easy-to-reason-about/
 * YouTube Lecture: https://youtu.be/u6cGusZ0pGc
 */
var multiplier = 3;

/**
 * 
 * @param {array} array - The original array
 * @returns {array} - Returns the array with each element multiplied by 3
 */
function multiplyByThree(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * multiplier;
    }

    return array;
}

function a(b, c) {
    return b + c;
}

/**
 * 
 */

// test
var array = [1, 2, 3];
multiplyByThree(array); // [3, 6, 9]

var array = [0, 12];
multiplyByThree(array); // [0, 36]

var array = [123];
multiplyByThree(array); //[369]