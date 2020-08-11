function simpleArraySum(n, ar) {
  let sum = 0
  for(let i=0; i<n; i++){
      sum = sum + ar[i]
  }
      return sum
}

simpleArraySum(6, [1, 2, 3, 4, 10, 11])
