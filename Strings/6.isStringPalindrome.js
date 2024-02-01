// 6. [*] Create a program to check if a string is a palindrome.


const idStringPalindrome = str => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (const value of cleanStr) {
        console.log(value);
    }
}

const inputStr = "A man, a plan, a canal, Panama!"
idStringPalindrome(inputStr);