const user = {
  userName: "Sanjeev",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} welcome to the website`);
    console.log(this);
    //this is always refer current context ,and  current context is user object here
  },
};
console.log(this); //{} it refers empty object  but if you check in browser it will be window
user.welcomeMessage();

// function chai() {
//   const user = "sanjeev";
//   console.log(this.user);// we can use like this,
//   console.log(this);
// }
// chai();

// //arrow function also we can add this
// const chai = () => {
//   const user = "sanjeev";
//   console.log(this.user);
// };
// chai();

//explicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//with implict return
//const addTwo = (num1, num2) => num1 + num2;

//one more
//const addTwo = (num1, num2) => (num1 + num2); small bracket me wrap karne par retunr nahee likhna hota he
//curley braces me wrap karne par return likhna hoga

//when you want to pass object then we can enclose object in parinthises

const addTwo = (num1, num2) => ({ uername: "sanjee" });

console.log(addTwo(3, 4));
