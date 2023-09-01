//falsy
//false , 0 , -0,bigint 0n , "",null, undefined , NAN,

//truthy value
//[],"0",'false' , " ",{},funtion(){}//empty function

//how to checko object and array are empty or not

const user = [];
if (user.length === 0) {
  console.log("user array  is empty");
}

const emptyObject = {};
//Object.keys(emptyObject) will return array of keys
if (Object.keys(emptyObject).length === 0) {
  console.log("empty object");
}

//nullish coallensing operator ?? null undefined

//let val1 = 5 ?? 10;
//console.log(val1); o/p 5

//let val1 = null ?? 10;
//console.log(val1); o/p 10

// ?? alsways chck null saftey it null comes then it will check what else we can
//assign in place of null

let val2 = undefined ?? 10;

console.log(val2); //op 10

let val3 = null ?? 10 ?? 20;
console.log(val3); //o/p will be first value
