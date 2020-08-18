/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let sum = 0;
  let n = arr.length
  for (let i = 0; i < n; i++) {
      sum += arr[i][i] - arr[i][n-1-i];
  }
  return(sum >= 0 ? sum : sum * -1);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])
