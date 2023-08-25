const accountId = 1222;
let accountEmail = "sanjeevcs@google.com";
var accountPassword = "12345";
accountCity = "morena";
let accountstate;

// accountId = 3; not allowed
accountEmail = "sanj@google.com";
pass = "@22";
accountCity = "noida";
console.log(accountId);
//dont use var becuse there is issue between functional and block scope .
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountstate,
]);
