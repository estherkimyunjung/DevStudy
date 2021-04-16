const collectOddValues = (nums) => {
  let result = [];

  function findOdd(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    findOdd(arr.slice(1));
  }

  findOdd(nums);
  return console.log(result);
};

collectOddValues([1, 2, 3, 4, 5]);
