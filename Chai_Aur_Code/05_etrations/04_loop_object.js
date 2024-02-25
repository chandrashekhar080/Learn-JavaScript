/************** Object's ********************* */

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Rubby",
    html : "Hyper Text Markup Language",
    css : "Cashcading Style Sheet",
};

//++++++++++++++++ forin loop +++++++++++++++++++++++++++++++++++++
/*
//forin Loop Syntax
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/

for (const key in myObject) {  //
 // console.log(key);    //only key we get only key's which we declare
 //console.log(myObject[key]); //only value we get only values which we declare
  //console.log(`${key} : Shortcut for the ${myObject[key]}`); //here print both key and values
}

/*************  using forin for Array's ************************** */

const progLang = ["js", "java", "cpp", "rb", "css", "html"]; //declare an Array  
//Note: => Arry's have key's default and here we don't able to use object's there we declare key's what we want
for (const key in progLang) {
  // console.log(key);  //we get key's means index of values
  //console.log(progLang[key]); //we get values of key
 // console.log(`${key} :- ${progLang[key]}`); //we get both key and value
}


/************** Using forin loop for Map  ******************** */

//declare a Map
let map = new Map();
//console.log(map);  //print a map is empty

//give the value for map using set
map.set('IN', "Bharat");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "Bharat"); //Here we Noticed one thing when we declare same value in one map and get repeated value so we never get printed 

//console.log(map); //before give the value we get map values  in object form

for (const key in map) {
   console.log(key);  //Here we get empty 
}
//So we get a thing that we don't use forin loop for map and we know map is not a iterator 