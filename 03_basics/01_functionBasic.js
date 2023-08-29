// function sayName() {
//   console.log("hello sanjeev");
// }
// sayName();

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }
// addTwoNumber(3, 4);

// function addTwoNumber(num1, num2) {
//   let result = num1 + num2;
//   return result; // nothing will execute after return  console.log("hello sanjeev will not execute after this ")
//   console.log("hello sanjeev");
// }

// let result = addTwoNumber(3, 4);
// console.log("result:", result);

function loginUserMessage(userName = "san") {
  // default paramtere
  // we can pass defauklt value also to avoid undfined user name
  if (!userName) {
    // or we can write it like this also userName ===undefined both are same
    console.log("please enter correct username");
    return; // if we will use return here then next return will not execute after this line
  }
  return `${userName} just loggedin`;
}

console.log(loginUserMessage("sanjeevb"));
//console.log(loginUserMessage());
