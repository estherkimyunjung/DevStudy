// function solution(nums){
//   return(nums===null ? [] : nums.sort(function(a, b){return a - b}))
// }

// function solution(nums){
//   return nums !== null ? nums.sort((a, b) => a - b) : [];
// }

const solution = nums => (nums || []).slice().sort((a, b) => a - b);