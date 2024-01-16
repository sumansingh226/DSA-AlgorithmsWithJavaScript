/*Euclidean Algorithm:

Take two numbers, say a and b.
Divide the larger number by the smaller one.
Replace the larger number with the smaller one and the smaller number with the remainder.
Repeat the process until the remainder is zero.
The last non-zero remainder is the GCD*/

// gcd(n1,n2)=  gcd(n1-n2,n2)

const GcdByEuclidean = (a, b) => {
    while (a > 0 && b > 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    if (a == 0) return b;
    return a;
};

// Example usage:
const num1 = 11;
const num2 = 13;
const result = GcdByEuclidean(num1, num2);

console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
