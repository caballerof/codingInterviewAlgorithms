/**
 * Given two strings, write a funtion to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase,or name formed by earranging the letters of another, such as cinema, formed from iceman.
 *
 * @param {*} str1 First word to compared
 * @param {*} str2 Second word to compared
 *
 * @returns Boolean return true if the two words are an anagram or false in other case.
 */

function isAnagram(str1, str2) {
  const countLetters = {};
  const str1Array = str1.split('');
  const str2Array = str2.split('');

  for (let x = 0; x < str1Array.length; x++) {
    if (str1Array[x] in countLetters) {
      countLetters[str1Array[x]]++;
    } else {
      countLetters[str1Array[x]] = 1;
    }
  }

  for (let x = 0; x < str2Array.length; x++) {
    if (str2Array[x] in countLetters) {
      countLetters[str2Array[x]]--;
    } else {
      countLetters[str2Array[x]] = -1;
    }
  }

  const countLettersKeys = Object.keys(countLetters);

  for (let key of countLettersKeys) {
    if (countLetters[key] != 0) {
      return false;
    }
  }

  return true;
}

//console.log(isAnagram('anagram', 'nagaram'));

//* /
console.log(isAnagram('', '')); // true
console.log(isAnagram('aaa', 'bbb')); // false
console.log(isAnagram('aaz', 'zza')); // false
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('fringe', 'finger')); // true
console.log(isAnagram('1234', 'ertg')); // false
// */
