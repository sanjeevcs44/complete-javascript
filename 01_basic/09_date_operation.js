let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// custome date//
let updatedDate = new Date(2023, 0, 23, 5, 3);
console.log(updatedDate.toString());
console.log(updatedDate.toLocaleString());

// specific format  date//
let customDate = new Date("2023-01-14");
console.log(customDate.toString());
console.log(customDate.toLocaleString());

//
let newDate = new Date.now();
newDate.toLocaleString("default", {
  weekday: "long",
});
