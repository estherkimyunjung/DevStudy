// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1).toLowerCase()
// }

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for(let word of str.split(' ')) {
    word.push(word[0].toUpperCase() + word.slice(1));
  }
  return word.join(' ')
}

