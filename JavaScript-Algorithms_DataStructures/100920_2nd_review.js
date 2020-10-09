// function reverseString(str){
//   console.log(str.split('').reverse().join(''))
// }

// function reverseString(str){
//   console.log(str.split('').reduce((rev, char) => char+rev,''))
// }

// function reverseString(str){
//   let reversed = ''
//   for(let char of str){
//     reversed = char + reversed
//   }
//   console.log(reversed)
// }

// reverseString('Hello Test!!')

// function reverseInt(i){
//   const numString = i.toString()
//   const reversedStringToNum = parseInt(numString.split('').reverse().join('')) * Math.sign(i)
//   console.log(reversedStringToNum)
// }
// reverseInt(-663)

// function maxChar(str){

//   const charsMap = {};
//   let max = 0;
//   let maxChar = ''

//   for(let char of str){
//     !charsMap[char] ? charsMap[char] = 1 : charsMap[char] += 1
//   }

//   for(let char in charsMap){
//     if(charsMap[char] > max){
//       max = charsMap[char];
//       maxChar = char
//     }
//   }
//   console.log(maxChar)
// }
// maxChar('Tell Me Thisssss')

function chunk(arr, n){
  const chunked = [];
  let index = 0;
  while(index < arr.length){
    chunked.push(arr.slice(index, index + n))
    index += n
  }
  console.log(chunked)
}

chunk([1,2,3,4,5,6,7], 3)