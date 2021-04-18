const isSubsequence = (str1, str2) => {
  if (str1.length === 0) return console.log(true);
  if (str2.length === 0) return console.log(false);
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
};

isSubsequence("hello", "hello world");
isSubsequence("sing", "string");
isSubsequence("abc", "abracadabra");
isSubsequence("abc", "acb");
