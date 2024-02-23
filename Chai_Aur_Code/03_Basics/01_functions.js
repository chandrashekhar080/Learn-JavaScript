/**********  Function's ******************** */


function fun(){
    console.log("Shekhar");
    return 0;
}

fun();
//Function Syntax
function addTwoNumbers(Num1, Num2) { //declare a parameters
    //Function Body
    console.log(Num1 + Num2);
};

//sayMyName(5, 5);//giving a Arguements or Values
//sayMyName(3, "5");//
//sayMyName(5, "A");//

function addTwoNumbers(Num1, Num2) { //declare a parameters
    //Function Body
    let result = Num1 + Num2;//here we return values in the varable inside the function scope
    return result;//in Function that is copulsary to return a values when we declare are want a return value than function wiull be return us the value which we waant else function returns undefind
    //return Num1 + Num2; 


};
const result = addTwoNumbers(5, 5);//store a function arguements in the variable outside the function scope that is globale scope

//console.log("Result :", result);//Now we Free to print it 

//Show a User log in Message
function logInMessage(userName){
    return `${userName} Just Logged In😎`;
}

const Message = logInMessage("Shekhar");
//console.log(Message);
console.log(logInMessage("Shekhar"));


//function with condition
function userLogIn(){
    //function body
    if (userLogIn == true){
        console.log("Welcome, you at]re Logged In !");
    } else {
        console.log("Wrong Criteria Try Again !");
    }
};

userLogIn(false);

function userpage(userName = "sam"){
    if(userName === undefined){
        console.log("please Enter a Value");
        return;
    }
   return  `${userName}, Welcome`;
}
//console.log(userpage());
console.log(userpage("Shekhar"));
