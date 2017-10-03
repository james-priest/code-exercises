// map array function
var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

// Here's the map method using a reference to a pre-built function 
// (a function declared in code and reserved in memory) as the parameter 
var results1 = numbers.map(coolFunction); 
// Here's the same map method using a Function Expression in place of 
// a direct reference to a pre-defined function - this is LESS memory intensive & MORE EFFICIENT
var results2 = numbers.map(function (arrayCell) { return arrayCell * 2; });

// This is the long way of accomplishing what the map method does
var results3 = [];
for (var i = 0; i < numbers.length; i++) {
    results3[i] = coolFunction(numbers[i]);
}

// Here's the function that is referenced to do the work on each array cell
function coolFunction(arrayCell) {
    return arrayCell * 2;
}

// The array's map method conveniently takes the entire loop format
// and consolidates it to one line of code

console.log("numbers ", numbers);
console.log("results1", results1);
console.log("results2", results2);
console.log("results3", results3);
