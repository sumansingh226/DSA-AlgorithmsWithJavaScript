// 6. [*] Create a program to check if a string is a palindrome.


const idStringPalindrome = str => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseStr = "";
    for (let index = cleanStr.length - 1; index > 0; index--) {
        reverseStr += cleanStr[index];
    }
    return reverseStr;
}

const inputStr = "A man, a plan, a canal, Panama!"
const result = idStringPalindrome(inputStr);
if (inputStr === result) {
    console.log(`${inputStr} is a palindrome.`);
} else {
    console.log(`${inputStr} is not a palindrome.`);
}