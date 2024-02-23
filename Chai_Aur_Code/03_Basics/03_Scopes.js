/***********  Scopes  ******************** */

let a = 10   ///here we declare variable as let 
const b = 20//here we declare variable as const
var c = 30//here we declare variable as var

if(true){  //inside the if scope we declare a variable 
let a = 100 // as let
const b = 200 // as const
var c = 300 // as var
//c = 300
//let c = 300
//console.log("Inner", a);
//console.log("Inner", b);
//console.log("Inner", c);
}

//console.log(a);    //here we declare variable who is a and using let, but we get outside "a" means a globle scope variable
//console.log(b);    //here we declare variable who is b and using const ,but we get outside "b" means a globle scope variable
//console.log(c);    //here we declare variable who is c and using var, but in this variable we get inside "c" means a innerScope variable

/* so In short word's we say that let and const is get a value by the scope and var does not so the main reason is not use var for declaring a variable */
//we say : - "Begani Sadi Main Abdulla Diwana😂😂"

//Note :- when we use example in system then the Globle Scope Behaviour  is with Node id Diff and with Console id Diff


/************ Nestet Functions  *************************** */

function Bap(){
      const fatherName = "Shekhar";

      function Beta(){
        const sonName = "Harsh";
       // console.log(fatherName);//Here get the fatherName is Declare inside the Function Bap so we use this inside the Scope of Bap Function And also inside a Beta Function
      }
      //console.log(sonName);//here we get the sonName is Declare inside the function Beta so we can't use this outside the scope of Beta Function

      Beta(); //here we call Beta function

}

Bap();//Here we Call Bap Function

//so we easily say that the Bap is a Globle function And Beta is a Inside Box Function And All is nestet Function

if(true){
    const username = "Shekhar";
    if (true) {
        const institute = "Holkar";
       // return username;
  //     console.log(username);
    }
    //return institute; //Unreachable code detected.when we return after retrun
    //console.log(institute);//not defind
}


// ++++++++++++++++++++++++  interesting thing ++++++++++++++++++++++++++++++++++++
console.log(addOne(7)); //but here we able to access
//in Below case we Access the function before Declaration
function addOne(num){ //this is a Normal Function
    return num + 1;
}

//addOne(7);

//addTwo(22); //ReferenceError: Cannot access 'addTwo' before initialization
//in Below case we can't Access the function before Declaration
const addTwo = function(num){ //this is an Expretion
    return num + 2;
}

//addTwo(22);
console.log(addTwo(6));