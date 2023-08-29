// function calculateCartPrice(...num1) {
//   return num1; //it will return one array [200,300,400]
// }
// console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice(val1, val2, ...num1) {
  return num1; //it will return one array [400,500] because val1 and val2 will container 200,300
}
console.log(calculateCartPrice(200, 300, 400, 500));

// function with object passing
const user = {
  userName: "sanjeev",
  score: 300,
};

function handleObj(user) {
  console.log(`hello ${user.userName} your score is ${user.score}`);
}

handleObj(user);
handleObj({ userName: "test", score: 500 }); // we can pass direct object also

// function with array parameter

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(arr) {
  return arr[1];
}

console.log(returnSecondValue(myNewArray));
