const minMaxSum = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 1; i < 5; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let maxSum = sum - min;
  let minSum = sum - max;

  console.log(minSum + " " + maxSum);
};

minMaxSum([1, 3, 5, 7, 9]);
