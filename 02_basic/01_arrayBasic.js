let myArray = [1, 2, 3, 5];

//array method
//myArray.prototype.textName = "hello";
//myArray.__proto__.testBame = "sanjeev";

// myArray.push(6);
// console.log(myArray);

////myArray.unshift();
// myArray.shift();
// myArray.indexOf(3); //return index number if value exists otherwise return -1
// myArray.includes(3); // return true or flase baes on avalaiblity

// console.log(myArray.unshift(10));
// console.log(myArray);

// console.log(myArray.shift());
// console.log(myArray);
// const newArray = myArray.join();
// console.log(newArray);
// console.log(typeof newArray);

//----------------slice and splice method-------------------//
console.log(myArray);

const myn1 = myArray.slice(1, 3); //it will create a new array which will not include index 3 and it will not update orginal array
console.log("B", myn1);

const myn2 = myArray.splice(1, 3); //it will create a new array which will include 3 index number also and it will remove this data from origanl array
console.log("c", myn2);
console.log(myArray);
