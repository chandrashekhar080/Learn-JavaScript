// // // // // let a = "hemant shekhar"
// // // // // console.log(a)

// // // //  let a = 5;
// // // //  let b = 10;

 
// // // //  {a,b}  {b,a}
// // // //  console.log(a,b)


// // // let a = -1;
// // // if(a <  0 ){
// // //     console.log(`val : ${a} is negative`);
    
// // // }else if(a > 0){
// // //     console.log(`val : ${a} is positive`);
    
// // // }else{
// // //     console.log(`val : ${a} is zero`);
// // // }

// // let a = null;
// // let b = undefined;

// // if(a == b){
// //     console.log("okk");
    
// // }else{
// //     console.log("wrong");
    
// // }

// let text1 = "Hello";
// let text2 = "hemant!";
// // let text3 = text1.concat(" ",text2);
// let txt = text1 +  " " + text2;
// console.log(txt )
// const readline = require("readline")
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question("enter your marks ", (marks) => {
//     a = parseInt(marks);
//     switch (true) {
//     case (a >=90):
//         console.log("A+");
//         break;
//     case (a >=80 && a <= 89):
//         console.log("B");
//         case (a >= 70 && a <= 79):
//             console.log("C");
//             break;
//         case (a >= 60 && a <= 69):
//             grade = "D";
//             break;
//         default:
//             grade = "F";
// }
//   rl.close;
// });

//let num = 0;

// for (let i = 0; i < 11; i++) {
//    console.log(i);
//   // num++;
       
// }

// do {
//     console.log(num);
//     num++;
// } while (num<11);

// const { log } = require("console");
// const { stdin } = require("process");
// const readline = require("readline");
// const rl = readline.Interface({
//   input : process.stdin,
//   output : process.stdout
// })

// rl.question("enter input", (arr) => {
//   let num = parseInt(arr)
//   let sum = 0;
  
//     for (let i = 1; i <= 10; i++) {
//       //  console.log(i);
//       sum = num * i;
//       console.log(sum);
//     }

// rl.close
// // printNat(num)
// })


// const { log } = require("console");
// const { stdin } = require("process");
// const readline = require("readline");
// const rl = readline.Interface({
//   input : process.stdin,
//   output : process.stdout
// })

// rl.question("enter input", (c) => {
//   let cel = parseInt(c);

//   let F = (cel * 9/5) + 32;
//   console.log(F);
  
// rl.close
// // printNat(num)
// })

// function findMax(a,b,c){
//   let maxVal = Math.max(a,b,c);
//   //console.log(maxVal);
//    return maxVal;
// };

// //let ans = findMax(5,8,11);
// console.log(findMax(5,8,11));

// let str = "hemant";

// let count = 0;
// function getLength(){
// while (str[count]) {
//  // console.log(count);

//   count++;
//  // console.log(count);

// };
// return count;
// };

// console.log(getLength(str));


let arr = [1,9,2,3,4,7,5,6,8];

function sortArr(){
for (let i = 0;i<arr.length;i++){
  for(let j = 0;j<arr.length-1;j++){
  if(arr[i] < arr[j]){
  [arr[i], arr[j]] = [arr[j], arr[i]];
  } else {
   // arr2.shift(arr[i]);
  }
}
}
return arr;
}

console.log(sortArr(arr));
