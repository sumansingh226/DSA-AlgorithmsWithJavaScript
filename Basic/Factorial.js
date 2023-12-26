const number = 5;

const factorialOfNumber = ((number) => {
    let factorial = 1; // Initialize factorial to 1
    for (let index = 1; index <= number; index++) {
        factorial *= index;
    }
    return factorial;
});

console.log("Factorial of number:", factorialOfNumber(number));
