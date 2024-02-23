//************  IIFE :- Immediately Invoked Function Expression ***************************

function db() {  //Normal function
   // console.log(`DB Connected`); //connecting to the DATAbase
}
//  db(); //call a function

//when we use IIFE

(function data() {  //So when we call function immediately we write function inside () and add () at the end
 //this is a named IIFE
    console.log("DB Connected one");
})(); // call function immediately


//Use Arrow function in IIFE
( () => {   
    //AUR YE Benam Rista hai😂
    console.log("DB Connected Two");
})(); //";" it's very imp 


//WHEN WE WANT TO GIVE A VARIABLE TO A FUNCTION
( (name) => {    //we know same as a function parameters and arguement's
    console.log(`Hello ${name}`);
})("Shekhar"); //pass a Arguement


