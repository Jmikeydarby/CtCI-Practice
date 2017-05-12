/* Problem: Given a string, write a function that checks to see if it is a permutation of a palindrome
Thought process:

Example: "tact coa" => true because it is a permutation of "taco cat" which is a palindrome
Brute force: The brute force would be to generate every single possible permutation of the word and check if any of them are palindromes.
Optimize: An optimization would be to sort the word first, then check if every letter is paired with another or there is only 1 letter that is alone.  This would be O(n log(n))  But I don't need to sort it, just run through it one time, but this wouldn't nessecarily be faster.  That would be O(n).  Note that this ignores whitespace as well.  i'm gonna try both.
*/

export function PalindromePermutation(strArr) {
  if(!strArr) {
    return false;
  }
  let sortedStr = strArr.filter(val => {return val !== " "}).sort();
  let even = sortedStr.length%2;
  for (let i = 0; i < sortedStr.length; i+=2) {
    if (sortedStr[i] !== sortedStr[i+1]) {
      if (!even) {
        return false;
      }else {
        even --;
      }
    }
  }
  return true;
}


export function PalindromePermutation2(strArr) {
  if(!strArr) {
    return false;
  }
  let hashMap = {};
  for (let i = 0; i < strArr.length; i ++) {
    if (strArr[i] === " ") {
      continue;
    }else if (hashMap.hasOwnProperty(strArr[i])){
      hashMap[strArr[i]]++;
    }else {
      hashMap[strArr[i]] = 1;
    }
  }
  let soloChar = 0;
  for (let key in hashMap) {
    if(hashMap[key] === 1) {
      if (soloChar === 1) {
        return false;
      }else {
        soloChar++;
      }
    }
  }
  return true;
}

/* **********NOTES FROM THE BOOK*************
-The second solution is more efficient sicne it is O(n) time and the first will always be O(n log(n)) because of the quicksort.
-Another way to do this is to count the odds in the first for loop and at the end make sure I have <= 1 odds.  This is an optimization, but isn't nessecarily faster since you're doing more calculations per element.
-bit vectors would be very fast here, see page 198 in the book for more review on how bit vectors work.  the general idea is to end up with a bit, subtract 1, then & it with the new number and if it's 0 then you're fine.
*/
