/*****************   for of loops ******************* */

["", "", "", ""] // values inside Array's

[ {}, {}, {}, {}] // values inside objects's and object's inside Array's

/*
//syntax of forof loop
for (const iterator of object) {
    
}
//iterator => Array's ,Object's, String's 
//Object => here object meaning is different here we target the variable or object which we want to use or target
*/

const myArray = [1, 2, 3, 4, 5, 6];

for (const num of myArray) {
   // console.log(num);
}

const greeting = "Hello World";

for (const greet  of greeting) {
  //  console.log(`Each Char is : ${greet}`);
}


/*++++++++++++++++++++++     Maps and It's Method propertirs +++++++++++++++++++++++++ */

//declare a Map
let map = new Map();
//console.log(map);  //print a map is empty

//give the value for map using set
map.set('IN', "Bharat");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "Bharat"); //Here we Noticed one thing when we declare same value in one map and get repeated value so we never get printed 

//console.log(map); //before give the value we get map values  in object form

//use forof for map
for (const [key, value] of map) {  //so we use [] in the place of interator
    //console.log(key); //but here we print map values in diffrent form and get different array's
   // console.log(key, ':-', value); //but want ot print key and values in single line 
}

//can we are use forof in object's  let's see
const myObject = {
    'game1' : "FreeFire",
    'game2' : "pubG",
    'game3' : "Ninza",
}
//we get an Error using forof woth object's 
for (const game of myObject) {
    console.log(game);
}

//so we lnow we don't use forof with Ob ject's and we know other method'd for object's is exist

