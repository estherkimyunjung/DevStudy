// function hello(name) {
//   if (name === undefined || name === ''){
//     return "Hello, World!";
//   } else {
//     return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
//   }
// }

const hello = name =>
  `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`;