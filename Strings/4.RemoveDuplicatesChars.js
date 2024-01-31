// 4. [ *] Write a function to remove duplicate characters from a string.

const removeDuplicatChars = str => {

    let charFreqency = {};
    let removeDulpcate = "";

    for (const char of str) {
        if (charFreqency[char]) charFreqency[char] += 1;
        else charFreqency[char] = 1;
    }
    for (const char of str) {
        if (charFreqency[char] > 1) {
            charFreqency[char] -= 1;
        }

    }
    for (const char of str) {
        if (charFreqency[char] === 1) {
            removeDulpcate += char;
        }

    }
    return removeDulpcate;
}


const str = "abcdabcd";
const result = removeDuplicatChars(str);
console.log(result);