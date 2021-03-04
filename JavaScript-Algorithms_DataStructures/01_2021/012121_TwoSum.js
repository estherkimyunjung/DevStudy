// function twoSum(nums, target) {
//   // console.log('nums :', nums);
//   // console.log('target :', target);
//   if(nums.length >=2){
//     for (let i = 0 ; i <= nums.length; i++){

//       // const first = nums[i]
//       // const second = nums[i+1]
//       // if (first + second === target && i !== j){
//       // console.log(`[${i},${i+1}]`);
//       // }

//       for(let j = i+1; j <= nums.length; j++){
//         const first = nums[i]
//         const second = nums[j]
//         if(first + second === target){
//           return console.log(`[${i},${j}]`)
//           // return [i,j]
//         }
//       }
//     }
//   } else {
//     return console.log('undefined')
//   }
// }

// // twoSum([2,7,11,15], 9)
// // twoSum([3,2,4], 6)

const twoSum = (nums, target) => {
  const result = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in result) {
      console.log(`[${result[target - nums[i]]}, ${i}]`);
      return [result[target - nums[i]], i];
    } else {
      result[nums[i]] = i;
    }
  }
};

twoSum([2, 5, 5, 11], 10);
