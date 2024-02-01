// 6. [*] Create a program to check if a string is a palindrome.


const idStringPalindrome = str => {
    let reverseStr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reverseStr += str[index];
    }
    return reverseStr;
}

const inputStr = "racecar"
const result = idStringPalindrome(inputStr);
if (inputStr === result) {
    console.log(`${inputStr} is a palindrome.`);
} else {
    console.log(`${inputStr} is not a palindrome.`);
}