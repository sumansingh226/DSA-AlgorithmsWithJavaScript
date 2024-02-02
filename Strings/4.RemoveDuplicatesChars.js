// 4. [ *] Write a function to remove duplicate characters from a string.

const removeDuplicateChars = str => {
    let charFrequency = {};
    let removeDuplicate = "";

    // Count the frequency of each character
    for (const char of str) {
        if (charFrequency[char]) {
            charFrequency[char] += 1;
        } else {
            charFrequency[char] = 1;
        }
    }

    // Build the string with unique characters
    for (const char of str) {
        if (charFrequency[char] === 1) {
            removeDuplicate += char;
            charFrequency[char] = 0; // Set the frequency to 0 to avoid duplicates
        }
    }

    return removeDuplicate;
}

const str = "abcdabcd";
const result = removeDuplicateChars(str);
console.log(result);



