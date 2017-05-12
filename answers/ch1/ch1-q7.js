/* Problem: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.  Can you do this in place?
Thought process:

Example: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
Brute force:
Optimize:

[0, 0] -> [0, 4]
[0, 1] -> [1, 4]
[0, 2] -> [2, 4]
[0, 3] -> [3, 4]
[0, 4] -> [4, 4]
[1, 0] -> [0, 3]
[1, 1] -> [1, 3]
[1, 2] -> [2, 3]
[1, 3] -> [3, 3]
[1, 4] -> [4, 3]
[2, 0] -> [0, 2]
[2, 1] -> [1, 2]
[2, 2] -> [2, 2]
[2, 3] -> [3, 2]
[2, 4] -> [4, 2]
[3, 0] -> [0, 1]
[3, 1] -> [1, 1]
[3, 2] -> [2, 1]
[3, 3] -> [3, 1]
[3, 4] -> [4, 1]
[4, 0] -> [0, 0]
[4, 1] -> [1, 0]
[4, 2] -> [2, 0]
[4, 3] -> [3, 0]
[4, 4] -> [4, 0]

[x, y] -> [y, abs(x-length)-1]

*/

export function rotateMatrix(mtx) {
  if(!mtx || mtx.length === 0){
    throw new Error("invalid matrix");
  }
  let rotMtx = [];
  for (let i = 0; i < mtx.length; i++){
    rotMtx[i] = [];
  }
  for (let x = 0; x < mtx.length; x++) {
    for (let y = 0; y < mtx.length; y++) {
      let val = mtx[x][y];
      let newY = Math.abs(x-mtx.length) - 1;
      rotMtx[y][newY] = val;
    }
  }
  return rotMtx;
}


/* ********NOTES FROM THE BOOK*********
-0(n^2) time.  my solution is well done.  Good job.
*/
