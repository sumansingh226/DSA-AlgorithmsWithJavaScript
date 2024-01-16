/*The greatest common divisor (GCD), also known as the greatest common factor (GCF) or highest common
 factor (HCF), is the largest positive integer that divides two or more numbers without leaving a remainder.
  There are various methods to find the GCD of two or more numbers.*/



function gcd(a, b) {
    for (let i = Math.min(a, b); i >= 1; i--) {
        if (a % i === 0 && b % i == 0) {
            return i;
        }
    }
}

// Example usage:
const num1 = 20;
const num2 = 50;
const result = gcd(num1, num2);

console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
