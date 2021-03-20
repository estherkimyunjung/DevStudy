// write a function that checks all content is duplicate and returns duplicate content file paths in a group of content.

//given Arguments are string with file path(directory, filename)

// Is the file name without content? - no worry about the case
// Is the file always existing in a directory?
// When return the file path is it matter about the order of file?
// Is the file path is unique?

// create data set with file name and content

const getFileContent = {
  "2.txt": "abc",
  "3.txt": "abcd",
  "1.txt": "ab",
  "4.txt": "ab",
};

// output: [
//   [ 'root/a/2.txt', 'root/a2/b1/2.txt', 'root/a/b2/2.txt' ],
//   [ 'root/a/3.txt', 'root/a1/b2/3.txt' ],
//   [ 'root/a1/b2/1.txt', 'root/a/b3/1.txt', 'root/a/b/c/4.txt' ]
// ];

// input: [
//   ["/a", "2.txt", "3.txt"],
//   ["/a2", "/b1", "2.txt"],
//   ["/a", "/b2", "2.txt"],
//   ["/a1", "/b2", "3.txt", "1.txt"],
//   ["/a", "/b3", "1.txt"],
//   ["/a", "/b", "/c", "4.txt"],
// ];

// output: [
//   [ 'root/a/2.txt', 'root/a2/b1/2.txt', 'root/a/b2/2.txt' ],
//   [ 'root/a/3.txt', 'root/a1/b2/3.txt' ],
//   [ 'root/a1/b2/1.txt', 'root/a/b3/1.txt', 'root/a/b/c/4.txt' ]
// ];

//create function findDuplicateFiles
//use hasMap,  array results

// parse the paths

// extract file name, contents, => full path

// create results array

const findDuplicateFiles = (paths) => {
  // let fullPaths = [];
  let fileMap = new Map();
  let results = []; //-> REFACTOR

  paths.forEach((path) => {
    // console.log("PATH", path);
    let dir = "root";

    path.forEach((str) => {
      let fileName = "",
        fullPath = "";

      if (str.includes("/")) {
        dir += str;
      } else {
        fileName = str;
        fullPath = dir + "/" + fileName;
        // fullPaths.push(fullPath);
      }
      console.log("FULLPATH", fullPath);

      const content = getFileContent[fileName];
      // console.log("Content", content);

      if (fileMap.has(content) && fullPath) {
        fileMap.set(content, [...fileMap.get(content), fullPath]);
      } else {
        fileMap.set(content, [fullPath]);
      }
    });
  });
  // console.log("FULLPATHS", fullPaths);

  // findDuplicate(fileMap); -> REFACTOR

  for (let [key, val] of fileMap) {
    if (val.length > 1) {
      results.push(val);
    }
  }

  return console.log("RESULT", results);
};

// const findDuplicate = (fileMap) => {
//   let results = [];

//   for (let [key, val] of fileMap) {
//     if (val.length > 1) {
//       results.push(val);
//     }
//   }

//   return console.log("RESULT", results);
// };

findDuplicateFiles([
  ["/a", "2.txt", "3.txt"],
  ["/a2", "/b1", "2.txt"],
  ["/a", "/b2", "2.txt"],
  ["/a1", "/b2", "3.txt", "1.txt"],
  ["/a", "/b3", "1.txt"],
  ["/a", "/b", "/c", "4.txt"],
]);
