// #part of OOP
// 1. constructor function
// 2. prototype
// 3. Classes
// 4.Instances (new, this)

// ## 4 pillers
// 1. Abstration
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorpshism

//object literal
const user = {
  name: "sanjeev",
  loginCount: 8,
  signedIn: true,
  getDetails: function () {
    console.log(this.name);
  },
};

user.getDetails();
console.log(this); //gloabl context its empty {}, bt in brower its window
