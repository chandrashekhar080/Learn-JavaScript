// Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2024, 0, 22);
// let myCreatedDate = new Date(2024, 0, 22,15,3,20);

// let myCreatedDate = new Date("2024-01-22");
let myCreatedDate = new Date("01-22-2024");

// console.log(myCreatedDate.toLocaleString());

//*************** Time ******************

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); // in ms
// console.log(Math.floor(Date.now()/1000)); // in sec

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
