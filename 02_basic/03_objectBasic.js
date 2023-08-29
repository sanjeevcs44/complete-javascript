const mySym = Symbol("key1");
const JsUser = {
  name: "sanjeev",
  "full name": "sanjeev sharma",
  [mySym]: "mykeay", //symbol type
  age: 18,
  location: "jaipur",
  email: "sanjeev@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "tuseday"],
};

//best way to access
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // symbol calling

//Object.freeze(JsUser);

JsUser.email = "sanjeevmiku@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Herlllo JS  USER");
};

JsUser.greeting2 = function () {
  console.log(`Hello JS  USER ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
