// binary search O(n)
// const search = (arr, val) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return console.log(`index #${i}`);
//     }
//   }
//   return console.log("not exist");
// };

// Refactor logO(n)

const search = (arr, val) => {
  let minIndx = 0;
  let maxIndx = arr.length - 1;
  while (minIndx <= maxIndx) {
    let midIndex = Math.floor((minIndx + maxIndx) / 2);
    let currentElement = arr[midIndex];

    if (currentElement < val) {
      minIndx = midIndex + 1;
    } else if (currentElement > val) {
      maxIndx = midIndex - 1;
    } else {
      return console.log(`Index #${midIndex}`);
    }
  }
  return console.log("Not exist");
};

search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 16);
search([1, 3, 6, 12], 9);
