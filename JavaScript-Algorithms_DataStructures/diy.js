//use hash map for char of word from wordlist and keypad from keypads
//count the number of the wordlist are in each keypad
//First letter of the keypad is the key
//key always need in the word from the wordlist to count

// Example Input: wordlist: ['APPLE', 'PLEAS', 'PLEASE'] keypads: ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"]
// output: [0,1,3,2,0]
// 0 : none of the words in the wordlist
// 1 : APPLE
// 2 : PLEAS, PLEASE
// 3 : APPLE, PLEAS, PLEASE
// 0 : "key" letter is not include in words

const escapeRoom = (wordlist, keypads) => {
  let results = [];
  let wordsMap = []; // initialize array of word object
  for (let word of wordlist) {
    let index = getIndexFromInputElement(wordlist, word); // getting index of each word
    wordsMap.push(keyInsert(wordlist, index)); // create array of hash
  }

  for (let keypad of keypads) {
    let index = getIndexFromInputElement(keypads, keypad);
    let keyMap = keyInsert(keypads, index);
    let key = keypads[index][0];
    results.push(numKeypadSolutions(wordsMap, keyMap, key));
  }
  return results;
};

//get index from each word(element)

const getIndexFromInputElement = (input, element) => {
  let index = input.indexOf(element);
  return index;
};

//create hash map of input string
const keyInsert = (input, index) => {
  let temp = {};
  for (let char of input[index]) {
    if (!temp[char]) {
      temp[char] = true;
    }
  }
  return temp;
};

const countWordMatch = (count, word, keyMap) => {
  for (let char in word) {
    if (!keyMap[char]) {
      count = 0;
    }
  }
  return count;
};

const numKeypadSolutions = (wordsMap, keyMap, key) => {
  let keyCode = 0;
  wordsMap.forEach((word) => {
    if (word[key]) {
      keyCode += countWordMatch(1, word, keyMap);
    }
  });
  return keyCode;
};

function testRun() {
  console.log(
    escapeRoom(
      ["APPLE", "PLEAS", "PLEASE"],
      ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"]
    )
  );
}

for (var i = 0; i < 5; i++) {
  testRun();
}
