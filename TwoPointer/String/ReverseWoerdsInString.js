// Problem 3: Reverse Words in a String
// Problem Statement:
// Given an input string, reverse the order of the words.
function reverseWords(s) {
    const words = s.split(/\s+/).filter(word => word.length > 0);
    return words.reverse().join(' ');
}


console.log(reverseWords("the sky is blue"));