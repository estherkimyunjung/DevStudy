const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return console.log(0);
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return console.log(i + 1);
};

countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
countUniqueValues([]);