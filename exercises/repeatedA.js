// Complete the repeatedString function below.
function repeatedString(s, n) {
    let amountA = 0;
    let repeatedStr;
    let remainStr;
    let arrayA = [];
    let restStr = 0;
    if (s === 'a') {
      return n;
    } else {
      arrayA = s.match(/a/g);
      if (arrayA) {
        amountA = arrayA.length;
        repeatedStr = Math.floor(n / s.length);
        remainStr = s.slice(0,n % s.length);
      } else {
        return 0;
      }
    }
    if(remainStr.match(/a/g)) {
      restStr = remainStr.match(/a/g).length;
    }
    return amountA * repeatedStr + restStr;
  }

//console.log(repeatedString('aba', 10));
//console.log(repeatedString('ceebbcb', 817723));
console.log(repeatedString('gfcaaaecbg', 547602));
