// sliding window pattern by loop  O(n^2)
// const maxSubarraySum = (arr, num) => {
//   if (num > arr.length) {
//     return console.log(null);
//   }
//   let max = -Infinity; // if there is - num
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return console.log(max);
// };

//Refactor O(n)

const maxSubarraySum = (arr, num) => {
  if (arr.length < num) {
    return console.log(null);
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return console.log(maxSum);
};

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
