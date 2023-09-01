const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// chaining meanes muliple operation
//myNumbers.map().map().filter();
const myChaining = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);

// in above example first operation (map) will be apply orginal array then second operation (map)
//will be apply modifed value (like 10,20,30) so after second map value will be 11,12,13 like
console.log(myChaining);
