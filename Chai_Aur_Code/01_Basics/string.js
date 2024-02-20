// let myName = "Shekhar";
// let age = 20;

// console.log(myName + " age is " + age);
// console.log(`My name is ${myName} & age is ${age} `);


// const gameName = new String('Jeetu');

// console.log(gameName);
// console.log(gameName.length);

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.charAt(0));
// console.log(gameName.charCodeAt(0));
// console.log(gameName.codePointAt(0));

// console.log("\n***********************\n");

// let newName = gameName.concat(" Hemant");

// console.log(newName);
// console.log(newName.length);

// console.log(newName.indexOf('e'));
// console.log(newName.lastIndexOf('e'));

// String.substring(start , endIndex)

// console.log(newName);

// console.log(newName.substring(2));
// console.log(newName.substring(1,4));
// console.log(newName.substring(-1 , 4)); // negative value take as 0


//String.slice(start, endIndex)
// assign negative value

// console.log(newName);

// console.log(newName.slice(0,3));
// console.log(newName.slice(-6,-1)); // 


// String.substr()

// console.log(newName.substr(1,7)); // substr(starting index , length)


// String.trim()

// const greet = "      Hello JavaScript!     ";

// console.log(greet);

// console.log(greet.trim());
// console.log(greet.trimStart());
// console.log(greet.trimEnd());


// String.repalace()

// const text = "Harsh";

// console.log(text.replace('aa' , 'A'));
// console.log(text.replace('i' , 'I'));
// console.log(text.replace('i' , ''));

// console.log(text.replaceAll('i' , ''));
// console.log(text.replaceAll('a' , 'A'));

// const url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.replace('%20' , '-'));

// console.log(url.includes('.com'));


// String.spilit('seprator')

const names ="Shekhar-Hemant-Harsh";
console.log(names.split('-'));
