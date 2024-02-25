/***************  Loop's  **************************** */
/****************  While Loop     ******************* */
/*
while loop syntax
while (condition) {
    
}
*/

let index = 0;    //first declare the variable
while (index <= 10) {  //write a condition
   // console.log(`Value of index ${index}`);  //print with conditon
    index = index + 2;  //incrise or decrise the value of declared variable
} 


const myArray = ["Ram", "Shekhar", "Vivek", "Kunal"];  //use a Array to use while loop

let friend = 3;  //declare a variable 

while (friend < myArray.length){  //write a condition
   // console.log(`Value of Element : ${myArray[friend]}`); //print with array case
   friend = friend++;  //here we encrise using ++
    friend = friend + 1; //here we encrise using 0 1 or what value we want inder the condition
}


/*
//do while loop syntax
do {
  
} while (condition);
*/


//let socre = 0;
let score = 11; //what happens when score is already greater then condition
//it's print's a value because in a dowhile loop is process first and then check the condition
do {
  //console.log(`Score : `, score);
  score++;
  
} while (score <= 10);

