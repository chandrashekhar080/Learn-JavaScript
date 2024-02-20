/***************      Object's ************************* */

//sigleton object's

const instaUser = new Object(); //this is a singleton object

//give the value and key's for above object's
instaUser.email = "cs@gmail.com";
instaUser.userId = "123abc";
instaUser.isLoggedIn = false;
instaUser.city = "Indore";
/*the diff is not enternally just a declaration diff we get */
const tinderUser = {
  email: "mrcs@gmail.com",
  name: "Shekhar",
  isLoggedIn: false,
  city: "Noida",
}; //this is a Non-Singleton object

//give the value and key's for above object's

//console.log(tinderUser);
//console.log(instaUser);

const facebookUser = {
  email: "face@gmail.com",
  name: {
    full_name: {
      first_name: "Chandra",
      middle_name: "Shekhar",
      last_name: "Ghosh",
    },
  },
  address: {
    city: "Dehli",
    state: "MP",
    country: "Bahart",
  },
  isLoggedIn: true,
};
//here we declare object inside the object and then access it by this dot(.) method
//console.log(facebookUser.name.full_name.middle_name);
//console.log(facebookUser.address.country);

//how to merge object's

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
const obj3 = { 7: "g", 8: "h", 9: "i" };

//const obj5 = {obj1, obj2, obj3};//when we use this syntax we get object inside the object
//const obj5 = Object.assign({}, obj1, obj2, obj3);//here we use assign method to print values of object's and merge all object's
//and we use {} as a store and other(obj) as a source

//And the Easiest way for this operation i think sphrade operator
const obj5 = { ...obj1, ...obj2, ...obj3 };
//console.log(obj5);


//when we get many users then we have objects inside arrays and then access that's values
//here we declare objects inside array and get the values and keys 
const users = [
    first_User = {
      id: "a",
      email: "cs@gmail.com",
    },
    second_user = {
      id: "1a",
      email: "cs@gmail.com",
    },
    third_user = {
      id: "2a",
      email: "cs@gmail.com",
    },
   /* 4 = {
      id: "3a",
      email: "cs@gmail.com",
    },
    5 = {
      id: "4a",
      email: "cs@gmail.com",
    },
    6 = {
      id: "5a",
      email: "cs@gmail.com",
    },
    */
];

//console.log(users[1].id);//we get id of index 1 object
//console.log(users[2].email);//index 2 email

//console.log(Object.keys(users[1]));//here we get all keys of 1 index object inside  the array //Returns the names of the enumerable string properties and methods of an object.
//console.log(Object.values(users[1]));//here we get all values of keys of 1 index object inside  the array //Returns an array of values of the enumerable properties of an object
//console.log(Object.entries(users[1]));//here we get all entries of 1 index object inside  the array //Returns an array of key/values of the enumerable properties of an object

//console.log(Object.keys(instaUser));
//console.log(Object.values(instaUser));
//console.log(Object.entries(instaUser));

console.log(tinderUser.hasOwnProperty('city'));//true
/*
(method) Object.hasOwnProperty(v: PropertyKey): boolean
Determines whether an object has a property with the specified name
*/
console.log(tinderUser.hasOwnProperty('age'));//false

/*we have to know all about this properties of objects in detail in the console 
where we declare the objects and get a console.log for the objects and get all details of operations
and practice that operations eith syntax easiely
*/