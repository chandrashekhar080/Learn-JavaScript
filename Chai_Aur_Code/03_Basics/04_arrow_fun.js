/***********************Arrow Functions ***************************** */

const user = {  //Declare a Object Foe user
    username: "Shekhar",
    price: 999,
    logInMessage: function (){  //defind logInMessage as a Fuction
       // console.log(`${this.username}, Welcome to Website !`);//log In Message
      //  console.log(this); //print the rhis property so get all out this element's an it's values
    } //function scope

}//object scope

//user.logInMessage; 
//user.logInMessage(); //firts run with  default value
user.username = "Hemant";//here we change the value of username
//user.logInMessage(); //and run with chnage value and we get chaged output
//console.log(this);  //here we don't have any scope are or something inside the globle scope so then we get a empty this object


//++++++++++++++++++  Arrow function ++++++++++++++++++++++

function cs (){
    const username = "Shekhar"; //when we declare variable in function then
    //console.log(this.username);//use for print properties and values of this
    //console.log(this.username); //this is print undefind so this only take values from objects type
}

//cs();

const HCH = function (){
    let username = "Shekhar";
    //console.log(this.username);
}

//HCH();


//This is an Arrow Function Syntax " () => { } " 
const CRS = () => {
    let username = "Ram";
    console.log(this);

}
//we see that the Arow function is diff in syntax and we use this in a normal function easily and in arrow function we use this but it's returns empty object

//CRS();


const addTwoNum = (num1, num2) => { //Normal Arrow Function
    return num1 + num2;  //explisit return when we use return keyword
}

const addTwoNumber = (num1, num2) => num1 + num2 ; //this is implisit return here we don't have to use () return keyword code will be write in one line code
//implisit reurn when we don't use return keyword
const addTwoNumb = (num1, num2) => (num1 + num2); //this is useful in React
console.log(addTwoNum(5, 8));

//here when we Declare an Object so we able to Declare when we use () and inside () we use Object's
const userTech = () => ({ username:"Shekhar"});

console.log(userTech());

//here when we Declare Array
const boss = [200, 300, 400, 500];

boss.forEach(function () {
    //here we use function inside Array elements
});

boss.forEach( () => {
    //here we use Arrow function inside Array
});
