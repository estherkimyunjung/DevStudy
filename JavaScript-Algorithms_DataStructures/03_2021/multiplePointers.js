//Bubble Sort  O(n^2)
// const sumZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return console.log([arr[i], arr[j]]);
//       }
//     }
//   }
// };

//Multiple Pointer  O(n)
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return console.log([arr[left], arr[right]]);
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5, 10]);
sumZero([-4, -3, -2, -1, 0, 5, 10]);
