// wirte a function that check duplcates content files and return the file names in a group of content. (findDuplicate)
// given a string with filepath (directory or file name)

// find fullFilePaths, directory startpoint - root
// create hashMap
// read a content of file then check is duplicate?
// Key - content, value - file path

const getFileContent = {
  "2.txt": "abc",
  "3.txt": "abcd",
  "1.txt": "ab",
  "4.txt": "ab",
};

// input: [
//   ["/a", "2.txt", "3.txt"],
//   ["/a", "/b1", "2.txt"],
//   ["/a", "/b2", "2.txt"],
//   ["/a1", "/b2", "3.txt", "1.txt"],
//   ["/a", "/a1", "1.txt"],
//   ["/a", "/b", "/c", "4.txt"],
// ];

// output: [
//   [ 'root/a/2.txt', 'root/a/b1/2.txt', 'root/a/b2/2.txt' ],
//   [ 'root/a/3.txt', 'root/a1/b2/3.txt' ],
//   [ 'root/a1/b2/1.txt', 'root/a/a1/1.txt', 'root/a/b/c/4.txt' ]
// ];

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
  ["/a", "/b1", "2.txt"],
  ["/a", "/b2", "2.txt"],
  ["/a1", "/b2", "3.txt", "1.txt"],
  ["/a", "/a1", "1.txt"],
  ["/a", "/b", "/c", "4.txt"],
]);
