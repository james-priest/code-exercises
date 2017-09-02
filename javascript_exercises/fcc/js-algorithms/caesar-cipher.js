/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
 */
function rot13(str) { // LBH QVQ VG!
    var strArr = str.split("");
    console.log(strArr);

    // for (var i = 0; i < strArr.length; i++) {

    // }
    strArr.forEach(function (item, index, array) {
        // console.log(item.charCodeAt(), item.charCodeAt() - 13);
        if (item.match(/[N-Z]/)) {
            array[index] = String.fromCharCode(item.charCodeAt() - 13);
        } else if (item.match(/[A-M]/)) {
            array[index] = String.fromCharCode(item.charCodeAt() - 13 + 26);
        }
    
        // console.log(item, index);
    });
    // console.log(strArr.join(""));
    return strArr.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
//console.log(rot13("ABC"));