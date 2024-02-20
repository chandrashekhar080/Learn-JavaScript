/***********       Arrays Method's ************** */

const marvel_Heroes = ["Spiderman", "Thor", "Ironman"];

const dc_Heroes = ["Betman", "Superman", "Flash"];

//console.log(marvel_Heroes);
//console.log(dc_Heroes);

//marvel_Heroes.push(dc_Heroes); //Here we a Array inside the Array So we Will Get The Array Inside The Arrya It is Not Merge the VAlur of the lements of Onother Array

//console.log(marvel_Heroes);
//console.log(marvel_Heroes[3][1]);//So when we do that above so we have to use this type of syntax for accesing the value of elements which we want

//here we use concat for facing this situation
const all_Heroes = marvel_Heroes.concat(dc_Heroes); //we have to store this Arrays ino new Array or value
//console.log(all_Heroes);//Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const all_New_Heroes = [...marvel_Heroes, ...dc_Heroes];//this is a seprate method in this method all arrays are convert into free values means all elements are out of array

//console.log(all_New_Heroes);//here we get all Arrays All elements in one sentense or line this is same as concat 
 
const another_heroes = [1, 2,5, [1,2,5,4], 4,5 ,[6,5,2,[5,5,5]]];//another_heroes: (number | (number | number[])[])[] we have Array insode Array

//console.log(another_heroes);

const new_Another_Heroes = another_heroes.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//console.log(new_Another_Heroes);


//check if array then convert
console.log(Array.isArray("Shekhar")); //(method) ArrayConstructor.isArray(arg: any): arg is any[] here check the Array is Array are Not With the Help of isArray
console.log(Array.from("Shekhar"));//Creates an array from an iterable object.  here we Convert This Value To Array
console.log(Array.from({name:"Shekhar"})); //this the imp and interesting value for arrays 


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.// A set of elements to include in the new array object.

 