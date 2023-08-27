// const gameName = new String("sanjeev");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

//if you want to add one property  with object or array
const gameName = new String("sanjeev");
gameName.__proto__nameToCapital = function (string) {
  return console.log(`hello ${string}`);
};
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.__proto__nameToCapital("sanjeev"));
console.log(Object.getPrototypeOf(gameName));
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));
console.log(gameName.includes("sam"));

const url = "https://sanjeevsharma.com/sanjeev%20sharma";
console.log(url.replace("%20", ""));
