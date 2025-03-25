
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function addNumbers(a, b) {
    return Promise.resolve(a + b);
}

rl.once("line", (num1) => {
    rl.once("line", (num2) => {
        addNumbers(parseInt(num1), parseInt(num2))
            .then(console.log)
            .finally(() => rl.close());
    });
});
