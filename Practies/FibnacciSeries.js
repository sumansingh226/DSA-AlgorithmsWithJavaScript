
function generateFibonacci(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

// Example: Generate the first 10 Fibonacci numbers
console.log(generateFibonacci(10));
