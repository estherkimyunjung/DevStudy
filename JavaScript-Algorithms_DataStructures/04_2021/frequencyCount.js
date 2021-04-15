const sameFrequency = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  let charNum1 = {};
  let charNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    charNum1[strNum1[i]] = charNum1[strNum1[i]] + 1 || 1;
  }
  for (let i = 0; i < strNum2.length; i++) {
    charNum2[strNum2[i]] = charNum2[strNum2[i]] + 1 || 1;
  }

  for (let key in charNum1) {
    if (charNum1[key] !== charNum2[key]) return console.log(false);
  }
  return console.log(true);
};

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(22, 222);
sameFrequency(3589578, 5879385);
