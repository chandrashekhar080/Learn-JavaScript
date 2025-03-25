var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function generatePermutations(s1, s2, s3) {
    const result = [];
    for (let char1 of s1) {
        for (let char2 of s2) {
            for (let char3 of s3) {
                result.push(char1 + char2 + char3);
            }
        }
    }
    return result;
}

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        rl.once('line', (line3) => {
            const permutations = generatePermutations(line1.trim(), line2.trim(), line3.trim());
            permutations.forEach(p => console.log(p));
        });
    });
});