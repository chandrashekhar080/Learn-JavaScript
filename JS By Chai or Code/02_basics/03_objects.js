/*******************   Object's ********************** */

//sigleton
//Object.create();


//object Literals

//symbol declaration
const mySym = Symbol("key2.0");

//object declaration
const myObject = {
    name : "Shekhar",
    email : "cs@gmail.com",
   // mySym : "myKey2.0",//Behave like A Normal string
    [mySym] : "myKey2.0",//Add Symbol inside Object And Give it a Value
    age : 20,
    city : "Indore",
    "full_Name": "Chandrashekhar Ghosh",
    isLoggedIn : false,
    lastLogiIn : ["Monday","Suturday","Sunday"],


}
//console.log(myObject.email); //print value od object
//console.log(myObject.isLoggedIn);//print in boolean values
//console.log(myObject["city"]);//print Array inside object's
//console.log(myObject["full_Name"]);//print string key and it's value 
//console.log(myObject.mySym);//Normal print of Symbol
//console.log(myObject[mySym]);//That is a Symbol With Datatype

myObject.email = "mrcs@google.com";
myObject.city = "Noida";
//Object.freeze(myObject);
myObject.email = "shekhar@netflix.com";
//console.log(myObject);



/*********************  Function **************** */

myObject.myfunction = function () {
    console.log("Hello World");
  // return 0;//when we not returning 0 then we get undefind 
}

console.log(myObject.myfunction());


myObject.newFunction = function(){
    console.log(`Hello New User - ${this.full_Name}`);
    return 0;//when we return somthing we get the value what we return
}

console.log(myObject.newFunction());