// Primitive(Call by value)

// 7 types : String , Number, Boolean , null , undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 347949823791834343435n;

//  Javascript is dynamically type language


// Reference Type(Non primitive)

// Array, Objects, Funtions

// all non primitive type , is type of object & Function => function(Object function)

const heros =["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name: "Shekhar",
    age: 20
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof scoreValue);

/*

Type of value

Null => "object"
Undefined => "undefined"
Boolean => boolean
Number => number
String => string
Array => object
Object => object
FuntionCall => function(Object Function)
BigInt => bigint
Float => number

*/

// +++++++++++++++++++++++++++++

// Stack (Primitve) , Heap (Non-Primitive)
// jb bhi stack memeory use hoti hai hume variable ka ek copy milta hai

// agr memeory heap mai define hoti hai toh referene milta hai original value ka 
// jo bhi change krege original value mai change ho jayega

let name = "Shekhar";

let otherName = name;
otherName = "mrcs";

console.log(name);
console.log(otherName);

let userOne = {
    email: "cs@gmail.com",
    upi: "1234@upi",
}
let userTwo = userOne;

userTwo.email = "Chandu@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
