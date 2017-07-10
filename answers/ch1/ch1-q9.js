/* Problem: Given a method called isSubstring which checks if one word is a substring of another.  Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
Thought process:

Example: "waterbottle" is a rotation of "erbottlewat"
Brute force:
Optimize:
*/

export function isRotation(str1, str2) {
  if (!str1 || !str2) {
    throw new Error("invalid input");
  }else if (str1.length !== str2.length) {
    return false;
  }
  return isSubstring(str1, str2+str2);
}

function isSubstring(substring, longstring) {
  return longstring.includes(substring);
}

/* ********NOTES FROM THE BOOK*********
-The way to do this is to take the rotated string, and add it to itself.  Then use isSubstring to check if the non-rotated string is a substring of this string.  so you would call isSubstring("erbottlewaterbottlewat", "waterbottle") and this would return true.
-The tests don't seem to actually test for this, so I will test myself later.
*/
