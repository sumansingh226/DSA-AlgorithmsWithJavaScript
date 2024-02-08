//print  sum of n numbers using recursion

// Parameterized Recursion:
function sumOfNParam(n, acc = 0) {
    if (n === 0) { // Base case
        return acc;
    } else {
        return sumOfNParam(n - 1, acc + n); // Recursive call with accumulator
    }
}

// Example usage
let result = sumOfNParam(5);
console.log("Sum of first 5 natural numbers:", result); // Output: 15


// Functional Recursion
function sumOfN(n) {
    if (n === 0) { // Base case
        return 0;
    } else {
        return n + sumOfN(n - 1); // Recursive call
    }
}

// Example usage
let result1 = sumOfN(5);
console.log("Sum of first 5 natural numbers:", result1); // Output: 15
