 /***************************  Condition's ***************** */

// condition operators
// < , >, ==, <=, >=, != ,===, &&, ||,


 const userLoggedIn = false ; //Declare a variable
//using ==
 if (userLoggedIn == true) { //take a condition
    //  console.log("Welcome to the website");   //when it is true execute this
 } else {
    //console.log("Enter your id and pass"); //when it is flase execute thiss
 } 

 const score = 90;
//when we use it it's importent to use CONDITIONS and  variable inside the scopes
 if (score > 100) {//using >
    let power = "Fly";
   // console.log(`User Power : ${power}`);
 } else {
   // console.log("Keep it up");
 }

// console.log(`User Power : ${power}`);//when we declare it outside the scope we will get Error

const balance = 1100;
//using >
//if (balance > 1000) console.log("Good"); //implisit scope we already know in the functions it is semilarly act in conditions
  


//multy conditional test

//if (balance < 500) { //using <
//    console.log("less then 500");
//} else if (balance < 750) {
//    console.log("less then 750");
//} else if (balance < 1000) {
//    console.log("less then 1000");
//} else if (balance < 1200) {
//    console.log("less then 1200");
//} else {
//    console.log("Good Balance");
//}


const maths = 78;
const science = 80;
const english = 78;
const hindi = 85;
const Soscience = 88;
let result = maths + science + english + hindi + Soscience;

//if (maths >= 33 && science >= 33 && english >= 33 && hindi >= 33 && Soscience >= 33) {
   // console.log("Passed in all subject's");
//} else {
    //console.log("Failed");
//}
//console.log(result);

//if (result > 450 || result == 450) {
  //  console.log("passing with Garded 'A+'");
//} else {
  //  console.log("passing with Graded 'A'");
//}

