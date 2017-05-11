/* Problem: Write a method to replace all spaces with "%20" as if to turn it into a URL
Thought process:

Example: "Mr John Smith" -> "Mr%20John%20Smith"
Brute force: Run through each character, check if it's a space and replace with a "%20"
Optimize: A regex will work well here.  Make sure to remove any white space at the end.  Needs to work with null and undefined as well
*/

export function urlifyWhitespace(str) {
  console.log(str);
  if(typeof str !== "string"){
    return str;
  }
  return str.replace(/ /g, "%20");
}


// I seem to have done this one well.  Congratz to me.  This was made a lot easier by being in javascript though.  With its string methods for replace and what not.
