const maxSubArray = (arr) => {
  let localMax = 0;
  let globalMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    localMax = Math.max(arr[i], arr[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return console.log(globalMax);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const twoMaxSum = (arr, m) => {
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
  return console.log("global", max);
};

twoMaxSum([3, 7, 4, 6, 5]);

function globalMax(arr, n) {
  let i,
    j,
    max = 0;
  let msis = new Array(n);

  // Initialize msis values
  // for all indexes
  for (i = 0; i < n; i++) msis[i] = arr[i];

  // Compute maximum sum values
  // in bottom up manner
  for (i = 1; i < n; i++)
    for (j = 0; j < i; j++)
      if (arr[i] > arr[j] && msis[i] < msis[j] + arr[i])
        msis[i] = msis[j] + arr[i];

  // Pick maximum of
  // all msis values
  for (i = 0; i < n; i++) if (max < msis[i]) max = msis[i];

  console.log(msis);
  return max;
}

// Driver Code
let arr = [1, 101, 2, 3, 100, 4, 5];
let n = arr.length;
console.log(
  "Sum of maximum sum increasing " + "subsequence is " + globalMax(arr, n)
);
