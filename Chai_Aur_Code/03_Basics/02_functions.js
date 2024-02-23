/***********   Arry's And Object's in Functions ************* */

function cartprice(Num1){ //this is for single value arguement
    return Num1;
};

console.log(cartprice(5));

function cartpricecalculate(...Num1){ //this is for multi value arguement
    return Num1;
};

console.log(cartpricecalculate(5, 5, 6, 10));

const myObject = {  //this is for How to Use Object in Functions
    username : "Shekhar",
    price: 199,
}
function priceOfCart(anyobject){
    return `UserName is : ${myObject.username}, price is : ${myObject.price}`
}

console.log(priceOfCart());

//Same we declare Object inside the Functions
function localCart(cartobject){
    let priceCart = {
        username : "mrcs",
        price : 499,
    }
    return `UserNAme is : ${priceCart.username}, price is ${priceCart.price}`
}

console.log(localCart());


//Array with a Function

const student_Details = ["Ram", 20, "A" ,80];

function details(anyArray){
  return `Student Name : ${student_Details[0]}, Age : ${student_Details[1]}, Section : ${student_Details[2]}, Marks : ${student_Details[3]}`;
}

console.log(details());

//same arrays declare inside the function
function student(studentArray){
    let student_Details = ["Ram", 20, "A" ,80];
    return `Student Name : ${student_Details[0]}, Age : ${student_Details[1]}, Section : ${student_Details[2]}, Marks : ${student_Details[3]}`;
};

console.log(student());