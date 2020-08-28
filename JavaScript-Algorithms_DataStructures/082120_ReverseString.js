// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//4
function reverse(str) {
  // debugger;
  return str.split('').reduce((rev, char) => char + rev,'');
}

// reverse('asdf');

module.exports = reverse;

//1
// function reverse(str) {
//   return str
//   .split('')
//   .reverse()
//   .join('');
// }


//2
// function reverse(str) {
//   let reversed = '';
  
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }


//3
// function reverse(str) {
//   return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
// }