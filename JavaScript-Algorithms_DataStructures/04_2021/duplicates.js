// function areThereDuplicates() {
//   return console.log(new Set(arguments).size !== arguments.length);
// }

function areThereDuplicates(...args) {
  // Two pointers
  args.sort();
  let start = 0;
  // let next = 1;
  while (start + 1 < args.length) {
    if (args[start] === args[start + 1]) {
      return console.log(true);
    }
    start++;
    // next++;
  }
  return console.log(false);
}

// function areThereDuplicates() {
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return console.log(true);
//   }
//   return console.log(false);
// }

areThereDuplicates(1, 2, 3);
areThereDuplicates(1, 2, 2);
areThereDuplicates("a", "b", "c", "a");
