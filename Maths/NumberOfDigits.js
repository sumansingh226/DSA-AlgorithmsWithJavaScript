// given a number addEventListener. find out  and return the number of digits in a number

const countsDigits = (n) => {
    let numberOfDigits = 0;

    while (n > 0) {
        numberOfDigits = numberOfDigits + 1;
        n = Math.floor(n / 10); //Math.floor is a JavaScript function that rounds a number down to the nearest integer.
    }

    return numberOfDigits;
};

const result = countsDigits(7789);
console.log("result", result);
