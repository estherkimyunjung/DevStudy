// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   let result = []
  
//   for(let i = 0; i < l.length; i++){
//     if(typeof l[i] === "number"){      
//       result.push(l[i])
//     }
//   }
//   return result
// }

function filter_list(l) {
  return l.filter(v => typeof v === "number")
}

// function filter_list(l) {
//   return l.filter(e => Number.isInteger(e));
// }

filter_list([1,3,'a','b',123])