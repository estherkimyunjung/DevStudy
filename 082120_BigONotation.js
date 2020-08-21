//Big O Notaion : It is a way to formalize counting about how the runtime of an algorithm grows as the inputs grow 
//To analyze the performance of an algorithm, we use Big O Nation can give us a high level understanding of the time or space complexity. Big O notation doesn't care about precision, only about the general trends(constant, linear, quadratic) and the time or space complexity depends only on the algorithm not the hardware used to run the algorithm.

//Time Complexity
//1. Arithmetic operations are constant
//2. Variable assignment is constant
//3.Accessing elements in an array(by index) or object(by key) is constant
//4. In a loop, the complexity is the length of the loop times(liner) the complesity of whatever happens inside of the loop

//f(n) could be constant (f(n) = 1) => O(1) ex) min()
//O(log n)
//f(n) could be linear (f(n) = n) => O(n) ex) max(), single loop
//O(nlog n)
//f(n) could be quadratic (f(n) = n*n) => O(n^2) ex) nested loops
//f(n) could ne someting entirely diffrent!



//f(n) = n => liner O(n)

function addUpTo(n) {
    let total = 0
    for(let i = 0; i <= n; i++) {
        total += i
    }
    return total
} 

let t1 = performance.now()
console.log(addUpTo(60000000))
let t2 = performance.now()
console.log(`Time Elapsed : ${(t2-t1) /1000} seconds.`)


//f(n) = 1 => constant O(1)

function addUpTo(n) {
  return n * (n + 1) /2
}

let t1 = performance.now()
console.log(addUpTo(60000000))
let t2 = performance.now()
console.log(`Time Elapsed : ${(t2-t1) /1000} seconds.`)


//f(n) = n => liner O(n)

function countUpAndDown(n) {
  console.log("Going up !");
  for (let i = 0; i < n + 1; i++) {
    console.log(i)
  }
  console.log("At the top! \nGoing Dow...");
  for (let j = n; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down, Bye!")
}

countUpAndDown(10)



//f(n) = n*n => liner O(n^2)

function printAllPairs(n) {
  for(let i = 0; i < n; i++) {
    for(let j =0; j < n; j++) {
      console.log(i,j);
    }
  }
}

//Space Complexity - auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

//Most Primitives (booleans, numbers, undefined, null) are constant space
//String require O(n) space (where n is the string length)
//Reference types are generally O(n), where n is the length (for arrays) or the number or keys (for objects)


// return one number(total) and another number for index, this function always have two valiable not creating any valiable.
// O(1) ~> by Space Complexity
function sum(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total; //one number
}


// O(n) ~> by Space Complexity

function double(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.pusj(s* arr[i]);
  }
  return newArr //n numbers
}


// Logarithms : log base (value) = exponent ~> base^exponent = value
// The logarithm of number roughly nmeasures the number of times you can divide that number by 2
// before you get a value that's less than or equal to one
// ex) Searching algorithms, Efficient sorting algorithms and Recursion(involves logarithmic space complexity)