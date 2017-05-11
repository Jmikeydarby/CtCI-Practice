/* Implement an algorith to determine if a string has all unique characters.
Thought process:

Example:  "aAbcdefghijkl" would return true and "abbcdefGghi" would return false
Brute force: Start at each character and check them against every other character in the string.  O(N!) Time.
Optimize: Create a set and check if each character is in the Set.  It not, add it to the set.  If so, return false.  If I get through every character, return true.  0(n) time
*/

// O(n)
export function UniqueCharacterCheck(str) {
  let charSet = new Set();

  for (let i = 0; i < str.length; i++){
    let charVal = str[i];
    if (charSet.has(charVal)){
      return false;
    }
    charSet.add(charVal);
  }
  return true;
}


/*What if you can't use additional data structures?
Could use the brute force method, but is there a better option?

*/
// O(n!)
export function UniqueCharacterCheckNoDS(str) {
  for (let i = 0; i < str.length; i++) {
    let charVal = str[i];
    for (let j = i+1; j < str.length; j++) {
      if (charVal === str[j]) {
        return false;
      }
    }
  }
  return true;
}


/* ******Notes based on Solution in Book********
-Ask if the string is in ASCII or Unicode.
-Check if the string is longer than the ASCII character limit if ASCII (128)  This would mean it's impossible to have all unique characters
-For the second half of the problem, I could have sorted the string and just checked the next character to see if it was the same.  This would be 0(n log(n)) time where the log(n) is the quick sort of the string.

*/
