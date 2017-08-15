/**
 * Closures in JavaScript by Kirupa  
 * https://www.kirupa.com/html5/closures_in_javascript.htm
 */

// function calculateRectangleArea(length, width) {
//     return length * width;
// }
// var roomArea = calculateRectangleArea(10, 10);
// console.log(roomArea);

// function youSayGoodBye() {
 
//     console.log("Good Bye!");
 
//     function andISayHello() {
//         console.log("Hello!");
//     }
 
//     return andISayHello;
// }
// var something = youSayGoodBye();
// something();

function stopWatch() {
    var startTime = Date.now();
 
    function getDelay() {
        var elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }
 
    return getDelay;
}
var timer = stopWatch();

// do something that takes some time
for (var i = 0; i < 1000000; i++) {
    var foo = Math.random() * 10000;
}
     
// invoke the returned function
timer();