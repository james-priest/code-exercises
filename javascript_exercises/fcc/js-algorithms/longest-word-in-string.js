/**
 * Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
 */
function findLongestWord(str) {
    var words = str.split(" ");
    var longWord = "";

    //   console.log(words);

    longWord = words.reduce(function (previousVal, currentVal) {
        //     previousVal = (previousVal === undefined)? currentVal: previousVal;
        // console.log("p:", previousVal);
        // console.log("c:", currentVal);
        // console.log("pl:", previousVal.length);
        // console.log("cl:", currentVal.length);
        return (currentVal.length > previousVal.length) ? currentVal : previousVal;
    });
    console.log(longWord, " ", longWord.length);
    return longWord.length;
}

var a = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(a);