var newCustomer = false;
var greeting;
// var greeting = function () {
//     console.log("hello");
// };
if (newCustomer) {
    greeting = function () {
        console.log("new");
    };
} else {
    greeting = function () {
        console.log("old");
    };
}

closeTerminal(greeting);

function closeTerminal(message) {
    message();
}

