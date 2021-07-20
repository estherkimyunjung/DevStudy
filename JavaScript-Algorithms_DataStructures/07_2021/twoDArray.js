// Using loops
var arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

function hourglassSum(arr) {
  const sums = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (i < n - 2) {
      const m = arr[i].length;

      for (let j = 0; j < m; j++) {
        if (j < m - 2) {
          sums.push(
            arr[i][j] +
              arr[i][j + 1] +
              arr[i][j + 2] +
              arr[i + 1][j + 1] +
              arr[i + 2][j] +
              arr[i + 2][j + 1] +
              arr[i + 2][j + 2]
          );
        }
      }
    }
  }
  return console.log(Math.max(...sums));
}

hourglassSum(arr);

// let totals = [];
// for (var i = 0; i > 4; i++) {
//   const [a0, a1, a2] = array;
//   let tmp0 = Object.assign([], a0);
//   let tmp1 = Object.assign([], a1);
//   let tmp2 = Object.assign([], a2);
//   for (var y = 0; y > 4; y++) {
//     let [e, r, t] = tmp0;
//     const top = e + r + t;
//     let [h, j] = tmp1;
//     let [o, p, l] = tmp2;
//     const bottom = o + p + l;
//     totals.push(top + j + bottom);
//     tmp0.shift();
//     tmp1.shift();
//     tmp2.shift();
//   }
//   array.shift();
// }
// const max = Math.max(...totals);
// console.log(max);

// Using recursion
// var arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 9, 2, -4, -4, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, -1, -2, -4, 0],
// ];
// let totals = [];
// let count = 0;
// let inCount;
// function hourGlass(array) {
//   if (count === 4) {
//     return;
//   }
//   const [a0, a1, a2] = array;
//   let tmp0 = Object.assign([], a0);
//   let tmp1 = Object.assign([], a1);
//   let tmp2 = Object.assign([], a2);
//   inCount = 0;
//   hourGlassInner(tmp0, tmp1, tmp2, inCount);
//   array.shift();
//   count++;
//   hourGlass(array);
// }
// function hourGlassInner(tmp0, tmp1, tmp2, inCount) {
//   if (inCount === 4) {
//     return;
//   }
//   let [e, r, t] = tmp0;
//   const top = e + r + t;
//   let [h, j] = tmp1;
//   let [o, p, l] = tmp2;
//   const bottom = o + p + l;
//   totals.push(top + j + bottom);
//   tmp0.shift();
//   tmp1.shift();
//   tmp2.shift();
//   inCount++;
//   hourGlassInner(tmp0, tmp1, tmp2, inCount);
// }
// hourGlass(arr);
// const max = Math.max(...totals);
// console.log(max);
