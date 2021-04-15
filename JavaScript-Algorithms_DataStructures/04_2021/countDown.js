const countDown = (num) => {
  if (num <= 0) {
    return console.log("All Done");
  }
  console.log(num);
  num--;
  countDown(num);
};

countDown(5);
