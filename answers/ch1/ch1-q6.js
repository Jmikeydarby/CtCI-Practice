/* Problem: Implement a method that performs basic string compression using the counts of repeated characters.  If the compresssed string would not be smaller than the original string, return the original string.  The string only has upper and lowercase letters (a-z)
Thought process: I should first ask if case matters.  We'll assume not for this function.

Example: "aabcccccaaa" -> "a2b1c5a3"
Brute force: Not sure what a brute force one is.  I can only think of the following 0(n) solution
Optimize: Run through each character and count how many characters after it are the same.  When it becomes different, add the letter and count to a new string and switch the letter.
*/

// O(n)
export function compressString(str) {
  if (typeof str !== 'string') {
    return str;
  }
  let compStr = "";
  let currentChar = str[0];
  let charCount = 1;
  for(let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      charCount++;
    }else {
      compStr = compStr + currentChar + charCount;
      currentChar = str[i];
      charCount = 1;
    }
  }
  compStr = compStr + currentChar + charCount;
  return (compStr. length < str.length) ? compStr : str;
}

/* ********NOTES FROM THE BOOK*********
-Use a StringBuilder instead.  String concatanation is a very slow process in other languages.  I think it's ok in Javascript because of the nature of how strings are all arrays, but keep that in mind.
-It is posisble to calculate the length of the compressed string before creating it, thus being able to return the original string if it's not shorter, but that isn't nessecarily better.
*/
