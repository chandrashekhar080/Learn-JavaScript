function fibonacci(n) {
    let a = 0, b = 1, series = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        series.push(next);
        a = b;
        b = next;
    }
    return series;
}

console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
