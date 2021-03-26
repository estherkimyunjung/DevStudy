// After running the 'initialize' function, what will the final errorCount value be?

let errorCount = 0;
let countDown = 5;

function testLaunch(goNoGo) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (countDown > 0) {
        console.log(countDown);
        countDown -= 1;
      } else {
        if (goNoGo) {
          resolve("BLASTOFF!");
        } else {
          throw "Failure to launch";
        }
      }
    }, 1000);
  }).catch((err) => {
    errorCount += 1;
  });
}

async function initialize() {
  const goNoGo = false;
  const launchMessage = await testLaunch(goNoGo);
  console.log(launchMessage);
  console.log("final error count: ", errorCount);
  process.exit(1);
}

initialize();
