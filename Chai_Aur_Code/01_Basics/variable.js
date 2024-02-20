const accountId = 1234;
let accountEmail = "mrcs@gmail.com";
var accountPassword = "12345";
accountCity = "Indore";
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "cs@gmail.com";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
