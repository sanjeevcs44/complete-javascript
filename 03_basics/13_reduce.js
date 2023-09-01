const myNums = [1, 2, 3];
const myTotal = myNums.reduce((acc, currVal) => {
  console.log(`${acc} and currVal ${currVal}`);
  return acc + currVal;
}, 0);
console.log(myTotal);

const courses = [
  { courseName: "javascript", price: 3000 },
  { courseName: "c++", price: 200 },
  { courseName: "java", price: 2000 },
  { courseName: "Next js", price: 1500 },
  { courseName: "React js", price: 300 },
];
const totalAmount = courses.reduce((acc, item) => acc + item.price, 0);

console.log(totalAmount);
