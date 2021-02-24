// count the number of words from wordlist are in each keypad.
// First letter of the keypad is the first key
// first key will need to always be in word from wordlist to count

let Trie = function () {
  this.children = {};
};

Trie.prototype.insert = function (keypad) {
  for (let i = 0; i < keypad.length; i++) {
    let key = keypad[i];
    if (!this.children[key]) {
      this.children[key] = new Trie();
    }
  }
};

Trie.prototype.search = function (word, keypad) {
  let currentNode = this;
  if (!word.includes(keypad[0])) {
    return false;
  }

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (currentNode.children[char]) {
      currentNode.children[char].insert(keypad);
    } else {
      return false;
    }
    currentNode = currentNode.children[char];
  }
  return true;
};

let findEscapeRoomCode = function (wordlist, keypads) {
  let output = [];

  keypads.forEach((keypad, index) => {
    output[index] = 0;
    let keys = new Trie();
    keys.insert(keypad);

    wordlist.forEach((word) => {
      keys.search(word, keypad) ? output[index]++ : output[index];
    });
  });

  return output;
};

let wordlist = ["APPLE", "PLEAS", "PLEASE"];
let keypads = ["ALTPXYZ", "AELPXYZ", "ALEPXSZ", "SALEPXZ", "PBRUOSS"];

let keypads2 = [];

while (keypads2.length < 1000) {
  keypads2 = keypads2.concat(keypads);
}

// object (keys were the first character, the required character) and the value was the filtered word bank
// {a : [Apple, zebra, ...etc]}

console.log(findEscapeRoomCode(wordlist, keypads2));
