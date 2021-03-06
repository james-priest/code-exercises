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
    let strArr = str.split('');
  //   console.log(strArr);
  
    let newArr = strArr.map((val, idx, arr)=> {
      if(val.match(/[N-Z]/)) {
          return String.fromCharCode(val.charCodeAt() - 13);
      } 
      if(val.match(/[A-M]/)) {
          return String.fromCharCode(val.charCodeAt() - 13 + 26)
      } 
      return val;
        
    });
  //   console.log(newArr);
    console.log(newArr.join(''));
    return newArr.join('');
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  rot13("LBH QVQ VG!");