/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
 */
function checkCashRegister(price, cash, cid) {
  var change =[],
    status='',
    amtBack = cash - price,
    remainder = amtBack;
  const MONEY = { 
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }
  // Here is your change, ma'am.
  console.log(`price:${price} cash:${cash}`);
  console.log(`amtBack: ${amtBack}`);
  console.log(`remainder: ${remainder}`);

  // var huns
  var changeArr = cid.reverse().map((item, idx, arr) => {
    console.log(item);
    var div = (remainder < item[1]) ? remainder : item[1];
    
    switch (item[0]) {
      case "ONE HUNDRED":
        if (amtBack >= MONEY["ONE HUNDRED"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var huns = Math.floor(amtBack/100);
          var huns = Math.floor(div/100);
          console.log(`huns: ${huns}`);
          // remainder = (amtBack % 100).toFixed(2);
          remainder = (remainder - (huns * 100)).toFixed(2);
          console.log(remainder);
          return ["ONE HUNDRED", huns];
        }
        break;
      case "TWENTY":
        if(remainder >= MONEY["TWENTY"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var twens = Math.floor(remainder/20);
          var twens = Math.floor(div/20);
          console.log(`twens: ${twens}`);
          // remainder = (remainder % 20).toFixed(2);
          remainder = (remainder - (twens * 20)).toFixed(2);
          console.log(remainder);
          return ["TWENTY", twens * 20];
        }
        break;
      case "TEN":
        if(remainder >= MONEY["TEN"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var tens = Math.floor(remainder/10);
          var tens = Math.floor(div/10);
          console.log(`tens: ${tens}`);
          // remainder = (remainder % 10).toFixed(2);
          remainder = (remainder - (tens * 10)).toFixed(2);
          console.log(remainder);
          return ["TEN", tens * 10];
        }
        break;
      case "FIVE":
        if(remainder >= MONEY["FIVE"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var fives = Math.floor(remainder/5);
          var fives = Math.floor(div/5);
          console.log(`fives: ${fives}`);
          // remainder = (remainder % 5).toFixed(2);
          remainder = (remainder - (fives * 5)).toFixed(2);
          console.log(remainder);
          return ["FIVE", fives * 5];
        }
        break;
      case "ONE":
        if(remainder >= MONEY["ONE"]) {
          var div = (remainder < item[1]) ? remainder : item[1];
          // var ones = Math.floor(remainder/1);
          var ones = Math.floor(div/1);
          console.log(`ones: ${ones}`);
          // remainder = (remainder % 1).toFixed(2);
          remainder = (remainder - (ones * 1)).toFixed(2);
          console.log(remainder);
          return ["ONE", ones];
        }
        break;
      case "QUARTER":
        if(remainder >= MONEY["QUARTER"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          console.log(`div: ${div}`);
          // var quarts = Math.floor(remainder/.25);
          var quarts = Math.floor(div/.25);
          console.log(`quarts: ${quarts}`);
          // remainder = (remainder % .25).toFixed(2);
          remainder = (remainder - (quarts * .25)).toFixed(2);
          console.log(remainder);
          return ["QUARTER", quarts * .25];
        }
        break;
      case "DIME":
        if(remainder >= MONEY["DIME"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var dimes = Math.floor(remainder/.1);
          var dimes = Math.floor(div/.1);
          console.log(`dimes: ${dimes}`);
          // remainder = (remainder % .1).toFixed(2);
          remainder = (remainder - (dimes * .1)).toFixed(2);
          console.log(remainder);
          return ["DIME", dimes * .1];
        }
        break;
      case "NICKEL":
        if(remainder >= MONEY["NICKEL"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var nickles = Math.floor(remainder/.05);
          var nickles = Math.floor(div/.05);
          console.log(`nickles: ${nickles}`);
          // remainder = (remainder % .05).toFixed(2);
          remainder = (remainder - (nickles * .05)).toFixed(2);
          console.log(remainder);
          return ["NICKEL", nickles * .05];
        }
        break;
      case "PENNY":
        if(remainder >= MONEY["PENNY"]) {
          // var div = (remainder < item[1]) ? remainder : item[1];
          // var pennies = Math.floor(remainder/.01);
          var pennies = Math.floor(div/.01);
          console.log(`pennies: ${pennies}`);
          // remainder = (remainder % .01).toFixed(2);
          remainder = (remainder - (pennies * .01)).toFixed(2);
          console.log(remainder);
          return ["PENNY", pennies * .01];
        }
        break;
    }
  });

  // console.log(`changeArr: ${JSON.stringify(changeArr)}`);
  // console.log(`changeArr: ${JSON.stringify(changeArr.filter(obj=>obj))}`);
  var compactArr = changeArr.filter(obj=>obj);
  console.log(`compactArr: ${JSON.stringify(compactArr)}`);

  // check for INF
  var inf = false;
  var regCash = 0;
  cid.forEach(item => {
    regCash += item[1];
  });

  // var tot = 0;
  // compactArr.reverse().forEach(x => {
  //   tot = amtBack - x[1];
  // })
  // console.log(`tot: ${tot}`);
  console.log(`remainder: ${remainder}`)
  console.log(`regCash: ${regCash}`)
  console.log(`amtBack: ${amtBack}`)
  if(regCash > amtBack) {
    status = "OPEN";
    change = compactArr;
  } else if (regCash < amtBack) {
    status = "INSUFFICIENT_FUNDS"
    change = [];
  } else {
    status = "CLOSED"
    change = cid.reverse();
  }
  if (remainder > 0) {
    status = "INSUFFICIENT_FUNDS"
    change = [];
  }

  // if (inf) {
  //   status = "INSUFFICIENT_FUNDS";
  //   change = [];
  // } else {
  //   status = "OPEN"
  //   change = compactArr;
  // }

  // hard-code
  // status='OPEN';
  // change =[['DOLLAR',3],['QUARTER', 0.5]];  
  // console.log(JSON.stringify(change));
  var ret = {
    "status": status,
    "change": change
  };
  console.log(JSON.stringify(ret));
  return ret;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", .25], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
