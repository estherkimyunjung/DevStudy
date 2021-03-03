// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reverse = require("../reversestring");

function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('')
  return str === reversed ? true : false //return str === reversed
}

module.exports = palindrome;


//1 
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('')
//   return str === reversed ? true : false //return str === reversed
// }


//2 this is not the best solution because unnecessary comparison after half of array
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length-1-i]
//   }) //  return str.split('').every((char, i) => char === str[str.length-1-i])
// }

