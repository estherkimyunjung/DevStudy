const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return console.log(true);
    else if (avg < num) start++;
    else end--;
  }
  return console.log(false);
};

averagePair([1, 2, 3], 3);
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
