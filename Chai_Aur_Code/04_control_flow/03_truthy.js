/*********  Truthy And Falshy Values ************* */

//const userEmail = "mrcs@cs.com";
let userEmail = "";
//const userEmail = [];

if (userEmail) {
    console.log("Got the User Email");
} else {
    console.log("Don't Have User Email");
}

//Falshy Values :=> false, 0, -0, null, undefind, NaN, BigInt 0n, "" (empty string),


//Truthy Values :=> true, "0", 'false', " " (empty string with space), [], {}, function () {},

if (userEmail.length === 0) {
    console.log("Array is Empty");
};

let  sadeness = {};

if (Object.keys(sadeness).length === 0) {
    console.log("sadness is hard");
};


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//Nullish Coalescing Operator ( ?? ) : null undefind

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 110;
val1 = null ?? 100 ?? 200;
console.log(val1);


//Terniary Opeerator

//condition ? true : flase
const itremSet = 100;
itremSet <= 80 ? console.log("less then 80") : console.log("bigger then 80")