// input: two integers, output: countdown from two numbers sum to 0
// console log countdown every second until 0

const countdownTwoSum = (num1, num2) => {
  // control timer
  let countdownTimer;
  // start countdown every second from sum
  let count = num1 + num2;

  // set timer to countdown every second and decrement count
  countdownTimer = setInterval(function () {
    console.log(count);
    --count;
    // stop the countdown if the count reaches 0
    if (count < 0) {
      console.log("Countdown stopped");
      // Stop Timer
      clearInterval(countdownTimer);
    }
  }, 1000);
};

countdownTwoSum(2, 5);
