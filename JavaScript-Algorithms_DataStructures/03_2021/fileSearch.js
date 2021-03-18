// // given a string with a filepath write a function that checks all files for duplicate content and return the duplicates in an array of arrays.
// // let rootDirectory = '/a'
// // 'a/'
// //     'text1.txt'
// //     'text2.txt'
// //     '/b'
// //         'text1.txt'
// //         'text3.txt'
// //         '/c'
// //             'text2.txt'
// assert(
//   "a/" ===
//     [
//       ["a/text1.txt", "a/b/text1.txt"],
//       ["a/text2.txt", "a/b/c/text2.txt"],
//     ]
// );
// readFile(""); // returns bit content of file
// isDirectory(""); // returns boolean
// getFileContent(""); // returns file content of directory
// // set up recursive function to check all files for directories. If directories are found, run the recursive function on those directories.
// // create an answer array to push answers into
// // create a files array that holds all files when found
// // create a fileMap that uses the content of the files as the key and the names as the value in an array. (we'll push this array into our answer array later to gain our nested array answer)
// let isDuplicate = (str) => {
//   let array = [];
//   let fileMap = {};
//   let answer = [];
//   let currentDirectory = str;
//   let recursive = (strng) => {
//     let files = getFileContent(strng);
//     for (let i = 0; i < files.length; i++) {
//       let file = file[i];
//       if (isDirectory(file)) {
//         currentDirectory = currentDirectory + file;
//         recursive(file);
//       } else {
//         array.push(currentDirectory + "/" + file);
//       }
//     }
//   };
//   recursive(str);
//   for (let i = 0; i < array.length; i++) {
//     let file = array[i];
//     fileMap[file] ? fileMap[i].push(file) : (fileMap[i] = [file]);
//   }
//   for (let key in fileMap) {
//     answer.push(fileMap[key]);
//   }
//   return answer.filter((array) => array.length > 1);
// };

// give a string with filepath write a function that check all content is duplicate and return the duplicate contents file path.

// Is file name without content? - No worry about the case
// Is file is excited? - always file in the path.
// when return the order in not matter.

// create function findDuplicate

function findDuplicate(arr) {
  let fileMap = new Map();
  // value will be path (path and join file name with /

  for (let i = 0; i < arr.length; i++) {
    let filePaths = arr[i].split(" ");
    let rootPath = filePaths[0];
    console.log("-----------------");
    console.log(rootPath);
    console.log("filePaths", filePaths);
    console.log("-----------------");

    let file = arr[i].split("");

    console.log(file);
    // Hashmap with key => content
    let openParIdx = 0;
    let closeParIdx = 0;

    for (let j = 0; j < file.length; j++) {
      const fileChar = file[j];
      let tempKey = "";

      if (fileChar === "(") {
        openParIdx = j;
      } else if (fileChar === ")") {
        closeParIdx = j;
        console.log("openParIdx", openParIdx);
        console.log("closeParIdx", closeParIdx);

        const tempKey = file.slice(openParIdx + 1, closeParIdx).join("");

        let fileName = arr[i].split(" ").join("/").substr(0, openParIdx);
        console.log(fileName);

        fileMap.set(tempKey, fileName);
        console.log("FM", fileMap);
      }
    }
  }

  // loop through arr and split with space to create root path and file name and content

  //return value will be full path with file name by content
}

// var findDuplicate = function (paths) {
//   let group = {};
//   for (let i = 0; i < paths.length; i++) {
//     let path = paths[i].split(" "); // split by space so we can use the information easily
//     for (let j = 1; j < path.length; j++) {
//       let temp = path[j].split("("); // split again and temp will always be [`the file name`, `the file content`]
//       if (group[temp[1]] == null) group[temp[1]] = [];
//       group[temp[1]].push(path[0] + "/" + temp[0]); // push the complete file path
//     }
//   }
//   return console.log([...Object.values(group)].filter((val) => val.length > 1)); // filter out groups with only 1 content in it.
// };

// const findDuplicate = (paths) => {
//   const map = new Map();
//   for (let text of paths) {
//     for (let i = 1, files = text.split(" "); i < files.length; i++) {
//       let paren = files[i].indexOf("(");
//       let content = files[i].substring(paren + 1, files[i].length - 1);
//       map[content] = map[content] || [];
//       map[content].push(files[0] + "/" + files[i].substr(0, paren));
//     }
//   }
//   return console.log(Object.values(map).filter((dups) => dups.length > 1));
// };

findDuplicate([
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
]);
