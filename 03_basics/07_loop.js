//for of
// its working for array string and object
const myName = "sanjeev";
for (const name of myName) {
  console.log(name);
}

const users = [
  {
    name: "sanjeev",
    scroe: 50,
  },
  {
    name: "rajeev",
    scroe: 100,
  },
  {
    name: "gajeev",
    scroe: 200,
  },
  {
    name: "test",
    scroe: 300,
  },
];

for (const user of users) {
  console.log(user);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("FR", "France");
map.set("IN", "India");

for (const [key, value] of map) {
  console.log(key, "-", value);
}
//o/p
// IN - India
// USA - United state of america
// FR - France

// for of can not be iterate object key values pair it iterate only MAP object

//for in used to print key and for of used to print value
// for in is used for object rendering

// const myObj = {
//   js: "javascriptr",
//   cpp: "c++",
//   rb: "ruby",
//   swift: "swift",
// };

// for (const key in myObj) {
//   console.log(key + " " + myObj[key]);
// }

const myNewArray = ["js", "c", "c++", "javas", "react"];
for (const key in myNewArray) {
  console.log(`${key} is ${myNewArray[key]}`);
}

//for in will not work with for in loop  becase Map object is not iterable
