/*********************   Loop's  *********************** */
/*******************   For Loops's ************************* */

const formes = [];

/*
//syntax of For loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
};
*/
//using for loop

for (let index = 0; index < 10; index++) { //we don't have array which is named index so we write a hard coded value for condition
    const element = index;
   // console.log(element);
}
//first the loop check the declared variable and it's value then check the condition we passed and then goto inside the loop and execude the writed  code and then depend on code and condition encrise the index value and that is executed step by step and when condition failed execution will be out of the loop scope
for (let i = 0; i <= 10; i++){  //here we change condition, variable and  get 10 also 
    const element = i;
   // console.log(i);
}

for (let sec = 0; sec <= 60; sec++) {
  const second = sec;
  if (sec == 60) {
  //  console.log("1 minute");
    for (let min = 1; min <= 60; min++) {
      const element = min;
      if (min == 60) {
    //    console.log("1 hour");
        for (let hrs = 1; hrs <= 24; hrs++) {
          const element = hrs;
          if(hrs == 24){
       //   console.log("1 Day");
          } else {
        //    console.log("Hour :", hrs);
          }
        } 
      } else {
      //  console.log("Minute :", min);
      }
    }
  }else {
   // console.log("Second :", sec);
  }
}



//here print sec , min and hrs
for (let hrs = 0; hrs <= 5; hrs++) {
       //  console.log(`: ${hrs} `);
     for (let min = 0; min <= 5; min++) {
       //  console.log(`: ${min} : ${hrs}`);
         for (let sec = 0; sec <= 5; sec++) {
    //       console.log(`${sec} : ${min} : ${hrs}`);
            
         }
     }
}

//here we create a table 0 to 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      //  console.log(`${i} * ${j} =`, i*j);
        
    }
    
}

const myArray = ["Ram","Shekhar","Hemant","Harsh"];

for (let index = 0; index < myArray.length; index++) {  //we already know array start from zeroth 0 index 
    const element = myArray[index];
  //  console.log(element);
    
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {  //here we passed a conditions where we want to stop our loop execution
       // console.log("Dedected 5");
        break;  //using break we break execution of loop
    }
   // console.log(`Value of index is : ${index}`); //we out of the loop
    
}
for (let index = 1; index <= 10; index++) {
    if (index == 5) {  //here we passed a conditions where we want to alert our loop execution
        console.log("Dedected 5");
        continue;  //using continue we continue execution of loop
    }
    console.log(`Value of index is : ${index}`); //we continue with the loop
    
}
 