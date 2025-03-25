












var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        rl.once('line', (line3) => {
            const word1 = line1.trim();
            const word2 = line2.trim();
            const word3 = line3.trim();
            console.log(isAnagram(word1, word2) && isAnagram(word1, word3));
        });
    });
});


