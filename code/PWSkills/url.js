var readline = require('readline');
var fetch = require('node-fetch');
//dhyan rqkhna sb chijo ka , areh keybard se liku ya ese hi keybo aa rha camera m to
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function fetchWithRetry(url, retries, delay = 1000) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.text();
        console.log(`Data from ${url}`);
    } catch (error) {
        if (retries > 0) {
            console.log(`Retrying in ${delay}ms...`);
            setTimeout(() => fetchWithRetry(url, retries - 1, delay * 2), delay);
        } else {
            console.error(`Failed to fetch data from ${url}`);
        }
    }
}

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        const url = line1.trim();
        const retries = parseInt(line2);
        fetchWithRetry(url, retries);
    });
});



//required output hta hi diya usne
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function fetchWithRetry(url, retries, delay = 1000) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.text();
        console.log(`Data from ${url}`);
    } catch (error) {
        if (retries > 0) {
            console.log(`Retrying in ${delay}ms...`);
            setTimeout(() => fetchWithRetry(url, retries - 1, delay * 2), delay);
        } else {
            console.error(`Failed to fetch data from ${url}`);
        }
    }
}

rl.once('line', (line1) => {
    rl.once('line', (line2) => {
        const url = line1.trim();
        const retries = parseInt(line2, 10);
        fetchWithRetry(url, retries);
    });
});
