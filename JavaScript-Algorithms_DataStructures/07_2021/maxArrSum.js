const maxArrSum = (arr) => {
  if (arr == null || arr.length == 0) {
    // Edge case
    return 0;
  }
  let n = arr.length;
  if (n == 1) {
    // Edge case
    return arr[0];
  }
  // Base case start from index 0 and 1
  let max = Math.max(arr[0], arr[1]);
  arr[1] = max;
  for (let i = 2; i < arr.length; i++) {
    max = Math.max(arr[i - 2] + arr[i], max); // Max uptill now
    max = Math.max(arr[i], max); // Max in special case where
    // arr[i] + previous max is still less than arr[i]
    // update our inplace array with max for future calculations
    arr[i] = max;
  }
  return console.log(max);
};

maxArrSum([3, 7, 4, 6, 5]);
