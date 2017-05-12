/* Problem: Given two strings, create a function that checks if one string is a single edit from the other.  Either by adding a character, removing a character, or changing a character.
Thought process:

Example: pale, ple -> true (remove char), pales, pale -> true(add char), pale, bale -> true(change char), pale, bake -> false(two edits)
Brute force: The brute force would be to generate every single posisblity of a changed character, an added character, anda  removed character from the first string and see if the it contains the second string.  This is ridiculous and completely infeasible.
Optimize: I should compare the lengths of the words.  If they are the same, I should look for only one changed character.  if they are different lengths, I should check for a removed or added character via racheting.  This would be an O(n) solution
*/

export function checkForOneEdit(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  let charCountDiff = str1.length - str2.length;
  if (charCountDiff > 1 || charCountDiff < -1) {
    return false;
  }
  return charCountDiff === 0 ? checkForChangeChar(str1, str2) : checkForRemovedChar(str1, str2);
}

function checkForChangeChar(str1, str2) {
  let changeCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      changeCount++;
      if (changeCount > 1) {
        return false;
      }
    }
  }
  return true;
}

function checkForRemovedChar(str1, str2) {
  let diffCount = 0;
  let largerStr, smallerStr;
  if (str1.length > str2.length) {
    largerStr = str1;
    smallerStr = str2;
  }else {
    largerStr = str2;
    smallerStr = str1;
  }
  for(let i = 0; i < smallerStr.length; i++){
    if(largerStr[i+diffCount] !== smallerStr[i]) {
      diffCount++;
      if (diffCount > 1) {
        return false;
      }
    }
  }
  return true;
}

/* ********NOTES FROM THE BOOK*********
-The two methods could be combined into one method.  This is debated as to which is better.
-Other than that, my code was almost exactly what was written in the book.  Well done.

*/
