var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function largestSquareMatrix(matrix) {
    let maxSize = 0;
    let dp = Array.from({ length: 3 }, () => Array(3).fill(0));

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] == 1) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1; 
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                maxSize = Math.max(maxSize, dp[i][j]);
            }
        }
    }

    return maxSize;
}

let matrix = [];

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        rl.once('line', (line3) => {
            matrix.push(line1.split(' ').map(Number));
            matrix.push(line2.split(' ').map(Number));
            matrix.push(line3.split(' ').map(Number));

            console.log(largestSquareMatrix(matrix));

            rl.close();
        });
    });
});
