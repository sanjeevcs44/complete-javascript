//IIFE

(function chai() {
  //named iife
  console.log("DB connect");
})(); //semicolon will let you know ki function execution will be stopped here

(function () {
  console.log("iffe code");
})();
//iife is uesed to remove global pollution
// immediate execute

((name) => {
  console.log(`iifee from arrow ${name}`);
})("sanjeev");
