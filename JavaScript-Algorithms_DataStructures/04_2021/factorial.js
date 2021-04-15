const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return console.log("literation", total);
};

const recursiveFoactorial = (num) => {
  if (num === 1) return 1;
  console.log("recursive", num * recursiveFoactorial(num - 1));
  return num * recursiveFoactorial(num - 1);
};

factorial(4);
recursiveFoactorial(4);
