/************ here we practice Methods for Arrays ******************** */

const myNum = [1,2,5,8,7,9,6,4,8,2];

//const newNum = myNum.map( (num) => num + 10 ); //Normal Function
// console.log(newNum); //direct console.log because  we have Globle Scope
const newNum = myNum.map( (num) =>  { //Arrow Function
   //  num = num + 10;    //first declare condition
  //  console.log(num); //then console.log inside the function scope
  return num + 10; //when don't want to use console.log use return
});



//here we use one or more then one methods in one function let's Go
const filterNum = myNum.map( (num) => num * 10 ) // expecteh output [ 10, 20, 50, 80, 70, 90, 60, 40, 80, 20]
                       .map( (num) => num + 2 ) // expected output [ 12, 22, 52, 82, 72, 92, 62, 42, 82, 22 ]
                       .filter( (num) => num > 25) // expected output [ 52, 82, 72, 92, 62, 42, 82 ]
                      

                       console.log(filterNum);

