/**
 Formula: https://www.mathsisfun.com/roman-numerals.html

 Convert the given number into a roman numeral.
 */

function convertToRoman(num) {
  // try {
      if (num < 1 || num > 3999) return;
      const uni = ['I','II','III','IV','V','VI','VII','VIII','IX'],
          dec = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
          cent = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
          mil = ['M','MM','MMM'];

      let numArr = num.toString().split('').reverse();
      console.log(`numArr: ${numArr.join(',')}`);
      let newNumArr = numArr.map((val, idx) => {
          let rn;

          switch (idx) {
              case 0:
                  rn = uni[val-1];
                  break;
              case 1:
                  rn = dec[val-1];
                  break;
              case 2:
                  rn = cent[val-1];
                  break;
              case 3:
                  rn = mil[val-1];
                  break;
          }
          console.log(`idx: ${idx}, val: ${val}, rn: ${rn}`);
          return rn;
       });
  // }
  // catch(error) {
  //     console.log(`Caught Err - ${error}`);
  // }
  const romanNum = newNumArr.reverse().join('');
  console.log(romanNum);
  return romanNum;
}

convertToRoman(3999);