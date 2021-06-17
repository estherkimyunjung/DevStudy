function mergeArrays(myArray, alicesArray) {
  // Combine the sorted arrays into one large sorted array
  let merge_lists = [];

  if (!myArray && !alicesArray) return [];
  if (!myArray) return alicesArray;
  if (!alicesArray) return myArray;

  let baseArray =
    myArray.length === alicesArray.length || myArray.length > alicesArray.length
      ? myArray
      : alicesArray;
  let compareArray = baseArray === myArray ? alicesArray : myArray;

  // console.log("baseArray", baseArray);
  // console.log("compareArray", compareArray);
  let i = 0;
  for (const ele of baseArray) {
    if (ele < compareArray[i]) {
      merge_lists.push(ele);
    } else if (ele > compareArray[i]) {
      merge_lists.push(compareArray[i]);
      merge_lists.push(ele);
      i++;
    } else {
      merge_lists.push(ele);
      i++;
    }
  }
  if (compareArray[i]) merge_lists.push(compareArray[i]);

  return merge_lists;
}

//Test
let desc = "both arrays are empty";
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = "first array is empty";
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = "second array is empty";
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "both arrays have some numbers";
actual = mergeArrays([2, 4, 7], [1, 3, 6]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "arrays are different lengths";
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
