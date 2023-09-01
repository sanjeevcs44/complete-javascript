const coding = ["js", "java", "cpp", "pyton"];
// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Java",
    languageFileName: "Java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "c ++",
    languageFileName: "cpp",
  },
  {
    languageName: "javascript",
    languageFileName: "js",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName);
});

//for each provide all object property like key and values
