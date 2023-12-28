// palindrome of  number

const reverseDigits = (n) => {
    let reverseOfDigits = "";
    let checkForPalindrome = n;

    while (checkForPalindrome > 0) {
        reverseOfDigits += checkForPalindrome % 10;
        checkForPalindrome = Math.floor(checkForPalindrome / 10);
    }

    if (reverseOfDigits === n.toString()) {
        console.log(`${n} is Palindrome.`);
    } else {
        console.log(`${n} is not Palindrome.`);
    }
};

const result = reverseDigits(121);
