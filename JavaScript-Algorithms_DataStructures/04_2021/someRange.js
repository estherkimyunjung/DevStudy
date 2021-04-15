const someRange = (num) => {
  if (num === 1) return 1;
  console.log(num + someRange(num - 1));
  return num + someRange(num - 1);
};

someRange(4);
