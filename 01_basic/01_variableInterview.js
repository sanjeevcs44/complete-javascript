var a = 5;
console.log(a); //global scope

{
  var b = 6;
}

console.log(b); //global

{
  let c = 10;
  console.log(b); //local scope
}

console.log(c); //ReferenceError: c is not defined

console.log(d); //undefined
console.log(e); //reference error due to temporal dead zone
console.log(f); //reference error due to temporal deadzone , hositing will happen for let and const
var d = 3;
let e = 5;
const f = 9;
