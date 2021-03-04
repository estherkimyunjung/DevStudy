// const validAnagram = (arr1, arr2) => {
//   frequencyCounter1 = {};
//   frequencyCounter2 = {};

//   if (arr1.length !== arr2.length) {
//     return console.log(false);
//   }
//   for (let char of arr1) {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }
//   for (let char of arr2) {
//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!key in frequencyCounter2) {
//       return console.log(false);
//     }
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return console.log(false);
//     }
//   }

//   return console.log(true);
// };

//refactor

const validAnagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return console.log(false);
  }

  let charMap = {};

  for (let char of arr1) {
    charMap[char] ? (charMap[char] += 1) : (charMap[char] = 1);
  }

  for (let char of arr2) {
    if (!charMap[char]) {
      return console.log(false);
    } else {
      charMap[char] -= 1;
    }
  }
  return console.log(true);
};

validAnagram("", ""); //true
validAnagram("aaz", "zza"); //false
validAnagram("anagram", "nagaram"); //true
validAnagram("rat", "car"); //false
validAnagram("awesome", "awesom"); //false
validAnagram("qwerty", "qeywrt"); //true
validAnagram("texttwisttime", "timetwisttext"); // true
