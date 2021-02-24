var isValid = function (s) {
  // const newArray = s.split('')

  // console.log('s:',s)
  // if (newArray.length % 2 === 0){
  //   for(let i = 0; i<= newArray.length; i++){
  //     for(let j = i+1; j <= newArray.length; j++){
  //       if((newArray[i]==='(' && newArray[j] ===')') || (newArray[i]==='{' && newArray[j] ==='}') || (newArray[i]==='[' && newArray[j] ===']')){
  //         return console.log('true')
  //       } else {
  //         return console.log ('false')
  //       }
  //     }
  //   }
  // } else {
  //   return console.log('false')
  // }

  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (const paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran);
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return console.log(false);
      }
    }
  }

  return console.log(stack.length === 0);
};

isValid("{(-)}");
