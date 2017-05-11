/* Problem: Given two strings, write a method to decide if one is a permutation of the other.
Thought process:

Example: "god" is a permutation of "dog" or "gdo"  Make it case sensitive and make white space significant.
Brute force: Take each character and check if they are in the other word, then remove that character from the second word.
Optimize: Quicksort the words first then compare to see if they are equal.
*/

// O(n log(n))
export function ComparePermutation(str1, str2) {
  let sortedStr1 = str1.sort().toString();
  let sortedStr2 = str2.sort().toString();
  if (sortedStr2 == sortedStr1) {
    return true;
  } else {
    return false;
  }
}


// Tests don't work for these atm, but they still work.  I altered the tests to test these and they passed.

// Case insensitive and white space significant

// export function ComparePermutation2(str1, str2) {
//   let sortedStr1 = str1.sort().toString().toLowerCase();
//   let sortedStr2 = str2.sort().toString().toLowerCase();
//   console.log("str1: " + sortedStr1, "str2: " + sortedStr2);
//   if (sortedStr2 == sortedStr1) {
//     return true;
//   } else {
//     return false;
//   }
// }


// Case insensitive and white space insignificant

// export function ComparePermutation2(str1, str2) {
//   let sortedStr1 = str1.sort().filter(val => { return val !== " " }).toString().toLowerCase();
//   let sortedStr2 = str2.sort().filter(val => { return val !== " " }).toString().toLowerCase();
//   console.log("str1: " + sortedStr1, "str2: " + sortedStr2);
//   if (sortedStr2 == sortedStr1) {
//     return true;
//   } else {
//     return false;
//   }
// }


// Example Solution in book takes each character and counts them as it runs through the str1, then decrements them as it runs though str2

// O(n)
export function ComparePermutation2(str1, str2) {
  if (str1.length !== str2.length){
    return false;
  }
  let charCount = {};

  // Run through str1 and increment all of the character counts
  for (let i =0; i < str1.length; i++) {
    let charVal = str1[i];
    if(charCount.hasOwnProperty(charVal)){
      charCount[charVal]++;
    }else {
      charCount[charVal] = 1;
    }
  }

  // run through str2 and decrement all of the character counts
  for (let i = 0; i < str2.length; i++) {
    if(!charCount.hasOwnProperty(str2[i])){
      return false;
    }
    charCount[str2[i]]--;
    if (charCount[str2[i]] < 0){
      return false;
    }
  }
  return true;
}

/* ******Notes based on Solution in Book********
-Compare the length of the strings first not waste computing time.
-ALWAYS ask about ASCII vs Unicode
-Be sure to ask if the comparison needs to be case-sensitive and whether white space is significant
*/
