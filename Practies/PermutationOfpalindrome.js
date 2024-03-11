
// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
//  A permutation is a rearrangement of letters.
//  The palindrome does not need to be limited to just dictionary words.

function isPermutationOfPalindrome(str) {
    str = str.replace(/ /g, '').toLowerCase();
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;

    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
            if (oddCount > 1) {
                return false;
            }
        }
    }

    return true;
}

console.log(isPermutationOfPalindrome("Tact Coa"));
console.log(isPermutationOfPalindrome("hello")); 
