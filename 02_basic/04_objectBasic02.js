const JsUser = {
  regularUser: {
    fullName: {
      userFullName: {
        firstName: "sanjeev",
        lastName: "sharma",
      },
    },
  },
};

console.log(JsUser.regularUser?.fullName.userFullName.firstName); //this ? called optional chaining
// merge 2 object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const Obj3 = Object.assign({}, obj1, obj2);
console.log(Obj3);
//better approch using spread operator
const Obj4 = { ...obj1, ...obj2 };
console.log(Obj4);

console.log(Object.keys(Obj4)); // Object.keys will retrun all keys in the form of array
console.log(Object.values(Obj4)); // Object.keys will retrun all values in the form of array

console.log(Object.entries(Obj4)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ] ]
console.log(Obj4.hasOwnProperty("4")); // return true if property exists
