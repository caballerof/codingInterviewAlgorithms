/**
 * Determine is a string has all unique characters.
 * 
 */

 /**
  * Time complexity o(n) - Space complexity (n)
  * @param {Array} strArr `Array String`
  */
function isUnique(strArr) {
  const hashObj = {}

  for (let x = 0 ; x < strArr.length ; x++ ) {
    if ( strArr[x] in hashObj ) {
	    return false;
    }  else {
	    hashObj[strArr[x]]  = 1;
    }
  }

  return true;
} // end isUniq

module.exports = isUnique;
