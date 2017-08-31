/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()

 */

function titleCase(str) {
    var wordsArr = str.split(" ");
    console.table(wordsArr);
    var newWordsArr = wordsArr.map(function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    });
    str = newWordsArr.join(" ");
    return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));