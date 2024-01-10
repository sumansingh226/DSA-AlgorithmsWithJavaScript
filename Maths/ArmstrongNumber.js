// if n = 371  = 3cube + 7 cube + 1 cube = 371  then number is armstrong number 


const isArmStrongNumber = (n) => {
    let originalNumber = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += Math.pow(digit, 3);
        n = Math.floor(n / 10);
    }

    if (sum === originalNumber) {
        console.log(`${originalNumber} is an Armstrong Number.`);
    } else {
        console.log(`${originalNumber} is not an Armstrong Number.`);
    }
};

isArmStrongNumber(1);
