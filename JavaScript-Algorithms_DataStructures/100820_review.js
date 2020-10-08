// function strReversed(str) {
//   console.log(str.split('').reverse().join(''))
//   console.log(str.split('').reduce((rev,chr) => chr+rev),'')
//   console.log(parseInt(str.toString().split('').reverse().join('')) * Math.sign(str))
// }

// strReversed("hello TEST")
// strReversed(-55)

// function maxChar(str) {
//   const chatMap = {};
//   let max = 0;
//   let maxChart = '';

//   for(let char of str) {
//     chatMap[char] ? chatMap[char]++ : chatMap[char]=1
//   }

//   for(let char in chatMap) {
//     if(chatMap[char] > max) {
//       max = chatMap[char]
//       maxChart = char
//     }
//   }
//   console.log(maxChart)
// }

// maxChar("HELLO111144HHHHH1")

function fizzBuzz(n) {
  for(let i=1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if(i % 3 === 0) {
      console.log('fizz')
    } else if(i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(15)