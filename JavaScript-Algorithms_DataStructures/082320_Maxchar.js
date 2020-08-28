// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str){
  const charMap = {}; //creat object with char(key) and count(value)
  let max = 0; //max count
  let maxChar = ''; //max char from charMap

  for(let char of str) {
    if(!charMap[char]){
      charMap[char] = 1;
    } else {
      charMap[char] ++;
    }
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char
    }
  }
  return maxChar

}

maxChar("Hello World!")