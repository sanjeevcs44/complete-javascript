const marvelHero = ["thor", "IRonman", "spiderMan"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHero.push(dcHeros);[ 'thor', 'IRonman', 'spiderMan', [ 'superman', 'flash', 'batman' ] ]]
// console.log(marvelHero);

// const allHeros = marvelHero.concat(dcHeros); //[ 'thor', 'IRonman', 'spiderMan', 'superman', 'flash', 'batman' ]
// console.log(allHeros);

//spread operator
const all_new_hero = [...marvelHero, ...dcHeros];
console.log(all_new_hero);

//array flattern
const new_array = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11, 23], 12]];
const usable_new_array = new_array.flat(2); // or .flat(infinty) we can give if we dont know about the depth
console.log();
console.log(usable_new_array);

//isArray and from
console.log(Array.isArray("sanjeev"));
console.log(Array.from("sanjeev"));
console.log(Array.from({ name: "sanjeev" })); //its giving empty array because we have not provided what kind of array we want
