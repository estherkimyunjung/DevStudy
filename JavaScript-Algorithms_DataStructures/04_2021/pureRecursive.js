const collectOddValues = (arr) => {
  let newArray = [];

  if (arr.length === 0) {
    return newArray;
  }

  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }

  newArray = newArray.concat(collectOddValues(arr.slice(1)));
  console.log(newArray);
  return newArray;
};

collectOddValues([1, 2, 3, 4, 5]);
