/************* Use of Loops In Array's  *********************** */

const progLang = ["js", "java", "cpp", "ruby", "html", "css"]; //Declare an Array


const values = progLang.forEach( (item) => {  //store a value and using foreach declare a call function
   // console.log(item); //but here we get undefined
    return item; //after return item still we get undefined
} ) 
//so we noticed the forEach method is retrurn Undefined means Nothing

//console.log(values); //print values


const friend = ["Ram", "Shekhar", "Vivek", "Kunal"];

//use Another Methos i.e. Filter 
//A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
//Returns the elements of an array that meet the condition specified in a callback function.
//Returns the elements of an array that meet the condition specified in a callback function.

//@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
const nameOfFriend = friend.filter( (item) => item == "Vivek");
console.log(nameOfFriend);



const series = [1,2,3,5,6,7,5,9,1,2,58,8,26,5,9,65,65,56,15];

//const numSeries = series.filter( (num) => num > 8 )
//console.log(numSeries);

const numSeries = series.filter( (num) => { //here start scope using function
   return num > 5; //here we need to use retrurn keyword because we use scope of a call back function 
} )

//console.log(numSeries);


const newNum = [];

series.forEach( (num) => { //Here we use forEach so we already Know that the forEach Method is return undefinf so we use inside call back function if condition
    if(num > 4){
        newNum.push(num); //push value of num after passing a condition
    }
} )

//console.log(newNum);


const friendDetails = [ 
    { name: "Ram", class: "B.pharma", section: "A", status : "school"},
    { name: "Shekhar", class: "BSc.", section: "M1", status : "school"},
    { name: "Kunal", class: "BSc", section: "D", status : "room"},
    { name : "Vivek", class : "B.Com", section : "B", status : "famaily"},
    { name : "Jagrati", class : "BSc", section : "M4", status : "college"},
    { name : "Hemant", class : "BSc", section: "M1", status : "college"},
    { name : "Harsh", class : "BSc", section : "M1", status : "college"}
]
//here we want to filter which object have section M1
const friendSchool = friendDetails.filter( (name) => name.section == "M1"  )

console.log(friendSchool);//and we get it 

//here we wnat to filter which object have class BSc
const friendClass = friendDetails.filter( (course) => course.class == "BSc"  )

console.log(friendClass);
