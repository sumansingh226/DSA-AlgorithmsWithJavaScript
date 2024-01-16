/*Euclidean Algorithm:

Take two numbers, say a and b.
Divide the larger number by the smaller one.
Replace the larger number with the smaller one and the smaller number with the remainder.
Repeat the process until the remainder is zero.
The last non-zero remainder is the GCD*/

// gcd(n1,n2)=  gcd(n1-n2,n2)

const GcdByEuclidean = (n1, n2) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

// Example usage:
const num1 = 20;
const num2 = 50;
const result = gcd(num1, num2);

console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
