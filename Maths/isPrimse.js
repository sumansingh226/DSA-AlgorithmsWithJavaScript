
/*A prime number is a natural number greater than 1 that is not a product of two smaller 
natural numbers. In other words, a prime number is a positive integer greater than 1 that has
 no positive divisors other than 1 and itself.*/


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Example: Check if a number is prime
const yourNumber = 17;
if (isPrime(yourNumber)) {
    console.log(`${yourNumber} is a prime number.`);
} else {
    console.log(`${yourNumber} is not a prime number.`);
}
