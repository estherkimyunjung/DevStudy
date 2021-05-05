const coinFlip = (arr) => {
  // console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i + 1] && arr[i + 1] !== 1) {
        arr[i + 1] = 1;
        count++;
        console.log("0", count);
      }
    } else {
      if (arr[i + 1] && arr[i + 1] !== 0) {
        arr[i + 1] = 0;
        count++;
        console.log("1", count);
      }
    }
    // console.log("i", i);
    // console.log("COUNT", count);
  }
  return console.log(count, arr);
};

// coinFlip([1, 0, 1, 1]);
// coinFlip([1, 0, 1, 0]);
// coinFlip([1, 1, 1, 1]);
coinFlip([1, 0, 0, 1, 1, 1]);
//no count
//[1,0,1,1,1,1] - 1
//[1,0,1,0,1,1] - 2
//[1,0,1,0,1,1] - 3
//[1,0,1,0,1,0] - 4
