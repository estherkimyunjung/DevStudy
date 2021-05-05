const flipCoin = (arr) => {
  let count = 0;
  let chageValueCount = 0;
  let valueCheck = 1;
  // console.log(arr, count);

  if (arr[0] === 0) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== valueCheck) {
        if (valueCheck === 0) {
          count++;
          valueCheck = 1;
        } else {
          count++;
          valueCheck = 0;
        }
      } else {
        if (valueCheck === 1) {
          valueCheck = 0;
        } else {
          valueCheck = 1;
        }
      }
    }
    chageValueCount++;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === valueCheck) {
        if (valueCheck === 0) {
          chageValueCount++;
          valueCheck = 1;
        } else {
          chageValueCount++;
          valueCheck = 0;
        }
      } else {
        if (valueCheck === 1) {
          valueCheck = 0;
        } else {
          valueCheck = 1;
        }
      }
    }

    return console.log(Math.min(count, chageValueCount));
  }
  //[1, 1, 1, 0, 1]
  if (arr[0] === 1) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === valueCheck) {
        if (valueCheck === 1) {
          count++;
          valueCheck = 0;
        } else {
          count++;
          valueCheck = 1;
        }
      } else {
        if (valueCheck === 0) {
          valueCheck = 1;
        } else {
          valueCheck = 0;
        }
      }
    }
    chageValueCount++;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === valueCheck) {
        if (valueCheck === 1) {
          chageValueCount++;
          valueCheck = 0;
        } else {
          chageValueCount++;
          valueCheck = 1;
        }
      } else {
        if (valueCheck === 0) {
          valueCheck = 1;
        } else {
          valueCheck = 0;
        }
      }
    }

    return console.log(Math.min(count, chageValueCount));
  }
};

flipCoin([0, 1, 1, 0, 1]);
//0 - 3, 1 - 2
flipCoin([0, 1, 1, 0, 1, 0, 0, 1]);
//[0, 1, 0, 1, 0, 1, 0, 1] - 4, [1, 0, 1, 0, 1, 0, 1, 0] - 4
flipCoin([1, 1, 1, 0, 1]);
// 0 - 4, 1 - 1
flipCoin([1, 1, 1, 0, 1, 0, 0, 1]);
//   [0, 1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 1, 0]
// 0 - 5, 1 - 3
