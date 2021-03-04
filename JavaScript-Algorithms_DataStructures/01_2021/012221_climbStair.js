const climbStairs = (n) => {

// climbStairs[0] = 1
// climbStairs[1] = 1
// climbStairs[2] = 2 (climbStairs[1] + climbStairs[0])
// climbStairs[3] = 3 (climbStairs[2] + climbStairs[1])

// 1. use hash map
//   let obj = {}

//   if(n<=2) {
//     obj[n] = n;
//     console.log(n)    
//       return n;
//   } else {     --------- I created object for if statement so if statement is duplicate case
    let obj = {1:1, 2:2};      
    for(let i = 3; i <= n+1; i++){
      let result = obj[i-1] + obj[i-2]
      obj[i] = result
    }
    console.log(obj[n])      
    return obj[n]
//   } 


// 2. use array

  // let result = [1, 1];
  // for(let i = 2; i <=n; i++) {
  // result[i] = result[i-1] + result[i-2];
  // }
  // console.log(result[n])
  // return result[n]

}

climbStairs(6)
