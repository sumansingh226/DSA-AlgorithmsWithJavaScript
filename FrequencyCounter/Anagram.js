/*An anagram is a word or phrase formed by rearranging the letters of another word or phrase,
using all the original letters exactly once. Essentially,
 it's a permutation of the letters of a word or phrase to create a new word or phrase.

For example, the word "listen" and "silent" are anagrams of each other because they contain
the exact same letters.*/



const checkIsGivenStringAnaGram = (inputString1, inputString12) => {
    if (inputString1.length !== inputString12.length) {
        return false; // If the lengths are different, they can't be anagrams
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // Create frequency counters for each string
    for (let char of inputString1) {
        frequencyCounter1[char]
            ? frequencyCounter1[char]++
            : (frequencyCounter1[char] = 1);
    }

    for (let char of inputString12) {
        frequencyCounter2[char]
            ? frequencyCounter2[char]++
            : (frequencyCounter2[char] = 1);
    }

    // Compare the frequency of each character in both frequency counters
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false; // If a character is missing in one frequency counter, they are not anagrams
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false; // If the frequencies of a character are different, they are not anagrams
        }
    }

    return true; // If all checks pass, the strings are anagrams
}

console.log(checkIsGivenStringAnaGram("abcd", "dcba")); // Output: true
console.log(checkIsGivenStringAnaGram("abcd", "abcde")); // Output: false
console.log(checkIsGivenStringAnaGram("apple", "papel")); // Output: true
