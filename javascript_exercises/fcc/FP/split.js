/**
 * You can use the split method to split a string into an array.

split uses the argument you pass in as a delimiter to determine which points the string should be split at.

Here is an example of split being used to split a string at every s character:

var array = string.split('s');

Use split to create an array of words from string and assign it to array.
 */
var string = "Split me into an array";
var array = [];

array = string.split(" ");

console.log(array);