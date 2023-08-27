//stack (primitve ), Heap (Non-Primitve)
// let myYoutubeName = "sanjeevsharma.com";
// let anotherName = myYoutubeName;
// anotherName = "mikahchu";
// console.log(anotherName); //mikachu
// onsole.log(myYoutubeName); //sharmasanjeev.com

let obj = {
  name: "sanjeev",
  score: 123,
  test: {
    surname: "test",
  },
};

let obj2 = obj;
let obj3 = { ...obj };
obj2.name = "sharma";
obj2.test.surname = "tesrt2";
console.log(obj2);
console.log(obj);
console.log(obj3);
