/*****************loops which are already engected in Array ******************** */

const progLang = ["js", "java", "cpp", "ruby", "html", "css"];

//Here we use loops of array then we use methods forEach and others and forEach is need for a call back function
progLang.forEach(function (val) {
  //here we know this is a Call back funtion so it's no need a name of function
  //console.log(val);  //here we get parameters
});
/*Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.


Performs the specified action for each element in an array.
*/

//using Arrow function
progLang.forEach((item) => {
  //here we declare arrow function as a call back function and again we don't need name of the function
  // console.log(item);
});

//using printMe a New Method

function printMe(item) {
  //console.log(item);
}

//console.log(printMe);
//progLang.forEach(printMe);

progLang.forEach((item, index, Array) => {
  //here we get item, index and full Array also
  //console.log(item, index, Array); //here we print it
});

/* +++++++++++++++++++++ declare new Array ++++++++++++++++++++++++*/

const newArray = [
  {
    name: "Ram",
    class: "B.pharma",
    section: "A",
  },
  {
    name: "Shekhar",
    class: "BSc.",
    section: "M1",
  },
  {
    name: "Kunal",
    class: "BSc",
    section: "D",
  },
];

//How to Access in object which is  Declared inside the Array
newArray.forEach( (item ) => {  //here declare perameter item which Access for every item of Array 
  console.log(item.section);  //when we on the item of Array so we know it is an Object so Access inside an Objects using dot (.) notation
});
