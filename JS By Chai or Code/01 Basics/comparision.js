// console.log(2> 1);
// console.log(2 == 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("02" > 1);
// console.log("2" == 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
equality check == and comparioson check(< > <= >=) work differently.
Comparison convert null to a number , treating  it as 0.
That's why null>= 0 is true and null > 0 is false.
*/

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

/*
=== Strict Check
check value and its datatype
*/
console.log("2" == 2); // convert string to number
console.log("2" === 2); // not convert
