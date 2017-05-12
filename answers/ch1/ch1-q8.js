/* Problem: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.``
Thought process:

Example:
Brute force:
Optimize: Create two sets, for x and y, and keep track of all the values that should be replaced.  Then run through the matrix again and change the values.
*/

//O(n^2)
export function zeroMatrix(mtx) {
  if (!mtx || mtx.length === 0) {
    throw new Error("invalid matrix");
  }
  let xSet = new Set();
  let ySet = new Set();
  for (let x = 0; x < mtx.length; x++) {
    for (let y = 0; y < mtx[x].length; y++) {
      if(mtx[x][y] === 0) {
        xSet.add(x);
        ySet.add(y);
      }
    }
  }
  for (let x = 0; x < mtx.length; x++) {
    for (let y = 0; y < mtx[x].length; y++) {
      if(xSet.has(x) || ySet.has(y)){
        mtx[x][y] = 0;
      }
    }
  }
  return mtx;
}


/* ********NOTES FROM THE BOOK*********
-Bit vectors would be better space complexity.  See p206 in the book for more.
-ONCE MORE REMEMBER TO CHECK FOR VALID INPUT!!!!!!!!!!!!
*/
