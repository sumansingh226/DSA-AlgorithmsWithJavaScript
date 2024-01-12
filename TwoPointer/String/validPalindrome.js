

// Problem 1: Valid Palindrome
// Problem Statement:
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
