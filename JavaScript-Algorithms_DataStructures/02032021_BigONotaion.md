# Big O Notaion

## Objectives

- Motivate the need for somthing like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different alforithms using Big O Notation
- Describe what a logrithm is

#### What's the idea here?

- Imagin we have multiple implementations of the same function.
- How can we determine which one is the "best?"

#### Who Cares?

- It's important to have precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between diffrent approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applicatioons

#### What does better mean?

- Faster?
- Less memory-intensive?
- More readable?

  function addUpTo(n) {
  let total = 0;
  for (let i =1; i <= n; i++) {
  total += 1;
  }
  return total;
  }

  var t1 = performance.now();
  addUpTp(1000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) /1000} seconds.`)

  function addUpTo(n) {
  return n \* (n - 1) / 2;
  }

  var t1 = performance.now();
  addUpTp(1000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) /1000} seconds.`)

The Problem with Time - Different machines will record different times - The same machine will record different times! - For fast algorithms, speed measurements may not ne precise enough?

      * If not time, then what?

      Rather than counting seconds, which are so variable.
      let's count the number of simple operations the computer has to perform!

      * Counting Operation and it is hard
      Depending on what we coung, the number of operations can be low as 2n or as high as 5n + 2
      But regardlessof the exact number, the number of operations grows roughly proportionally with n

## Introducing Big O

- Big O Notaion is a way to formalize fuzzy counting.
- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
- we won't care about the details, only the trends.

## Big O Definition

- We say that algorithm is O(f(n)) if the number of simple operation the computer has to do is eventurally less than a constant times f(n), as n increases

  ### f(n) could be linear (f(n) = n)

      O(n) - Number of operations is (eventually) bounded by a multiple of n (say, 10n)

      function addUpTo(n) {
        let total = 0;
        for (let i =1; i <= n; i++) {
          total += 1;
        }
        return total;
      }

  ### f(n) could be quadratic (f(n) = n^2)

      O(n^2) O(n) operation inside of an O(n) operation

      function printAllPairs(n) {
        for (var i = 0, i < n; i++) {
          for (var j = 0; j < n; j++) {
            return (i, j);
          }
        }
      }

  ### f(n) could be constant (f(n) = 1)

      O(1) - always 3 operations

      function addUpTo(n) {
        return n * (n - 1) / 2;
      }

  ### f(n) could be something entirely different!

## Simplify Big O Expressions

- When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.
- These rules of thumb are consequences of the definition of big O notation.

#### Constants Don't Matter

    O(2n) -> O(n)
    O(500) -> O(1)
    O(13n^2) -> O(n^2)

#### Smaller Terms Don't Matter

    O(n+10) -> O(n)
    O(1000n + 50) -> O(n)
    O(n^2 + 5n + 8) -> O(n^2)

#### Big O Shorthands

    - Analyzing complexity with big O can get complicated
    - There are several rules of thumb that can help
    - These rules won't ALWAYS work, but are a helpful starting point

    1. Arthetic operations are constant
    2. Variable assignment is constant
    3. Accessing elements in an array (by index) or object (by Key) is constant
    4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

##### A Couple More Examples

      * O(n)
      - function logAtLeast5 (n) {
        for (var i = 1; i <= Math.max(5, n); i++) {
          return(i)
        }
      }

      * O(1)
      - function logAtMost5 (n) {
        for (var i = 1; i <= Math.min(5, n); i++) {
          return(i)
        }
      }

### Space Complexity

so far, we've been focusing on time complexity : how can we analyze te runtime of an algorithm as the size of the inputs increases?

We can also use big notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

#### What about the inputs?

Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

Unless otherwise noted, when we talk about space complesity, technically we'll be talking about auxiliary space complexity.

#### Space Complexity in JS (Rules of Thumb)

Most primitives (booleans, numbers, undefined, null) are constant space
String require O(n)space (where n is the string length)
Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

##### An Example

- O(1) space

  function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
  total += arr[i];
  }
  return total;
  }

- O(n) space

  function double(arr) {
  let newArr = [];
  for (let i =0; i < arr.length; i++) {
  newArr.push(2 \* arr[i]);
  }
  return newArr;
  }
