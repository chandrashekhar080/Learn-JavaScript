const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a number: ", (num) => {
    console.log(num % 2 === 0 ? "Even" : "Odd");
    rl.close();
});



function checkEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOrOdd(7)); // Output: Odd
