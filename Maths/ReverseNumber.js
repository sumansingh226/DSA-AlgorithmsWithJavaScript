
// reverse number 


const reverseDigits = (n) => {
    let reverseOfDigits = "";
    while (n > 0) {
        reverseOfDigits += (n % 10);
        n = Math.floor(n / 10);
    }
    return reverseOfDigits;
};

const result = reverseDigits(976541230);
console.log("result : ", result);