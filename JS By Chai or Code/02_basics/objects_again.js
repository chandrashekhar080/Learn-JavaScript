/************  Object's with API ************************ */

const course = {
    course_name : "Learn JS Course",
    course_fee : 999,
    course_instructor : "Hitesh",
}


//console.log(course.course_fee);
//change in the structure means distructure the code

//const {course_fee} = course;//here we change in the key 
const {course_fee : fee } = course;//here we distructure then value course_fee to fee only

console.log(fee);



//React Code 
/*
const navbar = ({hostnName}) => {

};

navbar(hostnName = "Shekhar");

console.log(hostnName);
*/

//JSON Values
/*
//in object Form
{
    "name" : "Shekhar",
    "course" : "JS in Hindi",
    "course_fee" : "Free",
}
//in Array Form
[
    {
        "name" : "Shekhar",
    "course" : "JS in Hindi",
    },
    {},
    {}
]
*/