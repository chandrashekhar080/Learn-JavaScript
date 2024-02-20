///Array ++++++++++++++++++++++++++++++++++++
let myArr = [1, 25, 5, 58, 55,4 ,56];
const myArr2 = new Array(1, 5,2,5);
//console.log(myArr2[2]);

let myHeros = ["Akshay", "Shushant", "Sidharth"];
//console.log(myArr[3]);
//console.log(myHeros[2]);
//console.log(myArr.length);

//myArr.push(5); //Add something in the Array And Imp Thing is it can Add the element Value at the last
//myArr.push(100); 
//myArr.pop(); //Remove the last Element of the Array
//myArr.unshift(20);//Add something in the Array And imp Thing is it can Add the Element Value at The First
//myArr.shift(); //Remove the Forst Element of the Array
//console.log(myArr.includes(55));//for find that value exict or not 
//console.log(myArr.indexOf(25));//for find the index valure of the elements

//console.log(myArr);

const newArray = myArr.join(); //for converting all array value in the string  and also convert the data type number to string
//console.log(newArray);
//console.log(typeof newArray);



///****************    Slice And Splice ************************/
//create a Arrray
const arrOne = [1, 2, 3,4, "Ram", "Sita", "Krishna", "Radha" ];

console.log("A" ,arrOne); //here we print our Array in Normal so we get no chamges

//use slice 
let arrTwo = arrOne.slice(1,5); //Here we use slice for the Array
console.log("slice",arrTwo); //And We know that the slice Will not count the last elements we passed  
console.log("A", arrOne); //and here we get Full Wthout any manuplatation

//use slice
let arrThree = arrOne.splice(1,5);//Here we Splice for the array and we will know that splice count the elements we passeed
console.log("Splice", arrThree);//and print the including last elements we passed

console.log("C", arrOne);//So Here we get the the Array with manuplatation And only those values print which is not splice

/*So we will say
1. the slice is not include the last value And
the splice will include the last value

2. the slice don't do any manuplatation with the Array And print All Value of Array
the splice does manuplatation with the Array And Only print Those Value which is not included
/*/
