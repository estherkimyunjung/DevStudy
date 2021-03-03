//count the number of the wordlist are in each keypad
//First letter of the keypad is the key
//key always need in the word from the worldList to count

// Example Input: wordlist: ['APPLE', 'PLEAS', 'PLEASE'] keypads: ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"]
// output: [0,1,3,2,0]
// 0 : none of the words in the wordlist
// 1 : APPLE
// 2 : PLEAS, PLEASE
// 3 : APPLE, PLEAS, PLEASE
// 0 : "key" letter is not include in words

// const numKeypadSolutions = (wordlist, keypads) => {
//   let results = [];                                              //const ansArr = new Array(keypads, length).fill(0)
//   for (let i = 0; i < keypads.length; i++) {
//     let keySet = new Set();
//     for (let j = 0; j < keypads[i].length; j++) {
//       let char = keypads[i][j];
//       keySet.add(char);
//     }                                                            //for (let i = 0; i < keypads.length; i++) {
//const keypadLetters = keypads[i].split('')

//     let key = keypads[i][0];
//     let keypadCode = 0;

//     wordlist.forEach((word) => {
//       let wordSet = new Set();
//       for (let j = 0; j < word.length; j++) {
//         wordSet.add(word[j]);
//       }
//       if (wordSet.has(key)) {
//         let count = 1;
//         wordSet.forEach((char) => {
//           if (!keySet.has(char)) {
//             count = 0;
//           }
//         });
//         keypadCode += count;
//       }
//     });
//     results.push(keypadCode);
//   }
//   console.log("first", results);
//   return results;
// };

const numKeypadSolutions = (wordlist, keypads) => {
  let results = [];
  let wordsMap = [];
  for (let i = 0; i < wordlist.length; i++) {
    let temp = {};
    for (let j = 0; j < wordlist[i].length; j++) {
      let char = wordlist[i][j];
      temp[char] = true;
    }
    wordsMap.push(temp);
  }
  for (let i = 0; i < keypads.length; i++) {
    let keyCode = 0;
    let keyMap = {};
    for (let j = 0; j < keypads[i].length; j++) {
      let char = keypads[i][j];
      keyMap[char] = true;
    }
    let key = keypads[i][0];
    wordsMap.forEach((word) => {
      if (word[key]) {
        let count = 1;
        for (let char in word) {
          if (!keyMap[char]) {
            count = 0;
          }
        }
        keyCode += count;
      }
    });
    results.push(keyCode);
  }
  console.log("second", results);
  return results;
};

numKeypadSolutions(
  ["APPLE", "PLEAS", "PLEASE"],
  ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"]
);
