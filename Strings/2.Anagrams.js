// Implement a function to check if two strings are anagrams.

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

/*Time Complexity:
The time complexity of the areAnagrams function is O(n), where n is the total number of characters
 in both input strings. This is because the function iterates through each character in both strings 
 once to create the frequency counters, and then performs a comparison of the frequency counters,
  which also takes
  O(n) time.

Space Complexity:
The space complexity is O(c), where c is the total number of unique characters across both strings. 
This is because the frequency counters are stored in objects, and the space required is proportional 
to the number of unique characters. In the worst case, when the strings contain many unique characters, 
the space complexity can approach O(n), but it is typically less than that.

In summary:

Time Complexity: O(n)
Space Complexity: O(c), where c is the number of unique characters across both strings*/
