addOne(3);
function addOne(num) {
  console.log(num);
}

//addtwo(3, 4); //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function (num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
};
addtwo(5, 7);
