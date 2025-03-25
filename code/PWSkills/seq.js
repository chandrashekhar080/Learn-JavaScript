var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function generateSubsequences(strings) {
    let result = new Set();

    function backtrack(index, current) {
        if (index === strings.length) {
            if (current.length > 0) result.add(current);
            return;
        }

        for (let char of strings[index]) {
            backtrack(index + 1, current + char);
        }
        backtrack(index + 1, current); // Skip current string
    }

    backtrack(0, "");
    return Array.from(result).sort();
}

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        rl.once('line', (line3) => {
            let strings = [line1.trim(), line2.trim(), line3.trim()].filter(s => s.length > 0);
            const subsequences = generateSubsequences(strings);
            console.log(subsequences.join(","));
            rl.close();
        });
    });
});
