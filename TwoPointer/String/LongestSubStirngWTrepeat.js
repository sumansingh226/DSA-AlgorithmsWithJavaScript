// Problem 2: Longest Substring Without Repeating Characters
// Problem Statement:
// Given a string, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    const charIndex = {};
    let maxLength = 0, start = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndex[s[i]] !== undefined && charIndex[s[i]] >= start) {
            start = charIndex[s[i]] + 1;
        }
        charIndex[s[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
