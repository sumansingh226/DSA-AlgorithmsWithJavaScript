/*An anagram is a word or phrase formed by rearranging the letters of another word or phrase,
using all the original letters exactly once. Essentially,
 it's a permutation of the letters of a word or phrase to create a new word or phrase.

For example, the word "listen" and "silent" are anagrams of each other because they contain
the exact same letters.*/



const checkIsGivenStringAnaGram = (inputString1, inputString12) => {
    if (inputString1.length !== inputString12.length) {
        return false; // If the lengths are different, they can't be anagrams
    }
    const frequencyCounter = {};

    // Create frequency counter for str1
    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }

    // Compare the frequency of each character in both frequency counters
    for (let char of inputString12) {
        if (!frequencyCounter[char]) {
            return false; // If a character is missing or its frequency is 0, they are not anagrams
        } else {
            frequencyCounter[char] -= 1; // Decrement the frequency count
        }
    }

    return true; // If all checks pass, the strings are anagrams
}

console.log(checkIsGivenStringAnaGram("abcd", "dcba")); // Output: true
console.log(checkIsGivenStringAnaGram("abcd", "abcde")); // Output: false
console.log(checkIsGivenStringAnaGram("apple", "papel")); // Output: true
