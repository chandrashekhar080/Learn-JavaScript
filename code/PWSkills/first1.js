var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function findTriplets(arr1, arr2, arr3, d) {
    const results = [];

    for (let a of arr1) {
        for (let b of arr2) {
            for (let c of arr3) {
                const maxVal = Math.max(a, b, c);
                const minVal = Math.min(a, b, c);

                if (maxVal - minVal < d) {
                    results.push([a, b, c]);
                }
            }
        }
    }

    return results;
}

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        rl.once('line', (line3) => {
            rl.once('line', (line4) => {
                const arr1 = line1.split(' ').map(Number);
                const arr2 = line2.split(' ').map(Number);
                const arr3 = line3.split(' ').map(Number);
                const d = parseInt(line4);

                console.log(findTriplets(arr1, arr2, arr3, d));
            });
        });
    });
});


